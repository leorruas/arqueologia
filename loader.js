/* Loader compartilhado pelas páginas moderna e compatível. ES5. */
(function () {
  var raiz = document.documentElement, sequencia = 0, ativo = null;
  var inicial = true, pendentes = { catalogo: true, editorial: !raiz.classList.contains("legacy-ios12") };
  try {
    var tema = localStorage.getItem("tema-arqueologia");
    raiz.setAttribute("data-theme", tema || (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));
  } catch (erro) {}
  raiz.classList.add("app-loading");
  function remover(loader) { if (loader && loader.parentNode) loader.parentNode.removeChild(loader); }
  function concluir(loader, id) {
    window.setTimeout(function () {
      if (id !== null && id !== sequencia) return;
      if (loader) loader.classList.add("is-complete");
      window.setTimeout(function () {
        if (id !== null && id !== sequencia) return;
        raiz.classList.remove("app-loading");
        if (loader) loader.classList.add("is-leaving");
        window.setTimeout(function () { remover(loader); }, 220);
      }, 180);
    }, 80);
  }
  window.ARQUEOLOGIA_LOADER = {
    iniciar: function (rotulo) {
      sequencia += 1;
      if (ativo) { clearTimeout(ativo.fallback); remover(ativo.elemento); }
      ativo = { id: sequencia, elemento: null, fallback: null };
      if (!inicial) {
        var loader = document.createElement("div");
        loader.className = "app-loader";
        loader.setAttribute("role", "status");
        loader.setAttribute("aria-label", rotulo || "Carregando conteúdo");
        loader.innerHTML = '<div class="app-loader__line" aria-hidden="true"></div>';
        document.body.appendChild(loader);
        ativo.elemento = loader;
      }
      var id = ativo.id;
      ativo.fallback = window.setTimeout(function () { window.ARQUEOLOGIA_LOADER.finalizar(id); }, 10000);
      return id;
    },
    finalizar: function (id) {
      if (!ativo || id !== ativo.id) return;
      clearTimeout(ativo.fallback);
      if (!inicial) concluir(ativo.elemento, id);
    },
    pronto: function (camada) {
      pendentes[camada] = false;
      if (!inicial || pendentes.catalogo || pendentes.editorial) return;
      inicial = false;
      clearTimeout(fallbackInicial);
      concluir(document.getElementById("initial-loader"), null);
    }
  };
  var fallbackInicial = window.setTimeout(function () {
    pendentes.catalogo = pendentes.editorial = false;
    window.ARQUEOLOGIA_LOADER.pronto("catalogo");
  }, 10000);
}());
