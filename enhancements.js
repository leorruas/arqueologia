const INDEX_URL = "search-index.json";

let indiceArqueologia = null;
let artigosIndice = [];
let lentesMontadas = false;
let ultimaRotaRelacionada = "";
let ultimaRotaRefinada = "";

const nomesCategorias = {
  "00 tipos de design": "tipo de design",
  "00 índices": "índice",
  "01 conceitos": "conceito",
  "02 variaveis": "variável",
  "03 artefatos": "artefato",
  "04 genealogias": "ideia",
  "05 percursos": "percurso",
  "autores": "autor",
  "empresas": "contexto"
};

function normalizar(texto) {
  return String(texto || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

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

function entradasDaCategoria(categoria) {
  return artigosIndice
    .filter(item => item.category === categoria)
    .sort((a, b) => tituloDaEntrada(a).localeCompare(tituloDaEntrada(b), "pt-BR", { sensitivity: "base" }));
}

function tiposDeDesign() {
  return entradasDaCategoria("00 tipos de design");
}

function artefatos() {
  return entradasDaCategoria("03 artefatos");
}

function genealogias() {
  return entradasDaCategoria("04 genealogias");
}

function percursos() {
  return entradasDaCategoria("05 percursos");
}

function caminhosRelacionados(item) {
  return new Set([...(item?.related || []), ...(item?.backlinks || [])]);
}

function relacionadosEntre(item, categoria) {
  const caminhos = caminhosRelacionados(item);
  return entradasDaCategoria(categoria).filter(candidato => caminhos.has(candidato.sourcePath));
}

function artefatosRelacionadosAoTipo(tipo) {
  const relacoesTipo = caminhosRelacionados(tipo);
  return artefatos().filter(artefato => {
    const relacoesArtefato = caminhosRelacionados(artefato);
    return relacoesArtefato.has(tipo.sourcePath) || relacoesTipo.has(artefato.sourcePath);
  });
}

function resumoDaEntrada(item, limite = 190) {
  let texto = String(item?.plainText || "").replace(/\s+/g, " ").trim();
  const titulo = tituloDaEntrada(item);
  if (normalizar(texto).startsWith(normalizar(titulo))) texto = texto.slice(titulo.length).trim();
  texto = texto.replace(/^[:.\-\s]+/, "");
  if (!texto) return "abra esta entrada para seguir a investigação";
  if (texto.length <= limite) return texto;
  const corte = texto.slice(0, limite);
  const ultimoEspaco = corte.lastIndexOf(" ");
  return `${corte.slice(0, ultimoEspaco > limite * .7 ? ultimoEspaco : limite).trim()}…`;
}

function criarLink(item, classe = "") {
  const link = document.createElement("a");
  link.className = classe;
  link.href = rotaDaEntrada(item);
  link.textContent = tituloDaEntrada(item);
  return link;
}

function criarCardLente(item, tipo, detalhe = "") {
  const link = document.createElement("a");
  link.className = "lente-card";
  link.href = rotaDaEntrada(item);

  const topo = document.createElement("span");
  topo.className = "lente-card-kicker";
  topo.textContent = detalhe ? `${tipo} • ${detalhe}` : tipo;
  link.appendChild(topo);

  const titulo = document.createElement("strong");
  titulo.textContent = tituloDaEntrada(item);
  link.appendChild(titulo);

  const resumo = document.createElement("span");
  resumo.className = "lente-card-resumo";
  resumo.textContent = resumoDaEntrada(item);
  link.appendChild(resumo);

  return link;
}

function renderizarPainelLente(chave, painel) {
  painel.innerHTML = "";
  let lista = [];

  if (chave === "tipos") {
    lista = tiposDeDesign();
    lista.forEach(item => {
      const quantidade = artefatosRelacionadosAoTipo(item).length;
      painel.appendChild(criarCardLente(item, "campo", `${quantidade} ${quantidade === 1 ? "artefato" : "artefatos"}`));
    });
  }

  if (chave === "ideias") {
    lista = genealogias();
    lista.forEach(item => {
      const quantidade = relacionadosEntre(item, "03 artefatos").length;
      painel.appendChild(criarCardLente(item, "genealogia", `${quantidade} ${quantidade === 1 ? "artefato" : "artefatos"}`));
    });
  }

  if (chave === "percursos") {
    lista = percursos();
    lista.forEach(item => {
      const quantidade = relacionadosEntre(item, "03 artefatos").length;
      painel.appendChild(criarCardLente(item, "leitura guiada", `${quantidade} ${quantidade === 1 ? "parada" : "paradas"}`));
    });
  }

  if (!lista.length) {
    const vazio = document.createElement("p");
    vazio.className = "mensagem-busca";
    vazio.textContent = "esta lente ainda está sendo escavada";
    painel.appendChild(vazio);
  }
}

function montarLentes() {
  if (lentesMontadas || !artigosIndice.length) return;
  const orientacoes = document.getElementById("orientacoes-iniciais");
  if (!orientacoes) return;

  const secao = document.createElement("section");
  secao.className = "mapas-leitura";
  secao.id = "mapas-leitura";
  secao.setAttribute("aria-labelledby", "mapas-leitura-titulo");

  const cabecalho = document.createElement("div");
  cabecalho.className = "mapas-leitura-cabecalho";
  cabecalho.innerHTML = `
    <div>
      <p class="eyebrow">o mesmo acervo, perguntas diferentes</p>
      <h2 id="mapas-leitura-titulo" class="section-title">escolha uma lente...</h2>
    </div>
    <p class="mapas-leitura-intro">entre pelo campo profissional, atravesse ideias que reaparecem em áreas diferentes ou siga uma sequência de leitura já montada.</p>`;
  secao.appendChild(cabecalho);

  const abas = document.createElement("div");
  abas.className = "lentes-tabs";
  abas.setAttribute("role", "tablist");
  abas.setAttribute("aria-label", "Formas de explorar o acervo");

  const painel = document.createElement("div");
  painel.className = "lentes-painel";
  painel.id = "lentes-painel";
  painel.setAttribute("role", "tabpanel");

  const definicoes = [
    ["tipos", "tipos de design"],
    ["ideias", "ideias"],
    ["percursos", "percursos"]
  ];

  function ativar(chave) {
    abas.querySelectorAll("button").forEach(botao => {
      const ativo = botao.dataset.lente === chave;
      botao.classList.toggle("ativo", ativo);
      botao.setAttribute("aria-selected", String(ativo));
    });
    renderizarPainelLente(chave, painel);
    try { localStorage.setItem("lente-arqueologia", chave); } catch (_) {}
  }

  definicoes.forEach(([chave, rotulo], indice) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.dataset.lente = chave;
    botao.setAttribute("role", "tab");
    botao.setAttribute("aria-controls", painel.id);
    botao.setAttribute("aria-selected", String(indice === 0));
    botao.textContent = rotulo;
    botao.addEventListener("click", () => ativar(chave));
    abas.appendChild(botao);
  });

  secao.appendChild(abas);
  secao.appendChild(painel);
  orientacoes.parentNode.insertBefore(secao, orientacoes.nextSibling);

  let inicial = "tipos";
  try {
    const salva = localStorage.getItem("lente-arqueologia");
    if (definicoes.some(([chave]) => chave === salva)) inicial = salva;
  } catch (_) {}
  ativar(inicial);

  const navIndice = document.getElementById("nav-link-indice");
  if (navIndice) {
    navIndice.textContent = "explorar";
    navIndice.setAttribute("href", "#mapas-leitura");
    navIndice.addEventListener("click", event => {
      if (document.body.classList.contains("viewing")) return;
      event.preventDefault();
      document.getElementById("mapas-leitura")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  lentesMontadas = true;
  sincronizarVisibilidadeEditorial();
}

function sincronizarVisibilidadeEditorial() {
  const secao = document.getElementById("mapas-leitura");
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

function recolherSecao(corpo, heading, rotulo) {
  if (!heading || heading.dataset.recolhida === "true") return;
  const nivel = Number(heading.tagName.slice(1));
  const detalhes = document.createElement("details");
  detalhes.className = "bloco-consulta";

  const summary = document.createElement("summary");
  summary.textContent = rotulo;
  detalhes.appendChild(summary);

  let atual = heading.nextSibling;
  while (atual) {
    const proximo = atual.nextSibling;
    const matchHeading = atual.nodeType === 1 && /^H[1-6]$/.test(atual.tagName);
    const nivelAtual = matchHeading ? Number(atual.tagName.slice(1)) : 99;
    if (matchHeading && nivelAtual <= nivel) break;
    detalhes.appendChild(atual);
    atual = proximo;
  }

  heading.dataset.recolhida = "true";
  corpo.insertBefore(detalhes, heading);
  const anterior = detalhes.previousElementSibling;
  if (anterior?.tagName === "HR") anterior.remove();
  heading.remove();
}

function recolherBlocosDeConsulta() {
  const corpo = document.getElementById("artigo-corpo");
  if (!corpo || corpo.querySelector(".mensagem-busca")) return;

  Array.from(corpo.querySelectorAll("h2, h3")).forEach(heading => {
    const nome = normalizar(heading.textContent);
    if (nome === "ficha tecnica") recolherSecao(corpo, heading, "ficha técnica");
    if (nome === "ficha resumo" || nome === "ficha resumo do conceito" || nome === "ficha resumo da variavel") {
      recolherSecao(corpo, heading, "ficha arqueológica");
    }
  });
}

function renderizarMetadados() {
  document.querySelectorAll(".metadados-editoriais").forEach(item => item.remove());
  const atual = entradaAtual();
  const titulo = document.getElementById("artigo-titulo");
  if (!atual || !titulo) return;

  const campos = [
    ["status", atual.status],
    ["origem", atual.origem],
    ["grau", atual.grau],
    ["eixo", atual.eixo]
  ].filter(([, valor]) => valor);

  if (!campos.length) return;

  const barra = document.createElement("div");
  barra.className = "metadados-editoriais";
  campos.forEach(([nome, valor]) => {
    const item = document.createElement("span");
    item.innerHTML = `<small>${nome}</small>${valor}`;
    barra.appendChild(item);
  });
  titulo.insertAdjacentElement("afterend", barra);
}

function removerRelacoesAnteriores() {
  document.querySelectorAll(".relacoes-design").forEach(item => item.remove());
}

function grupoDeRelacoes(titulo, itens) {
  if (!itens.length) return null;
  const grupo = document.createElement("div");
  grupo.className = "relacoes-grupo";

  const h4 = document.createElement("h4");
  h4.textContent = titulo;
  grupo.appendChild(h4);

  const lista = document.createElement("div");
  lista.className = "relacoes-design-lista";
  itens.forEach(item => {
    const link = criarLink(item);
    link.dataset.tipo = nomesCategorias[item.category] || item.category;
    lista.appendChild(link);
  });
  grupo.appendChild(lista);
  return grupo;
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
  if (!atual) return;

  const caminhos = caminhosRelacionados(atual);
  const todos = artigosIndice
    .filter(item => item.sourcePath !== atual.sourcePath && caminhos.has(item.sourcePath))
    .sort((a, b) => tituloDaEntrada(a).localeCompare(tituloDaEntrada(b), "pt-BR", { sensitivity: "base" }));

  const porCategoria = categoria => todos.filter(item => item.category === categoria);
  const grupos = [];

  if (atual.category === "00 tipos de design") {
    grupos.push(["artefatos deste campo", artefatosRelacionadosAoTipo(atual)]);
  } else if (atual.category === "03 artefatos") {
    grupos.push(["tipos de design", porCategoria("00 tipos de design")]);
    grupos.push(["ideias que atravessam este artefato", porCategoria("04 genealogias")]);
    grupos.push(["percursos em que ele aparece", porCategoria("05 percursos")]);
    grupos.push(["conceitos e variáveis", [...porCategoria("01 conceitos"), ...porCategoria("02 variaveis")].slice(0, 8)]);
  } else if (atual.category === "04 genealogias") {
    grupos.push(["artefatos desta constelação", porCategoria("03 artefatos")]);
    grupos.push(["conceitos e variáveis", [...porCategoria("01 conceitos"), ...porCategoria("02 variaveis")]]);
    grupos.push(["percursos relacionados", porCategoria("05 percursos")]);
  } else if (atual.category === "05 percursos") {
    grupos.push(["paradas deste percurso", porCategoria("03 artefatos")]);
    grupos.push(["ideias relacionadas", porCategoria("04 genealogias")]);
  } else {
    grupos.push(["continue por aqui", todos.slice(0, 10)]);
  }

  const validos = grupos.filter(([, itens]) => itens.length);
  if (!validos.length) return;

  const secao = document.createElement("section");
  secao.className = "relacoes-design";
  const cabecalho = document.createElement("div");
  cabecalho.className = "relacoes-design-cabecalho";
  cabecalho.innerHTML = `<h3>esta história continua em...</h3>`;
  secao.appendChild(cabecalho);

  validos.forEach(([titulo, itens]) => {
    const grupo = grupoDeRelacoes(titulo, itens);
    if (grupo) secao.appendChild(grupo);
  });

  nav.parentNode.insertBefore(secao, nav);
}

function refinarLeitor() {
  const corpo = document.getElementById("artigo-corpo");
  if (!corpo || corpo.querySelector(".mensagem-busca")) return;
  const assinatura = `${window.location.hash}|${corpo.textContent.length}`;
  if (assinatura === ultimaRotaRefinada) return;
  ultimaRotaRefinada = assinatura;

  normalizarListasDoArtigo();
  recolherBlocosDeConsulta();
  renderizarMetadados();
}

async function carregarIndiceEditorial() {
  try {
    const resposta = await fetch(INDEX_URL, { cache: "no-cache" });
    if (!resposta.ok) return;
    indiceArqueologia = await resposta.json();
    artigosIndice = (indiceArqueologia.articles || []).filter(item => item?.category && item?.sourcePath);
    montarLentes();
    refinarLeitor();
    renderizarRelacoesDoArtigo();
  } catch (erro) {
    console.warn("Camada editorial relacional indisponível.", erro);
  }
}

const observer = new MutationObserver(() => {
  sincronizarVisibilidadeEditorial();
  window.clearTimeout(observer._timer);
  observer._timer = window.setTimeout(() => {
    refinarLeitor();
    renderizarRelacoesDoArtigo();
  }, 40);
});

observer.observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ["class"] });

function resetarRotaEditorial() {
  ultimaRotaRelacionada = "";
  ultimaRotaRefinada = "";
  window.setTimeout(() => {
    refinarLeitor();
    renderizarRelacoesDoArtigo();
  }, 60);
}

window.addEventListener("hashchange", resetarRotaEditorial);
window.addEventListener("popstate", resetarRotaEditorial);
document.addEventListener("DOMContentLoaded", carregarIndiceEditorial);
