const REPO = "leorruas/arqueologia";
const BRANCH = "main";

const categoriasPublicas = {
  "00 tipos de design": {
    numero: "00",
    titulo: "tipos de design",
    resumo: "mapa disciplinar para localizar os estudos",
    grupo: "orientacao"
  },
  "00 índices": {
    numero: "00",
    titulo: "índices",
    resumo: "mapas de artefatos, autores, conceitos, empresas, variáveis e leituras",
    grupo: "orientacao"
  },
  "01 conceitos": {
    numero: "01",
    titulo: "conceitos",
    resumo: "ideias que ajudam a explicar por que certas decisões de design funcionam",
    grupo: "principal"
  },
  "02 variaveis": {
    numero: "02",
    titulo: "variáveis",
    resumo: "eixos que o design aumenta, reduz ou redistribui no comportamento",
    grupo: "principal"
  },
  "03 artefatos": {
    numero: "03",
    titulo: "artefatos",
    resumo: "objetos, interfaces, serviços, métodos, sinais e gestos investigados",
    grupo: "principal"
  },
  "04 genealogias": {
    numero: "04",
    titulo: "ideias",
    resumo: "famílias de ideias que atravessam disciplinas, mídias e épocas",
    grupo: "lente"
  },
  "05 percursos": {
    numero: "05",
    titulo: "percursos",
    resumo: "sequências editoriais para ler vários estudos como uma história contínua",
    grupo: "lente"
  },
  "autores": {
    numero: "A",
    titulo: "autores",
    resumo: "pessoas ligadas à invenção, refinamento, popularização, padronização ou crítica",
    grupo: "principal"
  },
  "empresas": {
    numero: "E",
    titulo: "empresas",
    resumo: "organizações usadas como contexto para localizar ideias e artefatos",
    grupo: "principal"
  }
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
    .replace(/^\d+\s+/, "")
    .replace(/\.md$/i, "");
}

function nomeCategoria(categoria) {
  return categoriasPublicas[categoria]?.titulo || nomeLimpo(categoria);
}

function slug(texto) {
  return normalizar(texto)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function rawUrl(path) {
  const codificado = path.split("/").map(encodeURIComponent).join("/");
  return codificado;
}

function rotaCampo(categoria) {
  return `#/campo/${encodeURIComponent(categoria)}`;
}

function rotaArtigo(artigo, secao = "") {
  const base = `#/estudo/${encodeURIComponent(artigo.categoria)}/${encodeURIComponent(artigo.titulo)}`;
  return secao ? `${base}?secao=${encodeURIComponent(secao)}` : base;
}

function secaoDoWiki(alvo) {
  const partes = String(alvo || "").split("#");
  return partes.length > 1 ? slug(partes.slice(1).join("#").trim()) : "";
}

function rolarParaSecao(secao, comportamento = "smooth") {
  if (!secao) return false;
  const heading = document.getElementById(secao);
  if (!heading || !corpoArtigo.contains(heading)) return false;
  corpoArtigo.querySelectorAll(".secao-ativa").forEach(item => item.classList.remove("secao-ativa"));
  heading.classList.add("secao-ativa");
  heading.scrollIntoView({ behavior: comportamento, block: "start" });
  return true;
}

async function copiarLinkDaSecao(artigo, secao) {
  const href = rotaArtigo(artigo, secao);
  const url = `${window.location.origin}${window.location.pathname}${window.location.search}${href}`;
  try {
    await navigator.clipboard.writeText(url);
    return true;
  } catch (_) {
    const campo = document.createElement("textarea");
    campo.value = url;
    campo.setAttribute("readonly", "");
    campo.style.position = "fixed";
    campo.style.opacity = "0";
    document.body.appendChild(campo);
    campo.select();
    const copiado = document.execCommand("copy");
    campo.remove();
    return copiado;
  }
}

function aplicarTema(tema, persistir = true) {
  document.documentElement.dataset.theme = tema;
  if (persistir) { try { localStorage.setItem("tema-arqueologia", tema); } catch (_) {} }
  themeToggle.textContent = tema === "dark" ? "modo claro" : "modo escuro";
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", tema === "dark" ? "#050505" : "#f8fafc");
}

function iniciarTema() {
  let salvo = null;
  try { salvo = localStorage.getItem("tema-arqueologia"); } catch (_) {}
  const sistema = window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  aplicarTema(salvo || sistema, false);
}

function mostrarHome(atualizarRota = true) {
  const carga = window.ARQUEOLOGIA_LOADER.iniciar("Abrindo início");
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
  atualizarNav();
  window.ARQUEOLOGIA_LOADER.finalizar(carga);
}

function esconderHome() {
  document.body.classList.add("viewing");
  el("orientacoes-iniciais").classList.add("escondido");
  el("explorar-campos").classList.add("escondido");
  el("site-footer").classList.add("escondido");
  resultados.classList.add("escondido");
  atualizarNav();
}

function montarArtigosDoIndice(indice) {
  return (indice?.articles || [])
    .filter(item => categoriasPublicas[item.category] && item.publicar !== false)
    .map(item => ({
      categoria: item.category,
      titulo: nomeLimpo(item.title || item.fileTitle),
      sourcePath: item.sourcePath,
      conteudo: null,
      textoBusca: item.plainText || "",
      headings: item.headings || [],
      related: item.related || [],
      backlinks: item.backlinks || [],
      unresolved: item.unresolved || [],
      type: item.type || "",
      status: item.status || "",
      origem: item.origem || "",
      grau: item.grau || "",
      eixo: item.eixo || ""
    }));
}

async function carregarCatalogo() {
  iniciarTema();
  let carregadoDoIndice = false;

  try {
    const respostaIndice = await fetch("search-index.json", { cache: "no-cache" });
    if (respostaIndice.ok) {
      const indice = await respostaIndice.json();
      const doIndice = montarArtigosDoIndice(indice);
      if (doIndice.length) {
        artigos = doIndice;
        carregadoDoIndice = true;
      }
    }
  } catch (erro) {
    console.warn("Índice pré-gerado indisponível; usando catálogo do GitHub.", erro);
  }

  if (!carregadoDoIndice) {
    // The tree API cannot enforce the publication flag. Fail closed until the index is available.
    el("pastas-container").innerHTML = '<p class="mensagem-busca">O catálogo público está temporariamente indisponível. Tente novamente em instantes.</p>';
    window.ARQUEOLOGIA_LOADER.pronto("catalogo");
    return;
  }

  artigos.sort((a, b) => a.sourcePath.localeCompare(b.sourcePath, "pt-BR", { numeric: true, sensitivity: "base" }));

  porCategoria = {};
  artigos.forEach(artigo => {
    if (!porCategoria[artigo.categoria]) porCategoria[artigo.categoria] = [];
    porCategoria[artigo.categoria].push(artigo);
  });

  renderizarCategorias();
  await tratarRota();
  window.ARQUEOLOGIA_LOADER.pronto("catalogo");
}

function renderizarCategorias() {
  orientacoes.innerHTML = "";
  pastas.innerHTML = "";

  Object.entries(categoriasPublicas).forEach(([categoria, info]) => {
    if (info.grupo === "lente") return;

    const quantidade = (porCategoria[categoria] || []).length;
    const card = document.createElement("a");
    card.className = "disciplina-card";
    card.href = rotaCampo(categoria);
    card.innerHTML = `
      <span class="indice-numero">${info.numero}</span>
      <span class="disciplina-card-conteudo">
        <strong>${info.titulo}</strong>
        <span class="indice-resumo">${info.resumo} • ${quantidade} ${quantidade === 1 ? "entrada" : "entradas"}</span>
      </span>`;
    card.addEventListener("click", event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1) return;
      event.preventDefault();
      abrirCampo(categoria);
    });

    if (info.grupo === "orientacao") orientacoes.appendChild(card);
    if (info.grupo === "principal") pastas.appendChild(card);
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
    campo.textContent = nomeCategoria(categoria);
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
    atual.textContent = nomeCategoria(categoria);
    container.appendChild(atual);
  }
}

function abrirCampo(categoria, atualizarRota = true) {
  if (!categoriasPublicas[categoria]) return mostrarHome(false);

  const carga = window.ARQUEOLOGIA_LOADER.iniciar("Abrindo índice");
  esconderHome();
  leitorArtigo.classList.add("escondido");
  leitorCampo.classList.remove("escondido");
  artigoAtual = null;

  if (atualizarRota && window.location.hash !== rotaCampo(categoria)) history.pushState({ categoria }, "", rotaCampo(categoria));

  const lista = porCategoria[categoria] || [];
  criarBreadcrumb(el("disciplina-breadcrumbs"), categoria);
  el("disciplina-cabecalho").innerHTML = `
    <p class="disciplina-rotulo">campo • ${lista.length} ${lista.length === 1 ? "entrada" : "entradas"}</p>
    <h2>${nomeCategoria(categoria)}</h2>`;

  const acoes = el("disciplina-acoes");
  acoes.innerHTML = "";

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

  document.title = `${nomeCategoria(categoria)} • arqueologia do design`;
  window.scrollTo({ top: 0, behavior: "instant" });
  window.ARQUEOLOGIA_LOADER.finalizar(carga);
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

function encontrarArtigoPorWiki(alvo) {
  const referencia = String(alvo || "").split("#")[0].replace(/\.md$/i, "").trim();
  if (!referencia) return null;

  if (referencia.includes("/")) {
    const caminhoNormal = normalizar(referencia.replace(/^\.\//, ""));
    const porCaminho = artigos.find(item => normalizar(item.sourcePath.replace(/\.md$/i, "")) === caminhoNormal);
    if (porCaminho) return porCaminho;
  }

  const normal = normalizar(referencia.split("/").pop());
  return artigos.find(item => normalizar(item.titulo) === normal) || null;
}

function prepararMarkdown(markdown) {
  return limparFrontmatter(markdown)
    .replace(/!\[\[([^\]]+)\]\]/g, (_match, alvo) => `\`anexo: ${alvo}\``)
    .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (_match, alvo, rotulo) => {
      const artigo = encontrarArtigoPorWiki(alvo);
      const secao = secaoDoWiki(alvo);
      return artigo ? `[${rotulo}](${rotaArtigo(artigo, secao)})` : rotulo;
    })
    .replace(/\[\[([^\]]+)\]\]/g, (_match, alvo) => {
      const artigo = encontrarArtigoPorWiki(alvo);
      const rotulo = String(alvo).split("#")[0].split("/").pop();
      const secao = secaoDoWiki(alvo);
      return artigo ? `[${rotulo}](${rotaArtigo(artigo, secao)})` : rotulo;
    });
}

function montarToc(secaoInicial = "") {
  const toc = el("toc-nav");
  toc.innerHTML = "";
  const titulos = corpoArtigo.querySelectorAll("h2, h3");
  const usados = new Set();

  titulos.forEach((heading, indice) => {
    const rotulo = heading.textContent.trim();
    let id = slug(rotulo) || `secao-${indice + 1}`;
    let unico = id;
    let n = 2;
    while (usados.has(unico)) unico = `${id}-${n++}`;
    usados.add(unico);
    heading.id = unico;

    const ancora = document.createElement("a");
    ancora.href = artigoAtual ? rotaArtigo(artigoAtual, unico) : `#${unico}`;
    ancora.className = "heading-anchor";
    ancora.textContent = "#";
    ancora.title = "copiar link desta seção";
    ancora.setAttribute("aria-label", `Copiar link para a seção ${rotulo}`);
    ancora.addEventListener("click", async event => {
      if (!artigoAtual) return;
      event.preventDefault();
      event.stopPropagation();
      const href = rotaArtigo(artigoAtual, unico);
      history.pushState({ artigo: artigoAtual.sourcePath, secao: unico }, "", href);
      rolarParaSecao(unico);
      const copiado = await copiarLinkDaSecao(artigoAtual, unico);
      if (copiado) {
        ancora.classList.add("copiado");
        ancora.title = "link copiado";
        setTimeout(() => {
          ancora.classList.remove("copiado");
          ancora.title = "copiar link desta seção";
        }, 1400);
      }
    });
    heading.appendChild(ancora);

    const link = document.createElement("a");
    link.href = artigoAtual ? rotaArtigo(artigoAtual, unico) : `#${unico}`;
    link.className = `toc-link ${heading.tagName === "H3" ? "toc-h3" : "toc-h2"}`;
    link.textContent = rotulo;
    link.addEventListener("click", event => {
      if (!artigoAtual) return;
      event.preventDefault();
      const href = rotaArtigo(artigoAtual, unico);
      history.pushState({ artigo: artigoAtual.sourcePath, secao: unico }, "", href);
      rolarParaSecao(unico);
    });
    toc.appendChild(link);
  });

  el("artigo-toc-sidebar").classList.toggle("escondido", titulos.length === 0);
  if (secaoInicial) requestAnimationFrame(() => rolarParaSecao(secaoInicial, "instant"));
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

let cargaArtigoAtual = 0;

async function abrirArtigo(artigo, atualizarRota = true, secao = "") {
  if (!artigo) return;
  const carga = window.ARQUEOLOGIA_LOADER.iniciar("Abrindo artigo");
  cargaArtigoAtual = carga;
  esconderHome();
  leitorCampo.classList.add("escondido");
  leitorArtigo.classList.remove("escondido");
  artigoAtual = artigo;

  const rotaDestino = rotaArtigo(artigo, secao);
  if (atualizarRota && window.location.hash !== rotaDestino) history.pushState({ artigo: artigo.sourcePath, secao }, "", rotaDestino);

  criarBreadcrumb(el("artigo-breadcrumbs"), artigo.categoria, artigo.titulo);
  el("artigo-kicker").textContent = nomeCategoria(artigo.categoria);
  tituloArtigo.textContent = artigo.titulo;
  el("artigo-status")?.remove();
  if (artigo.status === "rascunho") {
    const aviso = document.createElement("p");
    aviso.id = "artigo-status";
    aviso.className = "mensagem-busca";
    aviso.textContent = "Rascunho — este estudo está em revisão.";
    tituloArtigo.insertAdjacentElement("afterend", aviso);
  }
  corpoArtigo.innerHTML = '<p class="mensagem-busca">abrindo a escavação...</p>';
  montarNavegacaoArtigo(artigo);
  document.title = `${artigo.titulo} • arqueologia do design`;
  window.scrollTo({ top: 0, behavior: "instant" });

  try {
    const markdown = await garantirConteudo(artigo);
    if (artigoAtual !== artigo || cargaArtigoAtual !== carga) return;
    corpoArtigo.innerHTML = marked.parse(prepararMarkdown(markdown), { gfm: true, breaks: false });
    montarToc(secao);
  } catch (erro) {
    if (artigoAtual !== artigo || cargaArtigoAtual !== carga) return;
    corpoArtigo.innerHTML = `<p>não foi possível abrir este estudo agora.</p><pre><code>${erro.message}</code></pre>`;
    el("artigo-toc-sidebar").classList.add("escondido");
  } finally {
    window.ARQUEOLOGIA_LOADER.finalizar(carga);
  }
}

async function carregarConteudoParaBusca() {
  if (carregamentoConteudo) return carregamentoConteudo;

  carregamentoConteudo = (async () => {
    const fila = artigos.filter(artigo => !artigo.textoBusca && artigo.conteudo === null).slice();
    const trabalhadores = Array.from({ length: Math.min(8, fila.length || 1) }, async () => {
      while (fila.length) {
        const artigo = fila.shift();
        try {
          await garantirConteudo(artigo);
        } catch (_) {
          artigo.conteudo = "";
        }
      }
    });
    await Promise.all(trabalhadores);
  })();

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
  cardsResultados.innerHTML = '<p class="mensagem-busca">escavando títulos e conteúdo...</p>';
  atualizarNav();

  if (normalizar(consulta).length >= 3 && artigos.some(artigo => !artigo.textoBusca)) await carregarConteudoParaBusca();
  const termos = normalizar(consulta).split(/\s+/).filter(Boolean);

  const encontrados = artigos.filter(artigo => {
    const palheiro = normalizar(`${nomeCategoria(artigo.categoria)} ${artigo.titulo} ${artigo.textoBusca || artigo.conteudo || ""}`);
    return termos.every(item => palheiro.includes(item));
  });

  cardsResultados.innerHTML = "";
  if (!encontrados.length) {
    cardsResultados.innerHTML = '<p class="mensagem-busca">nenhuma entrada encontrada no acervo.</p>';
    return;
  }

  encontrados.forEach(artigo => {
    const link = document.createElement("a");
    link.className = "resultado-card";
    link.href = rotaArtigo(artigo);
    link.innerHTML = `<span class="resultado-categoria">${nomeCategoria(artigo.categoria)}</span><span class="resultado-titulo">${artigo.titulo}</span>`;
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
    const bruto = hash.replace("#/estudo/", "");
    const indiceConsulta = bruto.indexOf("?");
    const caminho = indiceConsulta >= 0 ? bruto.slice(0, indiceConsulta) : bruto;
    const consulta = indiceConsulta >= 0 ? bruto.slice(indiceConsulta + 1) : "";
    const partes = caminho.split("/");
    const categoria = decodeURIComponent(partes[0] || "");
    const titulo = decodeURIComponent(partes.slice(1).join("/") || "");
    const params = new URLSearchParams(consulta);
    const secao = params.get("secao") || "";
    const artigo = artigos.find(item => item.categoria === categoria && item.titulo === titulo);
    if (artigo) {
      if (artigoAtual === artigo && !leitorArtigo.classList.contains("escondido")) {
        if (secao) rolarParaSecao(secao);
        else window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      return abrirArtigo(artigo, false, secao);
    }
    mostrarHome(false);
  }
}

function passouDoTitulo() {
  const masthead = el("page-masthead");
  if (!masthead) return window.scrollY > 80;
  const limite = masthead.offsetTop + masthead.offsetHeight;
  return window.scrollY > limite;
}

function atualizarNav() {
  const navVisivel = document.body.classList.contains("viewing") || !resultados.classList.contains("escondido") || passouDoTitulo();
  el("sticky-nav").classList.toggle("visible", navVisivel);
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

corpoArtigo.addEventListener("click", event => {
  const link = event.target.closest('a[href^="#/estudo/"]');
  if (!link) return;
  event.preventDefault();
  const href = link.getAttribute("href");
  history.pushState({}, "", href);
  tratarRota();
});

window.addEventListener("popstate", tratarRota);
window.addEventListener("hashchange", tratarRota);
window.addEventListener("scroll", atualizarNav, { passive: true });
window.addEventListener("resize", atualizarNav);

carregarCatalogo().catch(erro => {
  console.warn("Falha ao iniciar o acervo.", erro);
  window.ARQUEOLOGIA_LOADER.pronto("catalogo");
});
