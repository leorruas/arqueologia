import fs from "node:fs";
import path from "node:path";

const raiz = process.cwd();
const relatorioPath = path.join(raiz, "link-report.json");
const pistasPath = path.join(raiz, "Pistas de pesquisa.md");
const inicioAutomatico = "<!-- PISTAS-AUTOMATICAS:INICIO -->";
const fimAutomatico = "<!-- PISTAS-AUTOMATICAS:FIM -->";

if (!fs.existsSync(relatorioPath)) {
  console.log("Relatório de links ainda não existe; nenhuma pista consolidada.");
  process.exit(0);
}

const relatorio = JSON.parse(fs.readFileSync(relatorioPath, "utf8"));
const porArquivo = new Map((relatorio.files || []).map(item => [item.sourcePath, new Set(item.unresolved || [])]));
const pistas = new Map();
let arquivosAlterados = 0;
let linksConvertidos = 0;

function normalizar(valor = "") {
  return String(valor)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function limparReferenciaWiki(valor) {
  let referencia = String(valor || "")
    .replace(/^\[\[/, "")
    .replace(/\]\]$/, "")
    .split("|")[0]
    .split("#")[0]
    .replace(/^\.\//, "")
    .trim();
  while (referencia.endsWith("\\")) referencia = referencia.slice(0, -1).trimEnd();
  return referencia.replace(/\.md$/i, "").trim();
}

function rotuloDoWiki(conteudo) {
  const partes = String(conteudo).split("|");
  if (partes.length > 1) return partes.slice(1).join("|").replace(/^\\/, "").trim();
  return limparReferenciaWiki(conteudo).split("/").pop();
}

function registrarPista(destino, origem) {
  if (!pistas.has(destino)) pistas.set(destino, new Set());
  pistas.get(destino).add(origem);
}

for (const [sourcePath, naoResolvidos] of porArquivo.entries()) {
  const absoluto = path.join(raiz, sourcePath);
  if (!fs.existsSync(absoluto)) continue;
  const original = fs.readFileSync(absoluto, "utf8");

  const novo = original.replace(/\[\[([^\]]+)\]\]/g, (wikiCompleto, conteudo) => {
    const destino = limparReferenciaWiki(conteudo);
    if (!naoResolvidos.has(destino)) return wikiCompleto;

    // Pistas de pesquisa é um arquivo de governança na raiz. Mesmo que um
    // relatório antigo o marque como não resolvido, ele nunca deve virar
    // uma pista sobre si próprio.
    if (normalizar(destino.split("/").pop()) === "pistas de pesquisa") return wikiCompleto;

    registrarPista(destino, sourcePath);
    linksConvertidos += 1;
    return rotuloDoWiki(conteudo);
  });

  if (novo !== original) {
    fs.writeFileSync(absoluto, novo);
    arquivosAlterados += 1;
  }
}

function grupo(destino) {
  if (destino.startsWith("03 artefatos/")) return "Artefatos";
  if (destino.startsWith("01 conceitos/")) return "Conceitos";
  if (destino.startsWith("02 variaveis/")) return "Variáveis";
  if (destino.startsWith("autores/")) return "Autores";
  if (destino.startsWith("empresas/")) return "Empresas e organizações";
  return "Outras pistas";
}

const grupos = new Map();
for (const [destino, origens] of [...pistas.entries()].sort((a, b) => a[0].localeCompare(b[0], "pt-BR"))) {
  const nomeGrupo = grupo(destino);
  if (!grupos.has(nomeGrupo)) grupos.set(nomeGrupo, []);
  grupos.get(nomeGrupo).push({ destino, origens: [...origens].sort() });
}

const conteudoBase = fs.existsSync(pistasPath)
  ? fs.readFileSync(pistasPath, "utf8")
  : `---\ntitle: "Pistas de pesquisa"\ntype: "governanca"\nstatus: "ativo"\npublicar: false\n---\n\n# Pistas de pesquisa\n\nEste arquivo preserva possibilidades de investigação que ainda não possuem estudo próprio.\n`;

const padraoAutomatico = new RegExp(`\\n?${inicioAutomatico}[\\s\\S]*?${fimAutomatico}\\n?`, "m");
let conteudo = conteudoBase.replace(padraoAutomatico, "\n").trimEnd();

if (pistas.size) {
  let bloco = `\n\n${inicioAutomatico}\n## Pistas detectadas automaticamente\n\nEsta seção é regenerada pelo workflow a partir de wikilinks sem destino. As seções manuais acima nunca devem ser substituídas por esta rotina.\n`;

  for (const [nomeGrupo, itens] of grupos.entries()) {
    bloco += `\n### ${nomeGrupo}\n\n`;
    for (const item of itens) {
      const nome = item.destino.split("/").pop();
      bloco += `- **${nome}**: citado em ${item.origens.map(origem => `\`${origem}\``).join(", ")}\n`;
    }
  }

  bloco += `\n${fimAutomatico}\n`;
  conteudo += bloco;
} else {
  conteudo += "\n";
}

if (conteudo !== conteudoBase) fs.writeFileSync(pistasPath, conteudo);
console.log(`Pistas: ${linksConvertidos} wikilinks convertidos em texto em ${arquivosAlterados} arquivos; ${pistas.size} destinos automáticos registrados sem substituir pistas manuais.`);
