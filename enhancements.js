const INDEX_URL = "search-index.json";

let indiceArqueologia = null;
let artigosIndice = [];
let indiceMontado = false;
let ultimaRotaRelacionada = "";

function tituloDaEntrada(item) {
  return String(item?.title || item?.fileTitle || "")
    .replace(/^\d+\.\s*/, "")
    .replace(/^\d+\s+/, "")
    .replace(/\.md$/i, "")
    .trim();
}

function rotaDaEntrada(item) {
  return `#/estudo/${encodeURIComponent(item.category)}/${encodeURIComponent(tituloDaEntrada(item))}`;
}

function criarLink(item, classe = "") {
  const link = document.createElement("a");
  link.className = classe;
  link.href = rotaDaEntrada(item);
  link.textContent = tituloDaEntrada(item);
  return link;
}

function tiposDeDesign() {
  return artigosIndice
    .filter(item => item.category === "00 tipos de design")
    .sort((a, b) => tituloDaEntrada(a).localeCompare(tituloDaEntrada(b), "pt-BR", { sensitivity: "base" }));
}

function artefatos() {
  return artigosIndice
    .filter(item => item.category === "03 artefatos")
    .sort((a, b) => tituloDaEntrada(a).localeCompare(tituloDaEntrada(b), "pt-BR", { sensitivity: "base" }));
}

function caminhosRelacionados(item) {
  return new Set([...(item?.related || []), ...(item?.backlinks || [])]);
}

function artefatosRelacionadosAoTipo(tipo) {
  const relacoesTipo = caminhosRelacionados(tipo);
  return artefatos().filter(artefato => {
    const relacoesArtefato = caminhosRelacionados(artefato);
    return relacoesArtefato.has(tipo.sourcePath) || relacoesTipo.has(artefato.sourcePath);
  });
}

function tiposRelacionadosAoArtefato(artefato) {
  const relacoesArtefato = caminhosRelacionados(artefato);
  return tiposDeDesign().filter(tipo => {
    const relacoesTipo = caminhosRelacionados(tipo);
    return relacoesArtefato.has(tipo.sourcePath) || relacoesTipo.has(artefato.sourcePath);
  });
}

function montarCabecalhoBloco(titulo, contagem) {
  const cabecalho = document.createElement("div");
  cabecalho.className = "indice-bloco-cabecalho";

  const h3 = document.createElement("h3");
  h3.textContent = titulo;
  cabecalho.appendChild(h3);

  const total = document.createElement("span");
  total.className = "indice-contagem";
  total.textContent = contagem;
  cabecalho.appendChild(total);
  return cabecalho;
}

function montarIndice() {
  if (indiceMontado || !artigosIndice.length) return;
  const explorar = document.getElementById("explorar-campos");
  if (!explorar) return;

  const secao = document.createElement("section");
  secao.className = "indice-acervo";
  secao.id = "indice-acervo";
  secao.setAttribute("aria-labelledby", "indice-acervo-titulo");

  const titulo = document.createElement("h2");
  titulo.className = "section-title";
  titulo.id = "indice-acervo-titulo";
  titulo.textContent = "índice...";
  secao.appendChild(titulo);

  const tipos = tiposDeDesign();
  const todosArtefatos = artefatos();

  const blocoTipos = document.createElement("div");
  blocoTipos.className = "indice-bloco";
  blocoTipos.appendChild(montarCabecalhoBloco("tipos de design", `${tipos.length} campos`));

  const gradeTipos = document.createElement("div");
  gradeTipos.className = "indice-tipos";
  tipos.forEach(tipo => {
    const link = document.createElement("a");
    link.className = "indice-tipo-card";
    link.href = rotaDaEntrada(tipo);

    const nome = document.createElement("strong");
    nome.textContent = tituloDaEntrada(tipo);
    link.appendChild(nome);

    const total = document.createElement("span");
    const qtd = artefatosRelacionadosAoTipo(tipo).length;
    total.textContent = `${qtd} ${qtd === 1 ? "artefato" : "artefatos"}`;
    link.appendChild(total);
    gradeTipos.appendChild(link);
  });
  blocoTipos.appendChild(gradeTipos);
  secao.appendChild(blocoTipos);

  const blocoArtefatos = document.createElement("div");
  blocoArtefatos.className = "indice-bloco";
  blocoArtefatos.appendChild(montarCabecalhoBloco("artefatos por tipo de design", `${todosArtefatos.length} artefatos`));

  const classificados = new Set();
  tipos.forEach(tipo => {
    const relacionados = artefatosRelacionadosAoTipo(tipo);
    if (!relacionados.length) return;
    relacionados.forEach(item => classificados.add(item.sourcePath));

    const grupo = document.createElement("section");
    grupo.className = "indice-grupo";

    const h3 = document.createElement("h3");
    h3.className = "indice-grupo-titulo";
    h3.appendChild(criarLink(tipo));
    grupo.appendChild(h3);

    const lista = document.createElement("div");
    lista.className = "indice-artefatos-lista";
    relacionados.forEach(artefato => lista.appendChild(criarLink(artefato, "indice-artefato-link")));
    grupo.appendChild(lista);
    blocoArtefatos.appendChild(grupo);
  });

  const semTipo = todosArtefatos.filter(item => !classificados.has(item.sourcePath));
  if (semTipo.length) {
    const grupo = document.createElement("section");
    grupo.className = "indice-grupo";

    const h3 = document.createElement("h3");
    h3.className = "indice-grupo-titulo";
    h3.textContent = "a classificar";
    grupo.appendChild(h3);

    const lista = document.createElement("div");
    lista.className = "indice-artefatos-lista";
    semTipo.forEach(artefato => lista.appendChild(criarLink(artefato, "indice-artefato-link")));
    grupo.appendChild(lista);
    blocoArtefatos.appendChild(grupo);
  }

  secao.appendChild(blocoArtefatos);
  explorar.parentNode.insertBefore(secao, explorar);
  indiceMontado = true;

  const navIndice = document.getElementById("nav-link-indice");
  if (navIndice) {
    navIndice.setAttribute("href", "#indice-acervo");
    navIndice.addEventListener("click", () => {
      window.setTimeout(() => document.getElementById("indice-acervo")?.scrollIntoView({ behavior: "smooth", block: "start" }), 30);
    });
  }
  sincronizarVisibilidadeIndice();
}

function sincronizarVisibilidadeIndice() {
  const secao = document.getElementById("indice-acervo");
  const resultados = document.getElementById("resultados");
  if (!secao || !resultados) return;
  const foraDaHome = document.body.classList.contains("viewing") || !resultados.classList.contains("escondido");
  secao.classList.toggle("escondido", foraDaHome);
}

function normalizarListasDoArtigo() {
  const corpo = document.getElementById("artigo-corpo");
  if (!corpo) return;

  corpo.querySelectorAll("li").forEach(li => {
    const temSublista = Array.from(li.children).some(filho => filho.tagName === "UL" || filho.tagName === "OL");
    const primeiro = li.firstElementChild;
    const strongDireto = primeiro?.tagName === "STRONG";
    const strongEmParagrafo = primeiro?.tagName === "P" && primeiro.children.length === 1 && primeiro.firstElementChild?.tagName === "STRONG";
    li.classList.toggle("lista-grupo", Boolean(temSublista && (strongDireto || strongEmParagrafo)));
  });
}

function entradaAtual() {
  const hash = window.location.hash;
  if (!hash.startsWith("#/estudo/")) return null;
  const partes = hash.replace("#/estudo/", "").split("/");
  const categoria = decodeURIComponent(partes[0] || "");
  const titulo = decodeURIComponent(partes.slice(1).join("/") || "");
  return artigosIndice.find(item => item.category === categoria && tituloDaEntrada(item) === titulo) || null;
}

function removerRelacoesAnteriores() {
  document.querySelectorAll(".relacoes-design").forEach(item => item.remove());
}

function renderizarRelacoesDoArtigo() {
  const corpo = document.getElementById("artigo-corpo");
  const nav = document.getElementById("artigo-nav-rodape");
  if (!corpo || !nav || corpo.querySelector(".mensagem-busca")) return;

  const atual = entradaAtual();
  const assinatura = `${window.location.hash}|${corpo.textContent.length}`;
  if (assinatura === ultimaRotaRelacionada) return;
  ultimaRotaRelacionada = assinatura;

  removerRelacoesAnteriores();
  normalizarListasDoArtigo();
  if (!atual) return;

  let relacionados = [];
  let titulo = "";
  if (atual.category === "00 tipos de design") {
    relacionados = artefatosRelacionadosAoTipo(atual);
    titulo = "artefatos relacionados";
  } else if (atual.category === "03 artefatos") {
    relacionados = tiposRelacionadosAoArtefato(atual);
    titulo = "tipos de design";
  }
  if (!relacionados.length) return;

  const secao = document.createElement("section");
  secao.className = "relacoes-design";

  const cabecalho = document.createElement("div");
  cabecalho.className = "relacoes-design-cabecalho";
  const h3 = document.createElement("h3");
  h3.textContent = titulo;
  cabecalho.appendChild(h3);
  const total = document.createElement("span");
  total.textContent = `${relacionados.length} ${relacionados.length === 1 ? "relação" : "relações"}`;
  cabecalho.appendChild(total);
  secao.appendChild(cabecalho);

  const lista = document.createElement("div");
  lista.className = "relacoes-design-lista";
  relacionados.forEach(item => lista.appendChild(criarLink(item)));
  secao.appendChild(lista);
  nav.parentNode.insertBefore(secao, nav);
}

async function carregarIndiceEditorial() {
  try {
    const resposta = await fetch(INDEX_URL, { cache: "no-cache" });
    if (!resposta.ok) return;
    indiceArqueologia = await resposta.json();
    artigosIndice = (indiceArqueologia.articles || []).filter(item => item?.category && item?.sourcePath);
    montarIndice();
    renderizarRelacoesDoArtigo();
  } catch (erro) {
    console.warn("Camada editorial relacional indisponível.", erro);
  }
}

const observer = new MutationObserver(() => {
  sincronizarVisibilidadeIndice();
  window.clearTimeout(observer._timer);
  observer._timer = window.setTimeout(() => {
    normalizarListasDoArtigo();
    renderizarRelacoesDoArtigo();
  }, 30);
});

observer.observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ["class"] });
window.addEventListener("hashchange", () => {
  ultimaRotaRelacionada = "";
  window.setTimeout(renderizarRelacoesDoArtigo, 50);
});
window.addEventListener("popstate", () => {
  ultimaRotaRelacionada = "";
  window.setTimeout(renderizarRelacoesDoArtigo, 50);
});

document.addEventListener("DOMContentLoaded", carregarIndiceEditorial);
