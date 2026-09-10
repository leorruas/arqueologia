import fs from "node:fs";
import path from "node:path";

const raiz = process.cwd();
const categorias = [
  "00 tipos de design",
  "00 índices",
  "01 conceitos",
  "02 variaveis",
  "03 artefatos",
  "04 genealogias",
  "05 percursos",
  "autores",
  "empresas"
];

function listarMarkdowns(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entrada of fs.readdirSync(dir, { withFileTypes: true })) {
    const absoluto = path.join(dir, entrada.name);
    if (entrada.isDirectory()) listarMarkdowns(absoluto, acc);
    else if (entrada.name.endsWith(".md")) acc.push(absoluto);
  }
  return acc;
}

function relativo(p) {
  return path.relative(raiz, p).split(path.sep).join("/");
}

function semExtensao(p) {
  return p.replace(/\.md$/i, "");
}

function normalizar(s) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\\\|/g, "|")
    .trim()
    .toLowerCase();
}

function titulo(markdown, arquivo) {
  const front = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] || "";
  const fm = front.match(/^title:\s*["']?(.+?)["']?\s*$/mi)?.[1];
  return (fm || path.basename(arquivo, ".md")).replace(/["']$/, "").trim();
}

function wikilinks(markdown) {
  const links = [];
  const re = /\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]/g;
  let m;
  while ((m = re.exec(markdown))) links.push({ target: m[1].trim(), label: (m[2] || "").trim() });
  return links;
}

function corpoSecao(markdown, heading) {
  const linhas = markdown.split(/\r?\n/);
  const i = linhas.findIndex(l => l.trim().toLowerCase() === `## ${heading}`.toLowerCase());
  if (i < 0) return "";
  const out = [];
  for (let n = i + 1; n < linhas.length; n++) {
    if (/^##\s+/.test(linhas[n])) break;
    out.push(linhas[n]);
  }
  return out.join("\n");
}

const arquivos = [];
for (const categoria of categorias) {
  const dir = path.join(raiz, categoria);
  for (const p of listarMarkdowns(dir)) {
    const markdown = fs.readFileSync(p, "utf8");
    arquivos.push({
      path: relativo(p),
      stem: semExtensao(relativo(p)),
      title: titulo(markdown, p),
      markdown,
      links: wikilinks(markdown)
    });
  }
}

const porStem = new Map(arquivos.map(a => [normalizar(a.stem), a]));
const porBasename = new Map();
for (const a of arquivos) {
  const base = normalizar(path.basename(a.stem));
  if (!porBasename.has(base)) porBasename.set(base, []);
  porBasename.get(base).push(a);
}

function resolver(target) {
  const limpo = target.replace(/\.md$/i, "");
  const direto = porStem.get(normalizar(limpo));
  if (direto) return direto;
  const candidatos = porBasename.get(normalizar(path.basename(limpo))) || [];
  return candidatos.length === 1 ? candidatos[0] : null;
}

const inbound = new Map(arquivos.map(a => [a.path, []]));
for (const origem of arquivos) {
  for (const link of origem.links) {
    const alvo = resolver(link.target);
    if (alvo) inbound.get(alvo.path).push(origem.path);
  }
}

const problemas = [];
function add(kind, sourcePath, detail, targetPath = null) {
  problemas.push({ kind, sourcePath, targetPath, detail });
}

const indicePorCategoria = {
  "03 artefatos": "00 índices/Indice de Artefatos.md",
  "01 conceitos": "00 índices/Indice de Conceitos.md",
  "02 variaveis": "00 índices/Indice de Variaveis.md",
  "autores": "00 índices/Indice de Autores.md",
  "empresas": "00 índices/Indice de Empresas.md"
};

for (const [categoria, indicePath] of Object.entries(indicePorCategoria)) {
  const indice = arquivos.find(a => a.path === indicePath);
  if (!indice) continue;
  const alvosIndice = new Set(indice.links.map(l => resolver(l.target)?.path).filter(Boolean));
  for (const a of arquivos.filter(x => x.path.startsWith(`${categoria}/`))) {
    if (!alvosIndice.has(a.path)) add("missing-from-index", a.path, `Arquivo não aparece em ${indicePath}.`, indicePath);
  }
}

const index = arquivos.find(a => a.path === "index.md") || (() => {
  const p = path.join(raiz, "index.md");
  if (!fs.existsSync(p)) return null;
  const markdown = fs.readFileSync(p, "utf8");
  return { path: "index.md", markdown, links: wikilinks(markdown) };
})();

if (index) {
  const alvosIndex = new Set(index.links.map(l => resolver(l.target)?.path).filter(Boolean));
  for (const a of arquivos.filter(x => x.path.startsWith("04 genealogias/") || x.path.startsWith("05 percursos/"))) {
    if (!alvosIndex.has(a.path)) add("missing-from-home", a.path, "Genealogia ou percurso publicado não aparece no index.md.", "index.md");
  }
}

for (const artefato of arquivos.filter(a => a.path.startsWith("03 artefatos/"))) {
  const ficha = corpoSecao(artefato.markdown, "Ficha arqueológica");
  const linksFicha = wikilinks(ficha);
  for (const link of linksFicha) {
    const alvo = resolver(link.target);
    if (!alvo) continue;
    const categoriaAlvo = alvo.path.split("/")[0];
    if (!["01 conceitos", "02 variaveis", "04 genealogias", "05 percursos", "autores", "empresas", "00 tipos de design"].includes(categoriaAlvo)) continue;
    const devolve = alvo.links.some(l => resolver(l.target)?.path === artefato.path);
    if (!devolve) add("missing-reciprocal-link", artefato.path, `A ficha liga para ${alvo.path}, mas a nota relacionada não devolve o vínculo.`, alvo.path);
  }
}

for (const a of arquivos) {
  if (["00 índices", "00 tipos de design"].includes(a.path.split("/")[0])) continue;
  const entradas = inbound.get(a.path) || [];
  if (entradas.length === 0) add("orphan-node", a.path, "Nota sem links de entrada a partir do acervo auditado.");
}

for (const tipo of arquivos.filter(a => a.path.startsWith("00 tipos de design/"))) {
  const referencias = new Set(tipo.links.map(l => resolver(l.target)?.path).filter(Boolean));
  const nome = normalizar(tipo.title);
  for (const artefato of arquivos.filter(a => a.path.startsWith("03 artefatos/"))) {
    const ficha = corpoSecao(artefato.markdown, "Ficha arqueológica");
    const linhaTipo = ficha.split(/\r?\n/).find(l => normalizar(l).includes("tipo(s) de design"));
    if (!linhaTipo) continue;
    const aponta = wikilinks(linhaTipo).some(l => resolver(l.target)?.path === tipo.path);
    if (aponta && !referencias.has(artefato.path)) add("design-type-drift", artefato.path, `Artefato declara ${tipo.path}, mas o tipo de design não o referencia.`, tipo.path);
  }
}

const relatorio = {
  generatedAt: new Date().toISOString(),
  scope: "Integração do grafo: índices, home, reciprocidade explícita, tipos de design e nós órfãos.",
  issueCount: problemas.length,
  countsByKind: problemas.reduce((acc, p) => ((acc[p.kind] = (acc[p.kind] || 0) + 1), acc), {}),
  issues: problemas
};

fs.writeFileSync(path.join(raiz, "network-report.json"), JSON.stringify(relatorio, null, 2));
console.log(`Auditoria de rede: ${problemas.length} problemas.`, relatorio.countsByKind);
