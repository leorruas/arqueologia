(function () {
  "use strict";

  var REPO = "leorruas/arqueologia";
  var BRANCH = "main";

  var categoriasPublicas = {
    "00 tipos de design": { numero: "00", titulo: "tipos de design", resumo: "mapa disciplinar para localizar os estudos", grupo: "orientacao" },
    "00 índices": { numero: "00", titulo: "índices", resumo: "mapas de artefatos, autores, conceitos, empresas, variáveis e leituras", grupo: "orientacao" },
    "01 conceitos": { numero: "01", titulo: "conceitos", resumo: "ideias que ajudam a explicar por que certas decisões de design funcionam", grupo: "principal" },
    "02 variaveis": { numero: "02", titulo: "variáveis", resumo: "eixos que o design aumenta, reduz ou redistribui no comportamento", grupo: "principal" },
    "03 artefatos": { numero: "03", titulo: "artefatos", resumo: "objetos, interfaces, serviços, métodos, sinais e gestos investigados", grupo: "principal" },
    "04 genealogias": { numero: "04", titulo: "ideias", resumo: "famílias de ideias que atravessam disciplinas, mídias e épocas", grupo: "lente" },
    "05 percursos": { numero: "05", titulo: "percursos", resumo: "sequências editoriais para ler vários estudos como uma história contínua", grupo: "lente" },
    "autores": { numero: "A", titulo: "autores", resumo: "pessoas ligadas à invenção, refinamento, popularização, padronização ou crítica", grupo: "principal" },
    "empresas": { numero: "E", titulo: "empresas", resumo: "organizações usadas como contexto para localizar ideias e artefatos", grupo: "principal" }
  };

  var ordemCategorias = [
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

  var artigos = [];
  var porCategoria = {};
  var categoriaAtual = null;
  var artigoAtual = null;
  var carregamentoAtual = 0;

  function el(id) { return document.getElementById(id); }

  var mainSearch = el("main-search-input");
  var navSearch = el("nav-search-input");
  var orientacoes = el("orientacoes-container");
  var pastas = el("pastas-container");
  var resultados = el("resultados");
  var resultadosTitulo = el("resultados-titulo");
  var cardsResultados = el("cards-container");
  var leitorCampo = el("disciplina-leitor");
  var leitorArtigo = el("leitor-artigo");
  var corpoArtigo = el("artigo-corpo");
  var tituloArtigo = el("artigo-titulo");
  var breadcrumbsArtigo = el("artigo-breadcrumbs");
  var themeToggle = el("theme-toggle");

  function mostrar(elemento) {
    if (elemento) elemento.classList.remove("escondido");
  }

  function esconder(elemento) {
    if (elemento) elemento.classList.add("escondido");
  }

  function rolarTopo() {
    window.scrollTo(0, 0);
  }

  function normalizar(texto) {
    var valor = String(texto || "");
    try { valor = valor.normalize("NFD"); } catch (erro) {}
    return valor.replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  function nomeLimpo(texto) {
    return String(texto || "")
      .replace(/^\d+\.\s*/, "")
      .replace(/^\d+\s+/, "")
      .replace(/\.md$/i, "");
  }

  function nomeCategoria(categoria) {
    return categoriasPublicas[categoria] ? categoriasPublicas[categoria].titulo : nomeLimpo(categoria);
  }

  function escaparHtml(valor) {
    return String(valor || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function rawUrl(path) {
    return "https://raw.githubusercontent.com/" + REPO + "/" + BRANCH + "/" + path.split("/").map(encodeURIComponent).join("/");
  }

  function rotaCampo(categoria) {
    return "#/campo/" + encodeURIComponent(categoria);
  }

  function rotaArtigo(artigo) {
    return "#/estudo/" + encodeURIComponent(artigo.categoria) + "/" + encodeURIComponent(artigo.titulo);
  }

  function atualizarUrl(rota) {
    if (window.history && history.pushState) history.pushState({}, "", rota);
    else window.location.hash = rota.replace(/^#/, "");
  }

  function aplicarTema(tema, salvar) {
    document.documentElement.setAttribute("data-theme", tema);
    if (salvar) {
      try { localStorage.setItem("tema-arqueologia", tema); } catch (erro) {}
    }
    if (themeToggle) themeToggle.textContent = tema === "dark" ? "modo claro" : "modo escuro";
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", tema === "dark" ? "#050505" : "#f8fafc");
  }

  function iniciarTema() {
    var salvo = null;
    var claro = false;
    try { salvo = localStorage.getItem("tema-arqueologia"); } catch (erro) {}
    if (window.matchMedia) claro = window.matchMedia("(prefers-color-scheme: light)").matches;
    aplicarTema(salvo || (claro ? "light" : "dark"), false);
  }

  function criarBreadcrumb(container, categoria, titulo) {
    if (!container) return;
    container.innerHTML = "";

    var inicio = document.createElement("button");
    inicio.type = "button";
    inicio.className = "breadcrumb-link";
    inicio.textContent = "início";
    inicio.onclick = function () { mostrarHome(true); };
    container.appendChild(inicio);

    var sep1 = document.createElement("span");
    sep1.className = "breadcrumb-separator";
    sep1.textContent = "/";
    container.appendChild(sep1);

    if (titulo) {
      var campo = document.createElement("button");
      campo.type = "button";
      campo.className = "breadcrumb-link";
      campo.textContent = nomeCategoria(categoria);
      campo.onclick = function () { abrirCampo(categoria, true); };
      container.appendChild(campo);

      var sep2 = document.createElement("span");
      sep2.className = "breadcrumb-separator";
      sep2.textContent = "/";
      container.appendChild(sep2);

      var atual = document.createElement("span");
      atual.textContent = nomeLimpo(titulo);
      container.appendChild(atual);
    } else {
      var atualCampo = document.createElement("span");
      atualCampo.textContent = nomeCategoria(categoria);
      container.appendChild(atualCampo);
    }
  }

  function renderizarCategorias() {
    var i, categoria, info, quantidade, card, conteudo, numero, titulo, resumo;
    orientacoes.innerHTML = "";
    pastas.innerHTML = "";

    for (i = 0; i < ordemCategorias.length; i += 1) {
      categoria = ordemCategorias[i];
      info = categoriasPublicas[categoria];
      if (!info || info.grupo === "lente") continue;

      quantidade = (porCategoria[categoria] || []).length;
      card = document.createElement("a");
      card.className = "disciplina-card";
      card.href = rotaCampo(categoria);
      card.setAttribute("data-categoria", categoria);

      numero = document.createElement("span");
      numero.className = "indice-numero";
      numero.textContent = info.numero;

      conteudo = document.createElement("span");
      conteudo.className = "disciplina-card-conteudo";
      titulo = document.createElement("strong");
      titulo.textContent = info.titulo;
      resumo = document.createElement("span");
      resumo.className = "indice-resumo";
      resumo.textContent = info.resumo + " • " + quantidade + " " + (quantidade === 1 ? "entrada" : "entradas");
      conteudo.appendChild(titulo);
      conteudo.appendChild(resumo);
      card.appendChild(numero);
      card.appendChild(conteudo);

      card.onclick = function (evento) {
        if (evento) evento.preventDefault();
        abrirCampo(this.getAttribute("data-categoria"), true);
        return false;
      };

      if (info.grupo === "orientacao") orientacoes.appendChild(card);
      if (info.grupo === "principal") pastas.appendChild(card);
    }
  }

  function mostrarHome(atualizarRota) {
    carregamentoAtual += 1;
    categoriaAtual = null;
    artigoAtual = null;
    document.body.classList.remove("viewing");
    esconder(resultados);
    esconder(leitorCampo);
    esconder(leitorArtigo);
    mostrar(el("orientacoes-iniciais"));
    mostrar(el("explorar-campos"));
    mostrar(el("site-footer"));
    if (mainSearch) mainSearch.value = "";
    if (navSearch) navSearch.value = "";
    document.title = "arqueologia • do design";
    if (atualizarRota && window.location.hash) {
      if (window.history && history.pushState) history.pushState({}, "", window.location.pathname + window.location.search);
      else window.location.hash = "";
    }
    rolarTopo();
  }

  function esconderHome() {
    document.body.classList.add("viewing");
    esconder(el("orientacoes-iniciais"));
    esconder(el("explorar-campos"));
    esconder(el("site-footer"));
    esconder(resultados);
  }

  function numeroIndice(indice) {
    return indice < 9 ? "0" + (indice + 1) : String(indice + 1);
  }

  function abrirCampo(categoria, atualizarRota) {
    var lista, acoes, i, artigo, link, numero, conteudo, forte;
    if (!categoriasPublicas[categoria]) {
      mostrarHome(false);
      return;
    }

    carregamentoAtual += 1;
    categoriaAtual = categoria;
    artigoAtual = null;
    esconderHome();
    esconder(leitorArtigo);
    mostrar(leitorCampo);

    if (atualizarRota) atualizarUrl(rotaCampo(categoria));

    lista = porCategoria[categoria] || [];
    criarBreadcrumb(el("disciplina-breadcrumbs"), categoria, null);
    el("disciplina-cabecalho").innerHTML = '<p class="disciplina-rotulo">campo • ' + lista.length + " " + (lista.length === 1 ? "entrada" : "entradas") + '</p><h2>' + escaparHtml(nomeCategoria(categoria)) + "</h2>";

    acoes = el("disciplina-acoes");
    acoes.innerHTML = "";

    for (i = 0; i < lista.length; i += 1) {
      artigo = lista[i];
      link = document.createElement("a");
      link.className = "disciplina-acao";
      link.href = rotaArtigo(artigo);
      link.setAttribute("data-caminho", artigo.sourcePath);

      numero = document.createElement("span");
      numero.className = "disciplina-acao-numero";
      numero.textContent = numeroIndice(i);

      conteudo = document.createElement("span");
      conteudo.className = "disciplina-acao-conteudo";
      forte = document.createElement("strong");
      forte.textContent = artigo.titulo;
      conteudo.appendChild(forte);
      link.appendChild(numero);
      link.appendChild(conteudo);

      link.onclick = function (evento) {
        var alvo;
        if (evento) evento.preventDefault();
        alvo = encontrarPorCaminho(this.getAttribute("data-caminho"));
        if (alvo) abrirArtigo(alvo, true);
        return false;
      };
      acoes.appendChild(link);
    }

    document.title = nomeCategoria(categoria) + " • arqueologia do design";
    rolarTopo();
  }

  function encontrarPorCaminho(caminho) {
    var i;
    for (i = 0; i < artigos.length; i += 1) {
      if (artigos[i].sourcePath === caminho) return artigos[i];
    }
    return null;
  }

  function encontrarPorRota(categoria, titulo) {
    var i;
    for (i = 0; i < artigos.length; i += 1) {
      if (artigos[i].categoria === categoria && normalizar(artigos[i].titulo) === normalizar(titulo)) return artigos[i];
    }
    return null;
  }

  function encontrarArtigoPorWiki(alvo) {
    var referencia = String(alvo || "").split("#")[0].replace(/\.md$/i, "").trim();
    var caminhoNormal, nome, i, caminhoItem;
    if (!referencia) return null;

    if (referencia.indexOf("/") !== -1) {
      caminhoNormal = normalizar(referencia.replace(/^\.\//, ""));
      for (i = 0; i < artigos.length; i += 1) {
        caminhoItem = normalizar(artigos[i].sourcePath.replace(/\.md$/i, ""));
        if (caminhoItem === caminhoNormal) return artigos[i];
      }
    }

    nome = normalizar(referencia.split("/").pop());
    for (i = 0; i < artigos.length; i += 1) {
      if (normalizar(artigos[i].titulo) === nome) return artigos[i];
    }
    return null;
  }

  function limparFrontmatter(markdown) {
    return String(markdown || "").replace(/^---\s*\n[\s\S]*?\n---\s*\n/, "");
  }

  function prepararMarkdown(markdown) {
    return limparFrontmatter(markdown)
      .replace(/!\[\[([^\]]+)\]\]/g, function (_texto, alvo) {
        return "`anexo: " + alvo + "`";
      })
      .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, function (_texto, alvo, rotulo) {
        var artigo = encontrarArtigoPorWiki(alvo);
        return artigo ? "[" + rotulo + "](" + rotaArtigo(artigo) + ")" : rotulo;
      })
      .replace(/\[\[([^\]]+)\]\]/g, function (_texto, alvo) {
        var artigo = encontrarArtigoPorWiki(alvo);
        var rotulo = alvo.split("#")[0].split("/").pop();
        return artigo ? "[" + rotulo + "](" + rotaArtigo(artigo) + ")" : rotulo;
      });
  }

  function renderizarMarkdown(markdown) {
    var texto = prepararMarkdown(markdown);
    if (window.marked) {
      try {
        if (typeof window.marked.parse === "function") return window.marked.parse(texto);
        if (typeof window.marked === "function") return window.marked(texto);
      } catch (erro) {}
    }
    return "<pre>" + escaparHtml(texto) + "</pre>";
  }

  function marcarMermaidLegado() {
    var blocos = corpoArtigo.querySelectorAll("code.language-mermaid"), i;
    for (i = 0; i < blocos.length; i += 1) {
      if (blocos[i].parentNode) blocos[i].parentNode.className += " legacy-mermaid-fallback";
    }
  }

  function abrirArtigo(artigo, atualizarRota) {
    var idCarregamento;
    if (!artigo) return;

    carregamentoAtual += 1;
    idCarregamento = carregamentoAtual;
    categoriaAtual = artigo.categoria;
    artigoAtual = artigo;
    esconderHome();
    esconder(leitorCampo);
    mostrar(leitorArtigo);

    if (atualizarRota) atualizarUrl(rotaArtigo(artigo));

    tituloArtigo.textContent = artigo.titulo;
    criarBreadcrumb(breadcrumbsArtigo, artigo.categoria, artigo.titulo);
    corpoArtigo.innerHTML = '<p class="legacy-status">Carregando estudo...</p>';
    var navRodape = el("artigo-nav-rodape");
    if (navRodape) navRodape.innerHTML = "";
    document.title = artigo.titulo + " • arqueologia do design";
    rolarTopo();

    fetch(rawUrl(artigo.sourcePath), { cache: "no-cache" })
      .then(function (resposta) {
        if (!resposta.ok) throw new Error("HTTP " + resposta.status);
        return resposta.text();
      })
      .then(function (markdown) {
        if (idCarregamento !== carregamentoAtual || artigoAtual !== artigo) return;
        corpoArtigo.innerHTML = renderizarMarkdown(markdown);
        marcarMermaidLegado();
        rolarTopo();
      })
      .catch(function () {
        if (idCarregamento !== carregamentoAtual) return;
        corpoArtigo.innerHTML = '<p class="legacy-status">Não foi possível carregar este estudo neste navegador.</p>';
      });
  }

  function buscar(termo) {
    var texto = normalizar(termo), lista = [], i, artigo, card, categoria, titulo;
    carregamentoAtual += 1;
    if (mainSearch && mainSearch.value !== termo) mainSearch.value = termo;
    if (navSearch && navSearch.value !== termo) navSearch.value = termo;

    if (!texto) {
      mostrarHome(false);
      return;
    }

    for (i = 0; i < artigos.length; i += 1) {
      artigo = artigos[i];
      if (normalizar(artigo.titulo + " " + nomeCategoria(artigo.categoria)).indexOf(texto) !== -1) lista.push(artigo);
    }

    esconderHome();
    esconder(leitorCampo);
    esconder(leitorArtigo);
    mostrar(resultados);
    resultadosTitulo.textContent = lista.length ? "resultados para “" + termo + "”" : "nenhum resultado";
    cardsResultados.innerHTML = "";

    if (!lista.length) {
      cardsResultados.innerHTML = '<p class="legacy-status">No modo de compatibilidade, a busca usa títulos e campos do acervo.</p>';
      return;
    }

    for (i = 0; i < lista.length; i += 1) {
      artigo = lista[i];
      card = document.createElement("a");
      card.className = "resultado-card";
      card.href = rotaArtigo(artigo);
      card.setAttribute("data-caminho", artigo.sourcePath);

      categoria = document.createElement("span");
      categoria.className = "resultado-categoria";
      categoria.textContent = nomeCategoria(artigo.categoria);
      titulo = document.createElement("span");
      titulo.className = "resultado-titulo";
      titulo.textContent = artigo.titulo;
      card.appendChild(categoria);
      card.appendChild(titulo);

      card.onclick = function (evento) {
        var alvo;
        if (evento) evento.preventDefault();
        alvo = encontrarPorCaminho(this.getAttribute("data-caminho"));
        if (alvo) abrirArtigo(alvo, true);
        return false;
      };
      cardsResultados.appendChild(card);
    }
  }

  function agruparArtigos() {
    var i, categoria;
    porCategoria = {};
    for (i = 0; i < artigos.length; i += 1) {
      categoria = artigos[i].categoria;
      if (!porCategoria[categoria]) porCategoria[categoria] = [];
      porCategoria[categoria].push(artigos[i]);
    }
  }

  function tratarRota() {
    var hash = window.location.hash || "";
    var partes, categoria, titulo, artigo;

    if (!hash || hash === "#" || hash === "#mapas-leitura") {
      mostrarHome(false);
      return;
    }

    if (hash.indexOf("#/campo/") === 0) {
      categoria = decodeURIComponent(hash.substring(8));
      abrirCampo(categoria, false);
      return;
    }

    if (hash.indexOf("#/estudo/") === 0) {
      partes = hash.substring(9).split("/");
      if (partes.length >= 2) {
        categoria = decodeURIComponent(partes.shift());
        titulo = decodeURIComponent(partes.join("/"));
        artigo = encontrarPorRota(categoria, titulo);
        if (artigo) {
          abrirArtigo(artigo, false);
          return;
        }
      }
    }

    mostrarHome(false);
  }

  function carregarCatalogo() {
    var url = "https://api.github.com/repos/" + REPO + "/git/trees/" + BRANCH + "?recursive=1";
    fetch(url, { cache: "no-cache" })
      .then(function (resposta) {
        if (!resposta.ok) throw new Error("HTTP " + resposta.status);
        return resposta.json();
      })
      .then(function (dados) {
        var arvore = dados.tree || [], i, item, partes, categoria, arquivo;
        artigos = [];
        for (i = 0; i < arvore.length; i += 1) {
          item = arvore[i];
          if (item.type !== "blob" || !/\.md$/i.test(item.path) || item.path.indexOf("/") === -1) continue;
          partes = item.path.split("/");
          categoria = partes[0];
          if (!categoriasPublicas[categoria]) continue;
          arquivo = partes[partes.length - 1];
          artigos.push({
            categoria: categoria,
            titulo: nomeLimpo(arquivo),
            sourcePath: item.path
          });
        }

        artigos.sort(function (a, b) { return a.sourcePath.localeCompare(b.sourcePath); });
        agruparArtigos();
        renderizarCategorias();
        tratarRota();
      })
      .catch(function () {
        if (pastas) pastas.innerHTML = '<p class="legacy-status">Não foi possível carregar o catálogo compatível.</p>';
      });
  }

  if (mainSearch) mainSearch.oninput = function () { buscar(this.value); };
  if (navSearch) navSearch.oninput = function () { buscar(this.value); };

  if (themeToggle) {
    themeToggle.onclick = function () {
      var atual = document.documentElement.getAttribute("data-theme") || "dark";
      aplicarTema(atual === "light" ? "dark" : "light", true);
    };
  }

  if (el("btn-voltar")) el("btn-voltar").onclick = function () { abrirCampo(categoriaAtual, true); };
  if (el("btn-voltar-disciplina")) el("btn-voltar-disciplina").onclick = function () { mostrarHome(true); };
  if (el("nav-logo")) el("nav-logo").onclick = function () { mostrarHome(true); };
  if (el("home-title")) el("home-title").onclick = function () { mostrarHome(true); };

  if (el("nav-link-indice")) {
    el("nav-link-indice").onclick = function (evento) {
      if (evento) evento.preventDefault();
      mostrarHome(true);
      window.setTimeout(function () {
        var alvo = el("explorar-campos");
        if (alvo) window.scrollTo(0, Math.max(0, alvo.offsetTop - 70));
      }, 0);
      return false;
    };
  }

  window.addEventListener("hashchange", tratarRota);
  window.addEventListener("popstate", tratarRota);

  iniciarTema();
  carregarCatalogo();
}());
