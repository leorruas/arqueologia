import fs from "node:fs";
import path from "node:path";

const raiz = process.cwd();
const categoriasPublicas = new Set([
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

const referenciasDeGovernanca = new Set([
  "index",
  "me",
  "log",
  "instrucoes de arqueologia",
  "guia de escrita",
  "futuras refatoracoes",
  "pistas de pesquisa"
]);

function listarMarkdowns(diretorio, acumulador = []) {
  for (const entrada of fs.readdirSync(diretorio, { withFileTypes: true })) {
    const caminhoAbsoluto = path.join(diretorio, entrada.name);
    const relativo = path.relative(raiz, caminhoAbsoluto).split(path.sep).join("/");
    const raizDoArquivo = relativo.split("/")[0];

    if (entrada.isDirectory()) {
      if (!categoriasPublicas.has(raizDoArquivo)) continue;
      listarMarkdowns(caminhoAbsoluto, acumulador);
      continue;
    }

    if (!entrada.name.endsWith(".md")) continue;
    if (!relativo.includes("/") || !categoriasPublicas.has(raizDoArquivo)) continue;
    acumulador.push(caminhoAbsoluto);
  }
  return acumulador;
}

function retirarAspas(valor = "") {
  return valor.trim().replace(/^['"]|['"]$/g, "");
}

function normalizar(valor = "") {
  return String(valor)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\\/g, "/")
    .replace(/\.md$/i, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extrairFrontmatter(markdown) {
  const match = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---\s*/);
  return match ? match[1] : "";
}

function extrairCampoTexto(frontmatter, campo) {
  const match = frontmatter.match(new RegExp(`^${campo}:\\s*(.+)$`, "mi"));
  return match ? retirarAspas(match[1]) : "";
}

function extrairLista(frontmatter, campo) {
  const linhas = frontmatter.split(/\r?\n/);
  const valores = [];
  let coletando = false;

  for (const linha of linhas) {
    const inicio = linha.match(new RegExp(`^${campo}:\\s*(.*)$`, "i"));
    if (inicio) {
      coletando = true;
      const inline = inicio[1].trim();
      if (inline.startsWith("[") && inline.endsWith("]")) {
        inline.slice(1, -1).split(",").map(retirarAspas).filter(Boolean).forEach(valor => valores.push(valor));
        coletando = false;
      } else if (inline) {
        valores.push(retirarAspas(inline));
        coletando = false;
      }
      continue;
    }

    if (!coletando) continue;
    const item = linha.match(/^\s+-\s+(.+)$/);
    if (item) {
      valores.push(retirarAspas(item[1]));
      continue;
    }
    if (/^\S/.test(linha)) coletando = false;
  }

  return [...new Set(valores.filter(Boolean))];
}

function limparMarkdown(markdown) {
  return markdown
    .replace(/^---[\s\S]*?---\s*/, "")
    .replace(/```[\s\S]*?```/g, bloco => bloco.replace(/```[^\n]*\n?|```/g, " "))
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\[\[([^\]|#]+)(?:#[^\]|]+)?(?:\|([^\]]+))?\]\]/g, (_, destino, rotulo) => rotulo || destino)
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^[>\-*+]\s+/gm, "")
    .replace(/\|/g, " ")
    .replace(/[*_~=]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function limparHeading(texto) {
  return texto.replace(/\s+#+\s*$/, "").replace(/[*_`~=]/g, "").trim();
}

function extrairHeadings(markdown) {
  return markdown
    .split(/\r?\n/)
    .map(linha => linha.match(/^(#{1,6})\s+(.+)$/))
    .filter(Boolean)
    .map(match => ({ level: match[1].length, text: limparHeading(match[2]) }))
    .filter(item => item.text);
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

function extrairWikiLinks(markdown) {
  const links = [];
  const regex = /\[\[([^\]]+)\]\]/g;
  let match;
  while ((match = regex.exec(markdown))) {
    const bruto = limparReferenciaWiki(match[1]);
    if (bruto) links.push(bruto);
  }
  return [...new Set(links)];
}

function referenciaIgnoravel(valor) {
  const limpa = limparReferenciaWiki(valor);
  const chave = normalizar(limpa.split("/").pop());
  return referenciasDeGovernanca.has(chave) || normalizar(limpa).startsWith("templates/");
}

const artigos = listarMarkdowns(raiz)
  .map(caminhoAbsoluto => {
    const sourcePath = path.relative(raiz, caminhoAbsoluto).split(path.sep).join("/");
    const markdown = fs.readFileSync(caminhoAbsoluto, "utf8");
    const frontmatter = extrairFrontmatter(markdown);
    const nomeArquivo = path.basename(sourcePath, ".md");
    const categoria = sourcePath.split("/")[0];
    const headingData = extrairHeadings(markdown);

    return {
      title: extrairCampoTexto(frontmatter, "title") || nomeArquivo,
      fileTitle: nomeArquivo,
      category: categoria,
      sourcePath,
      type: extrairCampoTexto(frontmatter, "type"),
      status: extrairCampoTexto(frontmatter, "status"),
      publicar: extrairCampoTexto(frontmatter, "publicar").toLowerCase() !== "false",
      origem: extrairCampoTexto(frontmatter, "origem"),
      grau: extrairCampoTexto(frontmatter, "grau"),
      eixo: extrairCampoTexto(frontmatter, "eixo"),
      tags: extrairLista(frontmatter, "tags"),
      aliases: extrairLista(frontmatter, "aliases"),
      headings: headingData.map(item => item.text),
      headingData,
      wikiLinksRaw: extrairWikiLinks(markdown),
      plainText: limparMarkdown(markdown)
    };
  })
  .sort((a, b) => a.sourcePath.localeCompare(b.sourcePath, "pt-BR", { numeric: true, sensitivity: "base" }));

const porCaminho = new Map(), porNome = new Map();
function acrescentar(mapa, chave, artigo) {
  if (!mapa.has(chave)) mapa.set(chave, []);
  if (!mapa.get(chave).includes(artigo)) mapa.get(chave).push(artigo);
}
for (const artigo of artigos) {
  acrescentar(porCaminho, normalizar(artigo.sourcePath), artigo);
  for (const chave of [artigo.fileTitle, artigo.title, ...artigo.aliases].map(normalizar).filter(Boolean)) acrescentar(porNome, chave, artigo);
}
function resolver(referenciaBruta) {
  const referencia = limparReferenciaWiki(referenciaBruta);
  const caminho = porCaminho.get(normalizar(referencia)) || [];
  // A qualified path must resolve exactly; never silently fall back to another category.
  const candidatos = caminho.length ? caminho : referencia.includes("/") ? [] : porNome.get(normalizar(referencia)) || [];
  return { artigo: candidatos.length === 1 ? candidatos[0] : null, candidatos };
}
for (const artigo of artigos) {
  artigo.related = [];
  artigo.unresolved = [];
  artigo.ambiguous = [];
  for (const referencia of artigo.wikiLinksRaw) {
    const resultado = resolver(referencia);
    if (resultado.candidatos.length > 1) artigo.ambiguous.push({target:referencia,candidates:resultado.candidatos.map(a=>a.sourcePath)});
    else if (!resultado.artigo && !referenciaIgnoravel(referencia)) artigo.unresolved.push(referencia);
    else if (resultado.artigo?.publicar && resultado.artigo !== artigo) artigo.related.push(resultado.artigo.sourcePath);
  }
  artigo.related = [...new Set(artigo.related)];
  artigo.backlinks = [];
  delete artigo.wikiLinksRaw;
}
const artigosPublicos = artigos.filter(a=>a.publicar);

const porSourcePath = new Map(artigos.map(artigo => [artigo.sourcePath, artigo]));
for (const artigo of artigosPublicos) {
  for (const destino of artigo.related) {
    const relacionado = porSourcePath.get(destino);
    if (relacionado && !relacionado.backlinks.includes(artigo.sourcePath)) relacionado.backlinks.push(artigo.sourcePath);
  }
}

const arquivosComFalha = artigosPublicos
  .filter(artigo => artigo.unresolved.length)
  .map(artigo => ({ sourcePath: artigo.sourcePath, unresolved: artigo.unresolved }));
const brokenLinkCount = arquivosComFalha.reduce((total, artigo) => total + artigo.unresolved.length, 0);

const indice = {
  version: 2,
  generatedAt: new Date().toISOString(),
  articleCount: artigosPublicos.length,
  brokenLinkCount,
  articles: artigosPublicos
};

const ambiguousFiles = artigosPublicos.filter(a=>a.ambiguous.length).map(a=>({sourcePath:a.sourcePath,ambiguous:a.ambiguous}));
const ambiguousLinkCount = ambiguousFiles.reduce((n,a)=>n+a.ambiguous.length,0);
const relatorioLinks = {
  generatedAt: indice.generatedAt,
  brokenLinkCount,
  ambiguousLinkCount,
  ambiguousFiles,
  fileCount: arquivosComFalha.length,
  files: arquivosComFalha
};

fs.writeFileSync(path.join(raiz, "search-index.json"), JSON.stringify(indice));
fs.writeFileSync(path.join(raiz, "link-report.json"), JSON.stringify(relatorioLinks, null, 2));
console.log(`Índice de arqueologia gerado com ${artigosPublicos.length} entradas e ${brokenLinkCount} wikilinks não resolvidos.`);
