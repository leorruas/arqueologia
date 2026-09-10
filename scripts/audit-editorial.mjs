import fs from "node:fs";
import path from "node:path";

const raiz = process.cwd();
const categorias = new Set([
  "00 tipos de design",
  "00 índices",
  "01 conceitos",
  "02 variaveis",
  "03 artefatos",
  "04 genealogias",
  "05 percursos",
  "autores",
  "empresas"
]);

const conectivos = new Set(["a","as","o","os","de","da","das","do","dos","e","em","na","nas","no","nos","para","por","com","sem","ou"]);
const siglas = /^[A-Z0-9][A-Z0-9.-]{1,}$/;

function listarMarkdowns(diretorio, acumulador = []) {
  for (const entrada of fs.readdirSync(diretorio, { withFileTypes: true })) {
    const absoluto = path.join(diretorio, entrada.name);
    const relativo = path.relative(raiz, absoluto).split(path.sep).join("/");
    const topo = relativo.split("/")[0];
    if (entrada.isDirectory()) {
      if (categorias.has(topo)) listarMarkdowns(absoluto, acumulador);
      continue;
    }
    if (entrada.name.endsWith(".md") && categorias.has(topo)) acumulador.push(absoluto);
  }
  return acumulador;
}

function palavrasCapitalizadas(texto) {
  return texto
    .replace(/[`*_:[\]()]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .slice(1)
    .filter(palavra => {
      const limpa = palavra.replace(/^["'“‘]|["'”’.,;!?]$/g, "");
      if (!limpa || conectivos.has(limpa.toLowerCase()) || siglas.test(limpa)) return false;
      return /^[A-ZÁÉÍÓÚÂÊÔÃÕÇ]/.test(limpa);
    });
}

function extrairTitulo(frontmatter) {
  const match = frontmatter.match(/^title:\s*["']?(.+?)["']?\s*$/mi);
  return match ? match[1].replace(/["']$/, "").trim() : "";
}

function headingEhApenasLink(texto) {
  const limpo = texto.replace(/^\d+\.\s*/, "").trim();
  return /^\[\[[^\]]+\]\]$/.test(limpo);
}

const candidatos = [];

for (const arquivo of listarMarkdowns(raiz)) {
  const relativo = path.relative(raiz, arquivo).split(path.sep).join("/");
  const categoria = relativo.split("/")[0];
  const markdown = fs.readFileSync(arquivo, "utf8");
  const frontmatter = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] || "";
  const titulo = extrairTitulo(frontmatter);

  const categoriaDeNomeProprio = categoria === "autores" || categoria === "empresas";
  if (!categoriaDeNomeProprio && titulo && palavrasCapitalizadas(titulo).length >= 1) {
    candidatos.push({ sourcePath: relativo, kind: "frontmatter-title", text: titulo });
  }

  markdown.split(/\r?\n/).forEach((linha, indice) => {
    const match = linha.match(/^(#{1,6})\s+(.+)$/);
    if (!match) return;
    const nivel = match[1].length;
    const texto = match[2].replace(/\s+#+\s*$/, "").trim();
    if (nivel === 1 || headingEhApenasLink(texto)) return;
    if (palavrasCapitalizadas(texto).length >= 1) {
      candidatos.push({ sourcePath: relativo, kind: `h${nivel}`, line: indice + 1, text: texto });
    }
  });
}

const porArquivo = new Map();
for (const item of candidatos) {
  if (!porArquivo.has(item.sourcePath)) porArquivo.set(item.sourcePath, []);
  porArquivo.get(item.sourcePath).push(item);
}

const relatorio = {
  generatedAt: new Date().toISOString(),
  rule: "Sentence case em português do Brasil. Candidatos exigem revisão humana porque nomes próprios, siglas, marcas, produtos e títulos oficiais podem preservar capitalização.",
  candidateCount: candidatos.length,
  fileCount: porArquivo.size,
  files: [...porArquivo.entries()].map(([sourcePath, items]) => ({ sourcePath, items }))
};

fs.writeFileSync(path.join(raiz, "editorial-report.json"), JSON.stringify(relatorio, null, 2));
console.log(`Auditoria editorial: ${candidatos.length} candidatos em ${porArquivo.size} arquivos.`);
