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
const headingsLegadosTipoDesign = new Set([
  "origens e surgimento",
  "evolução e desenvolvimento",
  "figuras e autores de destaque",
  "empresas e estúdios de destaque",
  "artefatos históricos relacionados",
  "conexões e referências"
]);
const headingsLegadosArtefato = new Set([
  "ficha técnica",
  "ficha resumo",
  "história e contexto de criação",
  "inovação e impacto",
  "evolução e desenvolvimento",
  "referências e onde encontrar"
]);
const headingsLegadosConceito = new Set([
  "aplicação nos artefatos",
  "variáveis relacionadas",
  "procedência",
  "o que este conceito explica",
  "limites e confusões possíveis",
  "genealogias relacionadas",
  "fontes",
  "ficha resumo do conceito"
]);
const headingsLegadosVariavel = new Set([
  "impacto nos artefatos",
  "aumentada / maximizada",
  "diminuída / minimizada",
  "aumenta a variável",
  "reduz a variável",
  "redistribui a variável",
  "ficha resumo da variável"
]);
const headingsLegadosPercurso = new Set(["o fio que une o percurso"]);
const camposFichaArtefato = [
  "Artefato","Período","Autoria","Produto ou contexto","Tipo(s) de design",
  "Empresas ou instituições relacionadas","Problema original","Mundo antes","Invenção",
  "Refinamento","Popularização","Padronização","Hipótese de design","Comportamento aproveitado",
  "Comportamento produzido","Relação de poder","Consequências inesperadas","Destino ou transformação posterior",
  "Conceitos relacionados","Variáveis relacionadas","Genealogia","Percurso(s)","Parentes","Leituras-chave",
  "Princípio de design revelado","Questão em aberto"
];
const metadadosConceitoObrigatorios = ["status", "origem", "grau"];
const metadadosVariavelObrigatorios = ["status", "eixo"];

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
  return texto.replace(/[`*_:[\]()]/g, " ").split(/\s+/).filter(Boolean).slice(1).filter(palavra => {
    const limpa = palavra.replace(/^["'“‘]|["'”’.,;!?]$/g, "");
    if (!limpa || conectivos.has(limpa.toLowerCase()) || siglas.test(limpa)) return false;
    return /^[A-ZÁÉÍÓÚÂÊÔÃÕÇ]/.test(limpa);
  });
}

function extrairTitulo(frontmatter) {
  const match = frontmatter.match(/^title:\s*["']?(.+?)["']?\s*$/mi);
  return match ? match[1].replace(/["']$/, "").trim() : "";
}

function temCampoFrontmatter(frontmatter, campo) {
  return new RegExp(`^${campo}:\\s*.+$`, "mi").test(frontmatter);
}

function headingEhApenasLink(texto) {
  const limpo = texto.replace(/^\d+\.\s*/, "").trim();
  return /^\[\[[^\]]+\]\]$/.test(limpo);
}

function corpoDaSecao(markdown, titulo) {
  const linhas = markdown.split(/\r?\n/);
  const alvo = `## ${titulo}`.toLowerCase();
  const inicio = linhas.findIndex(linha => linha.trim().toLowerCase() === alvo);
  if (inicio < 0) return "";
  const corpo = [];
  for (let i = inicio + 1; i < linhas.length; i += 1) {
    if (/^##\s+/.test(linhas[i])) break;
    corpo.push(linhas[i]);
  }
  return corpo.join("\n");
}

function normalizarCampo(texto) {
  return texto.replace(/\*\*/g, "").trim().normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

const candidatos = [];
const estruturasLegadasTipoDesign = [];
const estruturasLegadasArtefato = [];
const estruturasLegadasConceito = [];
const estruturasLegadasVariavel = [];
const estruturasLegadasPercurso = [];
const metadadosConceitoAusentes = [];
const metadadosVariavelAusentes = [];

for (const arquivo of listarMarkdowns(raiz)) {
  const relativo = path.relative(raiz, arquivo).split(path.sep).join("/");
  const categoria = relativo.split("/")[0];
  const markdown = fs.readFileSync(arquivo, "utf8");
  const frontmatter = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] || "";
  const titulo = extrairTitulo(frontmatter);
  const categoriaDeNomeProprio = categoria === "autores" || categoria === "empresas";

  if (!categoriaDeNomeProprio && titulo && palavrasCapitalizadas(titulo).length >= 1) candidatos.push({ sourcePath: relativo, kind: "frontmatter-title", text: titulo });

  if (categoria === "01 conceitos") {
    const ausentes = metadadosConceitoObrigatorios.filter(campo => !temCampoFrontmatter(frontmatter, campo));
    if (ausentes.length) metadadosConceitoAusentes.push({ sourcePath: relativo, fields: ausentes });
  }
  if (categoria === "02 variaveis") {
    const ausentes = metadadosVariavelObrigatorios.filter(campo => !temCampoFrontmatter(frontmatter, campo));
    if (ausentes.length) metadadosVariavelAusentes.push({ sourcePath: relativo, fields: ausentes });
  }

  if (categoria === "03 artefatos") {
    const fichas = markdown.match(/^##\s+Ficha arqueológica\s*$/gmi) || [];
    if (fichas.length === 0) estruturasLegadasArtefato.push({ sourcePath: relativo, line: null, text: "Ficha arqueológica ausente" });
    if (fichas.length > 1) estruturasLegadasArtefato.push({ sourcePath: relativo, line: null, text: "Mais de uma Ficha arqueológica" });
    const ficha = corpoDaSecao(markdown, "Ficha arqueológica");
    if (/^\s*-\s+\*\*/m.test(ficha)) estruturasLegadasArtefato.push({ sourcePath: relativo, line: null, text: "Ficha arqueológica ainda usa lista legada em vez de tabela" });
    if (fichas.length === 1 && !/^\s*\|\s*Campo\s*\|\s*Registro\s*\|/mi.test(ficha)) estruturasLegadasArtefato.push({ sourcePath: relativo, line: null, text: "Ficha arqueológica não usa a tabela padrão Campo/Registro" });
    if (fichas.length === 1) {
      const camposPresentes = new Set();
      for (const linha of ficha.split(/\r?\n/)) {
        const match = linha.match(/^\s*\|\s*(.+?)\s*\|/);
        if (!match) continue;
        const campo = normalizarCampo(match[1]);
        if (campo === "campo" || /^-+$/.test(campo)) continue;
        camposPresentes.add(campo);
      }
      const ausentes = camposFichaArtefato.filter(campo => !camposPresentes.has(normalizarCampo(campo)));
      if (ausentes.length) estruturasLegadasArtefato.push({ sourcePath: relativo, line: null, text: `Ficha arqueológica sem campos padrão: ${ausentes.join(", ")}` });
    }
  }

  markdown.split(/\r?\n/).forEach((linha, indice) => {
    const match = linha.match(/^(#{1,6})\s+(.+)$/);
    if (!match) return;
    const nivel = match[1].length;
    const texto = match[2].replace(/\s+#+\s*$/, "").trim();
    if (nivel === 1) return;
    const normalizado = texto.toLowerCase();
    if (categoria === "00 tipos de design" && headingsLegadosTipoDesign.has(normalizado)) estruturasLegadasTipoDesign.push({ sourcePath: relativo, line: indice + 1, text: texto });
    if (categoria === "03 artefatos" && headingsLegadosArtefato.has(normalizado)) estruturasLegadasArtefato.push({ sourcePath: relativo, line: indice + 1, text: texto });
    if (categoria === "01 conceitos" && headingsLegadosConceito.has(normalizado)) estruturasLegadasConceito.push({ sourcePath: relativo, line: indice + 1, text: texto });
    if (categoria === "02 variaveis" && headingsLegadosVariavel.has(normalizado)) estruturasLegadasVariavel.push({ sourcePath: relativo, line: indice + 1, text: texto });
    if (categoria === "05 percursos") {
      if (/^\d+\.\s+/.test(texto)) estruturasLegadasPercurso.push({ sourcePath: relativo, line: indice + 1, text: texto });
      if (headingsLegadosPercurso.has(normalizado)) estruturasLegadasPercurso.push({ sourcePath: relativo, line: indice + 1, text: texto });
    }
    if (headingEhApenasLink(texto)) return;
    if (palavrasCapitalizadas(texto).length >= 1) candidatos.push({ sourcePath: relativo, kind: `h${nivel}`, line: indice + 1, text: texto });
  });
}

function agruparPorArquivo(itens) {
  const mapa = new Map();
  for (const item of itens) {
    if (!mapa.has(item.sourcePath)) mapa.set(item.sourcePath, []);
    mapa.get(item.sourcePath).push(item);
  }
  return mapa;
}

const porArquivo = agruparPorArquivo(candidatos);
const legadosTipoDesignPorArquivo = agruparPorArquivo(estruturasLegadasTipoDesign);
const legadosArtefatoPorArquivo = agruparPorArquivo(estruturasLegadasArtefato);
const legadosConceitoPorArquivo = agruparPorArquivo(estruturasLegadasConceito);
const legadosVariavelPorArquivo = agruparPorArquivo(estruturasLegadasVariavel);
const legadosPercursoPorArquivo = agruparPorArquivo(estruturasLegadasPercurso);

const relatorio = {
  generatedAt: new Date().toISOString(),
  rule: "Sentence case em português do Brasil. Candidatos exigem revisão humana porque nomes próprios, siglas, marcas, produtos e títulos oficiais podem preservar capitalização.",
  typeDesignRule: "Tipos de design devem funcionar como ensaios disciplinares. Headings do template atual são permitidos; permanecem suspeitos apenas headings enciclopédicos legados.",
  pathRule: "Percursos devem funcionar como argumentos de leitura e não usar sequência numerada de resumos de artefatos.",
  artifactSheetRule: "Cada artefato deve conter uma única Ficha arqueológica em tabela Campo/Registro com os 26 campos definidos no template atual.",
  candidateCount: candidatos.length,
  fileCount: porArquivo.size,
  files: [...porArquivo.entries()].map(([sourcePath, items]) => ({ sourcePath, items })),
  legacyTypeDesignStructureCount: estruturasLegadasTipoDesign.length,
  legacyTypeDesignFileCount: legadosTipoDesignPorArquivo.size,
  legacyTypeDesignFiles: [...legadosTipoDesignPorArquivo.entries()].map(([sourcePath, items]) => ({ sourcePath, items })),
  legacyArtifactStructureCount: estruturasLegadasArtefato.length,
  legacyArtifactFileCount: legadosArtefatoPorArquivo.size,
  legacyArtifactFiles: [...legadosArtefatoPorArquivo.entries()].map(([sourcePath, items]) => ({ sourcePath, items })),
  legacyConceptStructureCount: estruturasLegadasConceito.length,
  legacyConceptFileCount: legadosConceitoPorArquivo.size,
  legacyConceptFiles: [...legadosConceitoPorArquivo.entries()].map(([sourcePath, items]) => ({ sourcePath, items })),
  conceptMetadataMissingCount: metadadosConceitoAusentes.length,
  conceptMetadataMissingFiles: metadadosConceitoAusentes,
  legacyVariableStructureCount: estruturasLegadasVariavel.length,
  legacyVariableFileCount: legadosVariavelPorArquivo.size,
  legacyVariableFiles: [...legadosVariavelPorArquivo.entries()].map(([sourcePath, items]) => ({ sourcePath, items })),
  variableMetadataMissingCount: metadadosVariavelAusentes.length,
  variableMetadataMissingFiles: metadadosVariavelAusentes,
  legacyPathStructureCount: estruturasLegadasPercurso.length,
  legacyPathFileCount: legadosPercursoPorArquivo.size,
  legacyPathFiles: [...legadosPercursoPorArquivo.entries()].map(([sourcePath, items]) => ({ sourcePath, items }))
};

fs.writeFileSync(path.join(raiz, "editorial-report.json"), JSON.stringify(relatorio, null, 2));
console.log(`Auditoria editorial: ${candidatos.length} candidatos; ${estruturasLegadasTipoDesign.length} headings legados em tipos de design; ${estruturasLegadasArtefato.length} problemas de artefato; ${estruturasLegadasConceito.length} problemas de conceito; ${estruturasLegadasVariavel.length} problemas de variável; ${estruturasLegadasPercurso.length} problemas de percurso.`);
