const rotulosCallout = {
  note: "nota",
  abstract: "resumo",
  summary: "resumo",
  tldr: "resumo",
  info: "informação",
  todo: "a fazer",
  tip: "dica",
  hint: "dica",
  important: "importante",
  success: "resultado",
  check: "resultado",
  done: "resultado",
  question: "pergunta",
  help: "pergunta",
  faq: "pergunta",
  warning: "atenção",
  caution: "cuidado",
  attention: "atenção",
  failure: "problema",
  fail: "problema",
  missing: "problema",
  danger: "perigo",
  error: "erro",
  bug: "problema",
  example: "exemplo",
  quote: "citação",
  cite: "citação"
};

function normalizarTipoCallout(tipo) {
  return String(tipo || "note")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9_-]+/g, "-");
}

function estilizarCallouts() {
  const corpo = document.getElementById("artigo-corpo");
  if (!corpo) return;

  corpo.querySelectorAll("blockquote:not(.obsidian-callout)").forEach(bloco => {
    const primeiro = bloco.firstElementChild;
    if (!primeiro || primeiro.tagName !== "P") return;

    const texto = primeiro.textContent.trim();
    const match = texto.match(/^\[!([^\]]+)\]([+-])?\s*(.*)$/s);
    if (!match) return;

    const tipo = normalizarTipoCallout(match[1]);
    const rotulo = rotulosCallout[tipo] || tipo.replace(/[-_]+/g, " ");
    const restoTexto = String(match[3] || "").trim();
    const restoHtml = primeiro.innerHTML
      .replace(/^\s*\[![^\]]+\](?:[+-])?\s*/i, "")
      .trim();
    const temConteudoDepois = Array.from(bloco.children)
      .some(elemento => elemento !== primeiro && elemento.textContent.trim());

    bloco.classList.add("obsidian-callout", `callout-${tipo}`);
    bloco.dataset.callout = tipo;
    if (match[2]) bloco.dataset.fold = match[2];

    const cabecalho = document.createElement("div");
    cabecalho.className = "callout-cabecalho";

    const sinal = document.createElement("span");
    sinal.className = "callout-sinal";
    sinal.setAttribute("aria-hidden", "true");
    cabecalho.appendChild(sinal);

    const label = document.createElement("span");
    label.className = "callout-rotulo";
    label.textContent = rotulo;
    cabecalho.appendChild(label);

    if (temConteudoDepois && restoTexto) {
      const titulo = document.createElement("strong");
      titulo.className = "callout-titulo";
      titulo.innerHTML = restoHtml;
      cabecalho.appendChild(titulo);
      primeiro.remove();
    } else if (restoTexto) {
      primeiro.innerHTML = restoHtml;
      primeiro.classList.add("callout-texto-principal");
    } else {
      primeiro.remove();
    }

    bloco.insertBefore(cabecalho, bloco.firstChild);
  });
}

function iniciarCallouts() {
  const corpo = document.getElementById("artigo-corpo");
  if (!corpo) return;

  let frame = 0;
  const agendar = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(estilizarCallouts);
  };

  const observer = new MutationObserver(agendar);
  observer.observe(corpo, { childList: true, subtree: true });
  estilizarCallouts();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", iniciarCallouts, { once: true });
} else {
  iniciarCallouts();
}
