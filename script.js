const REPO = "leorruas/arqueologia";
const BRANCH = "main";

const categoriasBase = {
  "00. Sobre": { numero: "00", resumo: "a hipótese do projeto, modos de investigação e método de escavação" },
  "01. Interfaces": { numero: "01", resumo: "botões, cursores, gestos, padrões de interação e artefatos digitais" },
  "02. Design Grafico": { numero: "02", resumo: "cartazes, grids, símbolos, diagramação e sistemas visuais" },
  "03. Design de Servicos": { numero: "03", resumo: "filas, formulários, jornadas, scripts, regras e artefatos de coordenação" },
  "04. Design de Produto": { numero: "04", resumo: "objetos físicos, hábitos, ergonomia, materiais e rituais cotidianos" },
  "05. Tipografia": { numero: "05", resumo: "letras, espaços, sinais e decisões que organizam a leitura" },
  "06. Inteligencia Artificial": { numero: "06", resumo: "interfaces de linguagem, perguntas, memória, agência e novos pactos de uso" }
};

let artigos = [];
let porCategoria = {};
let artigoAtual = null;
let carregamentoConteudo = null;

const el = id => document.getElementById(id);
const mainSearch = el("main-search-input");
const navSearch = el("nav-search-input");
const orientacoes = el("orientacoes-container");
const pastas = el("pastas-container");
const resultados = el("resultados");
const resultadosTitulo = el("resultados-titulo");
const cardsResultados = el("cards-container");
const leitorCampo = el("disciplina-leitor");
const leitorArtigo = el("leitor-artigo");
const corpoArtigo = el("artigo-corpo");
const tituloArtigo = el("artigo-titulo");
const themeToggle = el("theme-toggle");

function normalizar(texto) {
  return String(texto || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function nomeLimpo(texto) {
  return String(texto || "")
    .replace(/^\d+\.\s*/, "")
    .replace(/\.md$/i, "");
}

function slug(texto) {
  return normalizar(texto)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function rawUrl(path) {
  const codificado = path.split("/").map(encodeURIComponent).join("/");
  return `https://raw.githubusercontent.com/${REPO}/${BRANCH}/${codificado}`;
}

function rotaCampo(categoria) {
  return `#/campo/${encodeURIComponent(categoria)}`;
}

function rotaArtigo(artigo) {
  return `#/estudo/${encodeURIComponent(artigo.categoria)}/${encodeURIComponent(artigo.titulo)}`;
}

function aplicarTema(tema, persistir = true) {
  document.documentElement.dataset.theme = tema;
  if (persistir) localStorage.setItem("tema-arqueologia", tema);
  themeToggle.textContent = tema === "dark" ? "modo claro" : "modo escuro";
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", tema === "dark" ? "#060606" : "#f7f4ee");
}

function iniciarTema() {
  const salvo = localStorage.getItem("tema-arqueologia");
  const sistema = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  aplicarTema(salvo || sistema, false);
}

function mostrarHome(atualizarRota = true) {
  document.body.classList.remove("viewing");
  leitorCampo.classList.add("escondido");
  leitorArtigo.classList.add("escondido");
  resultados.classList.add("escondido");
  el("orientacoes-iniciais").classList.remove("escondido");
  el("explorar-campos").classList.remove("escondido");
  el("site-footer").classList.remove("escondido");
  artigoAtual = null;
  mainSearch.value = "";
  navSearch.value = "";
  document.title = "arqueologia • do design";
  if (atualizarRota && window.location.hash) history.pushState({}, "", window.location.pathname + window.location.search);
  window.scrollTo({ top: 0, behavior: "instant" });
}

function esconderHome() {
  document.body.classList.add("viewing");
  el("orientacoes-iniciais").classList.add("escondido");
  el("explorar-campos").classList.add("escondido");
  el("site-footer").classList.add("escondido");
  resultados.classList.add("escondido");
}

async function carregarCatalogo() {
  iniciarTema();
  let arquivos = [];

  try {
    const resposta = await fetch(`https://api.github.com/repos/${REPO}/git/trees/${BRANCH}?recursive=1`, { cache: "no-cache" });
    if (!resposta.ok) throw new Error(`GitHub respondeu ${resposta.status}`);
    const dados = await resposta.json();
    arquivos = (dados.tree || [])
      .filter(item => item.type === "blob" && /\.md$/i.test(item.path))
      .filter(item => item.path.includes("/"))
      .filter(item => !item.path.startsWith(".github/"));
  } catch (erro) {
    console.warn("Não foi possível carregar a árvore do acervo.", erro);
  }

  artigos = arquivos.map(item => {
    const partes = item.path.split("/");
    const categoria = partes[0];
    const arquivo = partes[partes.length - 1];
    return {
      categoria,
      titulo: nomeLimpo(arquivo),
      sourcePath: item.path,
      conteudo: null
    };
  }).sort((a, b) => a.sourcePath.localeCompare(b.sourcePath, "pt-BR", { numeric: true, sensitivity: "base" }));

  porCategoria = {};
  artigos.forEach(artigo => {
    if (!porCategoria[artigo.categoria]) porCategoria[artigo.categoria] = [];
    porCategoria[artigo.categoria].push(artigo);
  });

  renderizarCategorias();
  tratarRota();
}

function metadadosCategoria(categoria, indice) {
  if (categoriasBase[categoria]) return categoriasBase[categoria];
  return {
    numero: String(indice + 1).padStart(2, "0"),
    resumo: `${(porCategoria[categoria] || []).length} estudos disponíveis neste campo`
  };
}

function renderizarCategorias() {
  orientacoes.innerHTML = "";
  pastas.innerHTML = "";

  const categorias = Array.from(new Set([...Object.keys(categoriasBase), ...Object.keys(porCategoria)]))
    .sort((a, b) => a.localeCompare(b, "pt-BR", { numeric: true, sensitivity: "base" }));

  categorias.forEach((categoria, indice) => {
    const info = metadadosCategoria(categoria, indice);
    const quantidade = (porCategoria[categoria] || []).length;
    const card = document.createElement("a");
    card.className = "disciplina-card";
    card.href = rotaCampo(categoria);
    card.innerHTML = `
      <span class="indice-numero">${info.numero}</span>
      <span class="disciplina-card-conteudo">
        <strong>${nomeLimpo(categoria)}</strong>
        <span class="indice-resumo">${info.resumo}${quantidade ? ` • ${quantidade} ${quantidade === 1 ? "estudo" : "estudos"}` : " • em escavação"}</span>
      </span>`;
    card.addEventListener("click", event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) return;
      event.preventDefault();
      abrirCampo(categoria);
    });

    if (categoria === "00. Sobre") orientacoes.appendChild(card);
    else pastas.appendChild(card);
  });
}

function criarBreadcrumb(container, categoria, titulo) {
  container.innerHTML = "";
  const inicio = document.createElement("button");
  inicio.type = "button";
  inicio.className = "breadcrumb-link";
  inicio.textContent = "início";
  inicio.addEventListener("click", () => mostrarHome(true));
  container.appendChild(inicio);

  const sep1 = document.createElement("span");
  sep1.className = "breadcrumb-separator";
  sep1.textContent = "/";
  container.appendChild(sep1);

  if (titulo) {
    const campo = document.createElement("button");
    campo.type = "button";
    campo.className = "breadcrumb-link";
    campo.textContent = nomeLimpo(categoria);
    campo.addEventListener("click", () => abrirCampo(categoria));
    container.appendChild(campo);
    const sep2 = document.createElement("span");
    sep2.className = "breadcrumb-separator";
    sep2.textContent = "/";
    container.appendChild(sep2);
    const atual = document.createElement("span");
    atual.textContent = nomeLimpo(titulo);
    container.appendChild(atual);
  } else {
    const atual = document.createElement("span");
    atual.textContent = nomeLimpo(categoria);
    container.appendChild(atual);
  }
}

function abrirCampo(categoria, atualizarRota = true) {
  esconderHome();
  leitorArtigo.classList.add("escondido");
  leitorCampo.classList.remove("escondido");
  artigoAtual = null;

  if (atualizarRota && window.location.hash !== rotaCampo(categoria)) history.pushState({ categoria }, "", rotaCampo(categoria));

  const lista = porCategoria[categoria] || [];
  criarBreadcrumb(el("disciplina-breadcrumbs"), categoria);
  el("disciplina-cabecalho").innerHTML = `
    <p class="disciplina-rotulo">campo • ${lista.length ? `${lista.length} ${lista.length === 1 ? "estudo" : "estudos"}` : "em escavação"}</p>
    <h2>${nomeLimpo(categoria)}</h2>`;

  const acoes = el("disciplina-acoes");
  acoes.innerHTML = "";

  if (!lista.length) {
    const vazio = document.createElement("div");
    vazio.className = "estado-vazio";
    vazio.innerHTML = "este campo já faz parte do mapa, mas ainda não tem estudos publicados no repositório.";
    acoes.appendChild(vazio);
  } else {
    lista.forEach((artigo, indice) => {
      const link = document.createElement("a");
      link.className = "disciplina-acao";
      link.href = rotaArtigo(artigo);
      link.innerHTML = `
        <span class="disciplina-acao-numero">${String(indice + 1).padStart(2, "0")}</span>
        <span class="disciplina-acao-conteudo"><strong>${artigo.titulo}</strong></span>`;
      link.addEventListener("click", event => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) return;
        event.preventDefault();
        abrirArtigo(artigo);
      });
      acoes.appendChild(link);
    });
  }

  document.title = `${nomeLimpo(categoria)} • arqueologia do design`;
  window.scrollTo({ top: 0, behavior: "instant" });
}

async function garantirConteudo(artigo) {
  if (artigo.conteudo !== null) return artigo.conteudo;
  const resposta = await fetch(rawUrl(artigo.sourcePath), { cache: "no-cache" });
  if (!resposta.ok) throw new Error(`Não foi possível abrir ${artigo.sourcePath}`);
  artigo.conteudo = await resposta.text();
  return artigo.conteudo;
}

function limparFrontmatter(markdown) {
  return String(markdown || "").replace(/^---\s*\n[\s\S]*?\n---\s*\n/, "");
}

function prepararMarkdown(markdown) {
  return limparFrontmatter(markdown)
    .replace(/!\[\[([^\]]+)\]\]/g, "`anexo: $1`")
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
    .replace(/\[\[([^\]]+)\]\]/g, "$1");
}

function montarToc() {
  const toc = el("toc-nav");
  toc.innerHTML = "";
  const titulos = corpoArtigo.querySelectorAll("h2, h3");
  const usados = new Set();

  titulos.forEach((heading, indice) => {
    let id = slug(heading.textContent) || `secao-${indice + 1}`;
    let unico = id;
    let n = 2;
    while (usados.has(unico)) unico = `${id}-${n++}`;
    usados.add(unico);
    heading.id = unico;

    const link = document.createElement("a");
    link.href = `#${unico}`;
    link.className = `toc-link ${heading.tagName === "H3" ? "toc-h3" : "toc-h2"}`;
    link.textContent = heading.textContent;
    link.addEventListener("click", event => {
      event.preventDefault();
      heading.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    toc.appendChild(link);
  });

  el("artigo-toc-sidebar").classList.toggle("escondido", titulos.length === 0);
}

function montarNavegacaoArtigo(artigo) {
  const lista = porCategoria[artigo.categoria] || [];
  const indice = lista.findIndex(item => item.sourcePath === artigo.sourcePath);
  const anterior = indice > 0 ? lista[indice - 1] : null;
  const proximo = indice >= 0 && indice < lista.length - 1 ? lista[indice + 1] : null;
  const nav = el("artigo-nav-rodape");
  nav.innerHTML = "";

  [[anterior, "anterior"], [proximo, "próximo"]].forEach(([item, rotulo]) => {
    if (!item) {
      const vazio = document.createElement("span");
      vazio.className = "artigo-nav-card vazio";
      vazio.innerHTML = `<span>${rotulo}</span><strong>fim desta direção</strong>`;
      nav.appendChild(vazio);
      return;
    }
    const link = document.createElement("a");
    link.className = "artigo-nav-card";
    link.href = rotaArtigo(item);
    link.innerHTML = `<span>${rotulo}</span><strong>${item.titulo}</strong>`;
    link.addEventListener("click", event => {
      event.preventDefault();
      abrirArtigo(item);
    });
    nav.appendChild(link);
  });
}

async function abrirArtigo(artigo, atualizarRota = true) {
  if (!artigo) return;
  esconderHome();
  leitorCampo.classList.add("escondido");
  leitorArtigo.classList.remove("escondido");
  artigoAtual = artigo;

  if (atualizarRota && window.location.hash !== rotaArtigo(artigo)) history.pushState({ artigo: artigo.sourcePath }, "", rotaArtigo(artigo));

  criarBreadcrumb(el("artigo-breadcrumbs"), artigo.categoria, artigo.titulo);
  el("artigo-kicker").textContent = nomeLimpo(artigo.categoria);
  tituloArtigo.textContent = artigo.titulo;
  corpoArtigo.innerHTML = '<p class="mensagem-busca">abrindo a escavação...</p>';
  montarNavegacaoArtigo(artigo);
  document.title = `${artigo.titulo} • arqueologia do design`;
  window.scrollTo({ top: 0, behavior: "instant" });

  try {
    const markdown = await garantirConteudo(artigo);
    corpoArtigo.innerHTML = marked.parse(prepararMarkdown(markdown), { gfm: true, breaks: false });
    montarToc();
  } catch (erro) {
    corpoArtigo.innerHTML = `<p>não foi possível abrir este estudo agora.</p><pre><code>${erro.message}</code></pre>`;
    el("artigo-toc-sidebar").classList.add("escondido");
  }
}

async function carregarConteudoParaBusca() {
  if (carregamentoConteudo) return carregamentoConteudo;
  carregamentoConteudo = Promise.all(artigos.map(async artigo => {
    try { await garantirConteudo(artigo); } catch (_) { artigo.conteudo = ""; }
  }));
  return carregamentoConteudo;
}

async function pesquisar(termo) {
  const consulta = termo.trim();
  mainSearch.value = termo;
  navSearch.value = termo;

  if (!consulta) {
    mostrarHome(false);
    return;
  }

  document.body.classList.remove("viewing");
  leitorCampo.classList.add("escondido");
  leitorArtigo.classList.add("escondido");
  el("orientacoes-iniciais").classList.add("escondido");
  el("explorar-campos").classList.add("escondido");
  el("site-footer").classList.remove("escondido");
  resultados.classList.remove("escondido");
  resultadosTitulo.textContent = `“${consulta}”`;
  cardsResultados.innerHTML = '<p class="mensagem-busca">escavando o acervo...</p>';

  if (normalizar(consulta).length >= 3) await carregarConteudoParaBusca();
  const termos = normalizar(consulta).split(/\s+/).filter(Boolean);

  const encontrados = artigos.filter(artigo => {
    const palheiro = normalizar(`${artigo.categoria} ${artigo.titulo} ${artigo.conteudo || ""}`);
    return termos.every(item => palheiro.includes(item));
  });

  cardsResultados.innerHTML = "";
  if (!encontrados.length) {
    cardsResultados.innerHTML = '<p class="mensagem-busca">nenhum estudo encontrado. talvez o artefato ainda esteja esperando sua escavação.</p>';
    return;
  }

  encontrados.forEach(artigo => {
    const link = document.createElement("a");
    link.className = "resultado-card";
    link.href = rotaArtigo(artigo);
    link.innerHTML = `<span class="resultado-categoria">${nomeLimpo(artigo.categoria)}</span><span class="resultado-titulo">${artigo.titulo}</span>`;
    link.addEventListener("click", event => {
      event.preventDefault();
      abrirArtigo(artigo);
    });
    cardsResultados.appendChild(link);
  });
}

function tratarRota() {
  const hash = window.location.hash;
  if (!hash || hash === "#" || hash === "#explorar-campos") {
    mostrarHome(false);
    return;
  }

  if (hash.startsWith("#/campo/")) {
    const categoria = decodeURIComponent(hash.replace("#/campo/", ""));
    abrirCampo(categoria, false);
    return;
  }

  if (hash.startsWith("#/estudo/")) {
    const partes = hash.replace("#/estudo/", "").split("/");
    const categoria = decodeURIComponent(partes[0] || "");
    const titulo = decodeURIComponent(partes.slice(1).join("/") || "");
    const artigo = artigos.find(item => item.categoria === categoria && item.titulo === titulo);
    if (artigo) abrirArtigo(artigo, false);
    else mostrarHome(false);
  }
}

let timerBusca;
function aoDigitar(event) {
  clearTimeout(timerBusca);
  const valor = event.target.value;
  timerBusca = setTimeout(() => pesquisar(valor), 180);
}

mainSearch.addEventListener("input", aoDigitar);
navSearch.addEventListener("input", aoDigitar);

themeToggle.addEventListener("click", () => {
  const atual = document.documentElement.dataset.theme === "light" ? "light" : "dark";
  aplicarTema(atual === "dark" ? "light" : "dark", true);
});

el("home-title").addEventListener("click", () => mostrarHome(true));
el("nav-logo").addEventListener("click", () => mostrarHome(true));
el("btn-voltar-disciplina").addEventListener("click", () => mostrarHome(true));
el("btn-voltar").addEventListener("click", () => artigoAtual ? abrirCampo(artigoAtual.categoria) : mostrarHome(true));

el("nav-link-indice").addEventListener("click", event => {
  if (document.body.classList.contains("viewing")) {
    event.preventDefault();
    mostrarHome(true);
    setTimeout(() => el("explorar-campos").scrollIntoView({ behavior: "smooth" }), 0);
  }
});

window.addEventListener("popstate", tratarRota);
window.addEventListener("hashchange", tratarRota);
window.addEventListener("scroll", () => {
  el("sticky-nav").classList.toggle("visible", window.scrollY > 135 || document.body.classList.contains("viewing"));
}, { passive: true });

carregarCatalogo();
