const corpoArtigo = document.getElementById("artigo-corpo");

function slugReferencia(texto) {
  return String(texto || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "nota";
}

function removerPrefixoTexto(elemento, quantidade) {
  const walker = document.createTreeWalker(elemento, NodeFilter.SHOW_TEXT);
  let restante = quantidade;
  let node = walker.nextNode();

  while (node && restante > 0) {
    const tamanho = node.nodeValue.length;
    const remover = Math.min(tamanho, restante);
    node.nodeValue = node.nodeValue.slice(remover);
    restante -= remover;
    node = walker.nextNode();
  }
}

function processarReferencias() {
  if (!corpoArtigo || corpoArtigo.querySelector(".mensagem-busca")) return;

  const definicoes = new Map();
  const paragrafos = Array.from(corpoArtigo.querySelectorAll("p"));

  paragrafos.forEach(paragrafo => {
    if (paragrafo.classList.contains("referencia-definicao")) return;

    const texto = paragrafo.textContent || "";
    const match = texto.match(/^\s*\[\^([^\]]+)\]:\s*/);
    if (!match) return;

    const rotulo = match[1].trim();
    const ordem = definicoes.size + 1;
    const id = `referencia-${slugReferencia(rotulo)}`;

    removerPrefixoTexto(paragrafo, match[0].length);
    paragrafo.id = id;
    paragrafo.classList.add("referencia-definicao");
    paragrafo.setAttribute("tabindex", "-1");

    const numero = document.createElement("strong");
    numero.className = "referencia-numero";
    numero.textContent = `${ordem}. `;
    paragrafo.prepend(numero);

    definicoes.set(rotulo, { paragrafo, ordem, id });
  });

  if (!definicoes.size) return;

  const ocorrencias = new Map();
  const primeirasChamadas = new Map();
  const walker = document.createTreeWalker(corpoArtigo, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!/\[\^[^\]]+\]/.test(node.nodeValue || "")) return NodeFilter.FILTER_REJECT;
      const pai = node.parentElement;
      if (!pai) return NodeFilter.FILTER_REJECT;
      if (pai.closest(".referencia-definicao, code, pre, a")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nos = [];
  let atual = walker.nextNode();
  while (atual) {
    nos.push(atual);
    atual = walker.nextNode();
  }

  nos.forEach(node => {
    const texto = node.nodeValue || "";
    const regex = /\[\^([^\]]+)\]/g;
    let match;
    let inicio = 0;
    let alterou = false;
    const fragmento = document.createDocumentFragment();

    while ((match = regex.exec(texto))) {
      const rotulo = match[1].trim();
      const definicao = definicoes.get(rotulo);
      if (!definicao) continue;

      alterou = true;
      if (match.index > inicio) fragmento.append(document.createTextNode(texto.slice(inicio, match.index)));

      const numeroOcorrencia = (ocorrencias.get(rotulo) || 0) + 1;
      ocorrencias.set(rotulo, numeroOcorrencia);
      const idChamada = `chamada-${slugReferencia(rotulo)}-${numeroOcorrencia}`;
      if (!primeirasChamadas.has(rotulo)) primeirasChamadas.set(rotulo, idChamada);

      const sup = document.createElement("sup");
      sup.id = idChamada;
      sup.className = "referencia-chamada";

      const link = document.createElement("a");
      link.href = `#${definicao.id}`;
      link.dataset.referenciaAlvo = definicao.id;
      link.textContent = String(definicao.ordem);
      link.setAttribute("aria-label", `Ir para a referência ${definicao.ordem}`);

      sup.appendChild(link);
      fragmento.appendChild(sup);
      inicio = regex.lastIndex;
    }

    if (!alterou) return;
    if (inicio < texto.length) fragmento.append(document.createTextNode(texto.slice(inicio)));
    node.parentNode.replaceChild(fragmento, node);
  });

  definicoes.forEach((definicao, rotulo) => {
    const idChamada = primeirasChamadas.get(rotulo);
    if (!idChamada || definicao.paragrafo.querySelector(".referencia-voltar")) return;

    definicao.paragrafo.append(document.createTextNode(" "));
    const voltar = document.createElement("a");
    voltar.href = `#${idChamada}`;
    voltar.className = "referencia-voltar";
    voltar.dataset.referenciaAlvo = idChamada;
    voltar.textContent = "↩";
    voltar.setAttribute("aria-label", `Voltar para a chamada da referência ${definicao.ordem}`);
    definicao.paragrafo.appendChild(voltar);
  });
}

function navegarParaReferencia(event) {
  const link = event.target.closest("a[data-referencia-alvo]");
  if (!link || !corpoArtigo?.contains(link)) return;

  event.preventDefault();
  const alvo = document.getElementById(link.dataset.referenciaAlvo);
  if (!alvo) return;

  alvo.scrollIntoView({ behavior: "smooth", block: "center" });
  if (alvo.classList.contains("referencia-definicao")) {
    alvo.focus({ preventScroll: true });
  }
}

if (corpoArtigo) {
  let timer;
  const observer = new MutationObserver(() => {
    window.clearTimeout(timer);
    timer = window.setTimeout(processarReferencias, 20);
  });

  observer.observe(corpoArtigo, { childList: true, subtree: true });
  corpoArtigo.addEventListener("click", navegarParaReferencia);
  processarReferencias();
}
