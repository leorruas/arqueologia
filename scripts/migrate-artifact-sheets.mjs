import fs from "node:fs";
import path from "node:path";

const raiz = process.cwd();
const diretorioArtefatos = path.join(raiz, "03 artefatos");

const camposPadrao = [
  ["Artefato", ["artefato", "nome do artefato"]],
  ["Período", ["periodo", "periodo aproximado", "ano aproximado"]],
  ["Autoria", ["autoria", "pessoas ou equipes envolvidas", "pessoas/equipes envolvidas", "criador", "criadores"]],
  ["Produto ou contexto", ["produto ou contexto", "produto ou contexto onde apareceu", "produto onde apareceu", "contexto onde apareceu"]],
  ["Tipo(s) de design", ["tipo(s) de design", "tipos de design", "tipo de design"]],
  ["Empresas ou instituições relacionadas", ["empresas ou instituições relacionadas", "empresas relacionadas", "instituições relacionadas"]],
  ["Problema original", ["problema original"]],
  ["Mundo antes", ["mundo antes", "mundo antes da inovacao"]],
  ["Invenção", ["invencao"]],
  ["Refinamento", ["refinamento"]],
  ["Popularização", ["popularizacao"]],
  ["Padronização", ["padronizacao"]],
  ["Hipótese de design", ["hipotese de design"]],
  ["Comportamento aproveitado", ["comportamento aproveitado"]],
  ["Comportamento produzido", ["comportamento produzido", "comportamento criado"]],
  ["Relação de poder", ["relacao de poder"]],
  ["Consequências inesperadas", ["consequencias inesperadas", "consequencia inesperada"]],
  ["Destino ou transformação posterior", ["destino ou transformacao posterior", "destino do artefato", "transformacao posterior"]],
  ["Conceitos relacionados", ["conceitos relacionados"]],
  ["Variáveis relacionadas", ["variaveis relacionadas"]],
  ["Genealogia", ["genealogia", "genealogias"]],
  ["Percurso(s)", ["percurso(s)", "percursos"]],
  ["Parentes", ["parentes", "artefatos relacionados", "artefatos relacionados para estudos futuros"]],
  ["Leituras-chave", ["leituras-chave", "leituras chave", "leituras"]],
  ["Princípio de design revelado", ["principio de design revelado", "principio revelado", "principio de design"]],
  ["Questão em aberto", ["questao em aberto", "perguntas em aberto"]]
];

function normalizar(chave) {
  return chave.replace(/\*\*/g, "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

const nomesPadrao = new Set(camposPadrao.map(([campo]) => normalizar(campo)));

function ler(rel) {
  const p = path.join(raiz, rel);
  return fs.existsSync(p) ? fs.readFileSync(p, "utf8") : "";
}

function listarArquivos(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter(n => n.endsWith(".md")).map(n => path.join(dir, n));
}

function wikilinks(markdown, prefixo = null) {
  const out = [];
  const re = /\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]/g;
  let m;
  while ((m = re.exec(markdown))) {
    const target = m[1].trim();
    if (!prefixo || target.startsWith(prefixo)) out.push(`[[${target}${m[2] ? `|${m[2].trim()}` : ""}]]`);
  }
  return [...new Set(out)];
}

function alvoDoLink(link) {
  return link.match(/^\[\[([^\]|#]+)/)?.[1] || "";
}

function extrairSecao(markdown) {
  const inicioMatch = /^##\s+Ficha arqueológica\s*$/mi.exec(markdown);
  if (!inicioMatch) return null;
  const corpoInicio = inicioMatch.index + inicioMatch[0].length;
  const resto = markdown.slice(corpoInicio);
  const proximoHeading = /\n##\s+/.exec(resto);
  const corpoFim = proximoHeading ? corpoInicio + proximoHeading.index : markdown.length;
  return { inicio: inicioMatch.index, fim: corpoFim, corpo: markdown.slice(corpoInicio, corpoFim) };
}

function parsearTabela(corpo) {
  const dados = new Map();
  for (const linha of corpo.split(/\r?\n/)) {
    const item = linha.match(/^\s*\|\s*(.+?)\s*\|\s*(.*)\s*\|\s*$/);
    if (!item) continue;
    const chave = normalizar(item[1]);
    if (!chave || chave === "campo" || /^-+$/.test(chave)) continue;
    dados.set(chave, item[2].trim());
  }
  return dados.size ? dados : null;
}

function parsearLista(corpo) {
  const dados = new Map();
  let atual = null;
  for (const linha of corpo.split(/\r?\n/)) {
    const item = linha.match(/^\s*-\s+\*\*(.+?)\*\*:\s*(.*)$/);
    if (item) {
      atual = normalizar(item[1]);
      dados.set(atual, item[2].trim());
    } else if (atual && linha.trim() && !/^\s*#/.test(linha)) {
      dados.set(atual, `${dados.get(atual)} ${linha.trim()}`.trim());
    }
  }
  return dados.size ? dados : null;
}

function parsearFicha(corpo) {
  return parsearTabela(corpo) || parsearLista(corpo);
}

function obter(dados, aliases) {
  for (const alias of aliases) {
    const valor = dados.get(normalizar(alias));
    if (valor && !/Não explicitado na ficha anterior\.?/i.test(valor)) return valor;
  }
  return "";
}

function anexar(base, rotulo, valor) {
  if (!valor) return base;
  if (!base) return `${rotulo}: ${valor}`;
  if (base.includes(valor)) return base;
  return `${base} ${rotulo}: ${valor}`;
}

const indiceArtefatos = ler("00 índices/Indice de Artefatos.md");
const livros = ler("00 índices/Livros Indicados.md");
const percursos = listarArquivos(path.join(raiz, "05 percursos")).map(p => ({ p, md: fs.readFileSync(p, "utf8") }));

const mapaTipoPorArtefato = new Map();
const mapaHeadingTipo = new Map([
  ["design de produto e mobiliário", "[[00 tipos de design/Design de Produto|Design de produto]]"],
  ["design gráfico e comunicação visual", "[[00 tipos de design/Design Grafico|Design gráfico]]"],
  ["tipografia", "[[00 tipos de design/Tipografia|Tipografia]]"],
  ["design de serviços, organização e pesquisa", "[[00 tipos de design/Design de Servicos|Design de serviços]]"],
  ["interfaces digitais e software", "[[00 tipos de design/Design de Interface|Design de interface]]"]
]);
let tipoAtual = "";
for (const linha of indiceArtefatos.split(/\r?\n/)) {
  const h = linha.match(/^##\s+(.+)$/);
  if (h) tipoAtual = mapaHeadingTipo.get(normalizar(h[1])) || "";
  const links = wikilinks(linha, "03 artefatos/");
  for (const link of links) if (tipoAtual) mapaTipoPorArtefato.set(normalizar(alvoDoLink(link)), tipoAtual);
}

function percursosDoArtefato(alvo) {
  const resultado = [];
  for (const { p, md } of percursos) {
    if (wikilinks(md, "03 artefatos/").some(l => normalizar(alvoDoLink(l)) === normalizar(alvo))) {
      const nome = path.basename(p, ".md");
      resultado.push(`[[05 percursos/${nome}|${nome}]]`);
    }
  }
  return resultado.join(", ");
}

function leiturasDoArtefato(alvo) {
  const resultado = [];
  for (const linha of livros.split(/\r?\n/)) {
    if (!linha.trim().startsWith("|")) continue;
    const links = wikilinks(linha, "03 artefatos/");
    if (!links.some(l => normalizar(alvoDoLink(l)) === normalizar(alvo))) continue;
    const cells = linha.split("|").map(c => c.trim()).filter(Boolean);
    if (cells[0] && !/Título do Livro/i.test(cells[0]) && !/^:?-+/.test(cells[0])) resultado.push(cells[0]);
  }
  return [...new Set(resultado)].join("; ");
}

function montarValores(dados, markdown, alvoArtefato) {
  const valores = Object.fromEntries(camposPadrao.map(([campo, aliases]) => [campo, obter(dados, aliases)]));

  valores["Tipo(s) de design"] ||= mapaTipoPorArtefato.get(normalizar(alvoArtefato)) || "Relação disciplinar ainda não classificada.";
  valores["Empresas ou instituições relacionadas"] ||= wikilinks(markdown, "empresas/").join(", ") || "Nenhuma organização materialmente necessária para explicar este estudo até o momento.";
  valores["Percurso(s)"] ||= percursosDoArtefato(alvoArtefato) || "Ainda não integrado a um percurso editorial.";
  valores["Leituras-chave"] ||= leiturasDoArtefato(alvoArtefato) || "Nenhuma leitura-chave registrada no índice bibliográfico até o momento.";

  valores["Produto ou contexto"] = anexar(valores["Produto ou contexto"], "Categoria", obter(dados, ["categoria"]));
  const hipoteseCentral = obter(dados, ["hipotese central"]);
  const hipoteseHumana = obter(dados, ["hipotese sobre o comportamento humano", "hipotese sobre a natureza humana"]);
  valores["Hipótese de design"] ||= hipoteseCentral || hipoteseHumana;
  if (hipoteseCentral && valores["Hipótese de design"] !== hipoteseCentral) valores["Hipótese de design"] = anexar(valores["Hipótese de design"], "Hipótese central", hipoteseCentral);
  if (hipoteseHumana && valores["Hipótese de design"] !== hipoteseHumana) valores["Hipótese de design"] = anexar(valores["Hipótese de design"], "Hipótese sobre o comportamento humano", hipoteseHumana);
  valores["Consequências inesperadas"] = anexar(valores["Consequências inesperadas"], "Capacidade ampliada", obter(dados, ["capacidade ampliada"]));
  valores["Consequências inesperadas"] = anexar(valores["Consequências inesperadas"], "Capacidade reduzida ou deslocada", obter(dados, ["capacidade reduzida ou deslocada"]));
  valores["Consequências inesperadas"] = anexar(valores["Consequências inesperadas"], "Custo invisível", obter(dados, ["custo invisivel"]));
  valores["Destino ou transformação posterior"] = anexar(valores["Destino ou transformação posterior"], "Legado", obter(dados, ["legado", "impacto historico"]));
  valores["Genealogia"] = anexar(valores["Genealogia"], "Família de ideias", obter(dados, ["familia de ideias"]));
  valores["Princípio de design revelado"] = anexar(valores["Princípio de design revelado"], "Por que funcionou", obter(dados, ["por que funcionou"]));

  const aliasesConsumidos = new Set(camposPadrao.flatMap(([, aliases]) => aliases.map(normalizar)));
  ["categoria","hipotese central","hipotese sobre o comportamento humano","hipotese sobre a natureza humana","capacidade ampliada","capacidade reduzida ou deslocada","custo invisivel","legado","impacto historico","familia de ideias","por que funcionou"].forEach(c => aliasesConsumidos.add(normalizar(c)));
  const extras = [...dados.entries()].filter(([chave]) => !aliasesConsumidos.has(chave));
  if (extras.length) valores["Consequências inesperadas"] = anexar(valores["Consequências inesperadas"], "Registros adicionais preservados da ficha anterior", extras.map(([k,v]) => `${k}: ${v}`).join("; "));
  return valores;
}

function tabelaPadrao(valores) {
  const linhas = ["", "| Campo | Registro |", "|---|---|"];
  for (const [campo] of camposPadrao) linhas.push(`| **${campo}** | ${valores[campo] || "Ainda não explicitado."} |`);
  linhas.push("");
  return linhas.join("\n");
}

let alterados = 0;
for (const arquivo of listarArquivos(diretorioArtefatos)) {
  const markdown = fs.readFileSync(arquivo, "utf8");
  const secao = extrairSecao(markdown);
  if (!secao) continue;
  const dados = parsearFicha(secao.corpo);
  if (!dados) continue;
  const alvo = `03 artefatos/${path.basename(arquivo, ".md")}`;
  const valores = montarValores(dados, markdown, alvo);
  const jaPadrao = dados.size === camposPadrao.length && [...nomesPadrao].every(c => dados.has(c));
  const camposNovosComDados = ["Tipo(s) de design", "Empresas ou instituições relacionadas", "Percurso(s)", "Leituras-chave"].every(c => obter(dados, [c]));
  if (jaPadrao && camposNovosComDados) continue;
  const novaSecao = `## Ficha arqueológica${tabelaPadrao(valores)}`;
  const atualizado = markdown.slice(0, secao.inicio) + novaSecao + markdown.slice(secao.fim);
  fs.writeFileSync(arquivo, atualizado);
  alterados += 1;
  console.log(`Ficha enriquecida: ${path.relative(raiz, arquivo)}`);
}

console.log(`Migração concluída: ${alterados} fichas alinhadas ao schema de 26 campos.`);
