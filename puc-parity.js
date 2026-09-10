/* Comportamentos compartilhados com a Pages da PUC. */

function sincronizarNavbarComPUC() {
  const nav = document.getElementById("sticky-nav");
  if (!nav) return;
  nav.classList.toggle("visible", window.scrollY > 80);
}

function limparNavegacoesRedundantesDaHome() {
  const orientacoes = document.getElementById("orientacoes-iniciais");
  if (orientacoes) orientacoes.hidden = true;

  document.querySelectorAll("#pastas-container .disciplina-card").forEach(card => {
    const href = decodeURIComponent(card.getAttribute("href") || "");
    if (href === "#/campo/03 artefatos") card.remove();
  });
}

function montarBreadcrumbsComoPUC() {
  const hash = window.location.hash;
  const campo = document.getElementById("disciplina-breadcrumbs");
  const artigo = document.getElementById("artigo-breadcrumbs");

  const montar = (container, categoria, titulo = "") => {
    if (!container || !categoria) return;
    const assinatura = `${hash}|${titulo}`;
    if (container.dataset.pucParity === assinatura && container.querySelector("[data-puc-breadcrumb]")) return;

    const rotulosAtuais = Array.from(container.children)
      .map(item => item.textContent?.trim())
      .filter(texto => texto && texto !== "/");

    const categoriaVisivel = rotulosAtuais.length >= 2 ? rotulosAtuais[1] : categoria
      .replace(/^\d+\.\s*/, "")
      .replace(/^\d+\s+/, "");
    const tituloVisivel = titulo || rotulosAtuais.at(-1) || "";

    container.innerHTML = "";

    const inicio = document.createElement("a");
    inicio.href = "#";
    inicio.className = "breadcrumb-link";
    inicio.dataset.pucBreadcrumb = "home";
    inicio.textContent = "início";
    container.appendChild(inicio);

    const sep1 = document.createElement("span");
    sep1.className = "breadcrumb-separator";
    sep1.textContent = "/";
    container.appendChild(sep1);

    if (titulo) {
      const linkCategoria = document.createElement("a");
      linkCategoria.href = `#/campo/${encodeURIComponent(categoria)}`;
      linkCategoria.className = "breadcrumb-link";
      linkCategoria.dataset.pucBreadcrumb = "categoria";
      linkCategoria.textContent = categoriaVisivel;
      container.appendChild(linkCategoria);

      const sep2 = document.createElement("span");
      sep2.className = "breadcrumb-separator";
      sep2.textContent = "/";
      container.appendChild(sep2);

      const atual = document.createElement("span");
      atual.setAttribute("aria-current", "page");
      atual.textContent = tituloVisivel;
      container.appendChild(atual);
    } else {
      const atual = document.createElement("span");
      atual.setAttribute("aria-current", "page");
      atual.textContent = categoriaVisivel;
      container.appendChild(atual);
    }

    container.dataset.pucParity = assinatura;
  };

  if (hash.startsWith("#/campo/")) {
    const categoria = decodeURIComponent(hash.replace("#/campo/", ""));
    montar(campo, categoria);
  }

  if (hash.startsWith("#/estudo/")) {
    const partes = hash.replace("#/estudo/", "").split("/");
    const categoria = decodeURIComponent(partes[0] || "");
    const titulo = decodeURIComponent(partes.slice(1).join("/") || "");
    montar(artigo, categoria, titulo);
  }
}

function sincronizarCamadaPUC() {
  limparNavegacoesRedundantesDaHome();
  sincronizarNavbarComPUC();
  montarBreadcrumbsComoPUC();
}

window.addEventListener("scroll", sincronizarNavbarComPUC, { passive: true });
window.addEventListener("hashchange", () => window.setTimeout(sincronizarCamadaPUC, 0));
window.addEventListener("popstate", () => window.setTimeout(sincronizarCamadaPUC, 0));
window.addEventListener("load", sincronizarCamadaPUC);

document.addEventListener("DOMContentLoaded", sincronizarCamadaPUC);

const observerPUC = new MutationObserver(() => {
  window.clearTimeout(observerPUC._timer);
  observerPUC._timer = window.setTimeout(sincronizarCamadaPUC, 0);
});
observerPUC.observe(document.body, { subtree: true, childList: true, attributes: true, attributeFilter: ["class"] });
