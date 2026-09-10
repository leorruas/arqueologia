import fs from "node:fs";
import path from "node:path";

const raiz = process.cwd();
const diretorio = path.join(raiz, "03 artefatos");

const camposPadrao = [
  ["Artefato", ["artefato", "nome do artefato"]],
  ["Período", ["periodo", "periodo aproximado"]],
  ["Autoria", ["autoria", "pessoas ou equipes envolvidas"]],
  ["Produto ou contexto", ["produto ou contexto", "produto ou contexto onde apareceu"]],
  ["Problema original", ["problema original"]],
  ["Mundo antes", ["mundo antes", "mundo antes da inovacao"]],
  ["Invenção", ["invencao"]],
  ["Refinamento", ["refinamento"]],
  ["Popularização", ["popularizacao"]],
  ["Padronização", ["padronizacao"]],
  ["Hipótese de design", ["hipotese de design"]],
  ["Comportamento aproveitado", ["comportamento aproveitado"]],
  ["Comportamento produzido", ["comportamento produzido", "comportamento criado"]],
  ["Relação de poder", ["relacao de poder"]],
  ["Consequências inesperadas", ["consequencias inesperadas"]],
  ["Destino ou transformação posterior", ["destino ou transformacao posterior", "destino do artefato"]],
  ["Conceitos relacionados", ["conceitos relacionados"]],
  ["Variáveis relacionadas", ["variaveis relacionadas"]],
  ["Genealogia", ["genealogia", "genealogias"]],
  ["Parentes", ["parentes"]],
  ["Princípio de design revelado", ["principio de design revelado"]],
  ["Questão em aberto", ["questao em aberto", "perguntas em aberto"]]
];

function normalizar(chave) {
  return chave
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function listarArquivos() {
  return fs.readdirSync(diretorio)
    .filter(nome => nome.endsWith(".md"))
    .map(nome => path.join(diretorio, nome));
}

function extrairSecao(markdown) {
  const inicioMatch = /^##\s+Ficha arqueológica\s*$/mi.exec(markdown);
  if (!inicioMatch) return null;

  const corpoInicio = inicioMatch.index + inicioMatch[0].length;
  const resto = markdown.slice(corpoInicio);
  const proximoHeading = /\n##\s+/.exec(resto);
  const corpoFim = proximoHeading ? corpoInicio + proximoHeading.index : markdown.length;

  return {
    inicio: inicioMatch.index,
    corpoInicio,
    fim: corpoFim,
    corpo: markdown.slice(corpoInicio, corpoFim)
  };
}

function parsearFichaLegada(corpo) {
  if (/^\s*\|\s*Campo\s*\|\s*Registro\s*\|/mi.test(corpo)) return null;

  const linhas = corpo.split(/\r?\n/);
  const dados = new Map();
  let chaveAtual = null;

  for (const linha of linhas) {
    const item = linha.match(/^\s*-\s+\*\*(.+?)\*\*:\s*(.*)$/);
    if (item) {
      chaveAtual = normalizar(item[1]);
      dados.set(chaveAtual, item[2].trim());
      continue;
    }

    if (chaveAtual && linha.trim() && !/^\s*#/.test(linha)) {
      dados.set(chaveAtual, `${dados.get(chaveAtual)} ${linha.trim()}`.trim());
    }
  }

  return dados.size ? dados : null;
}

function obter(dados, aliases) {
  for (const alias of aliases) {
    const valor = dados.get(normalizar(alias));
    if (valor) return valor;
  }
  return "";
}

function anexar(base, rotulo, valor) {
  if (!valor) return base;
  if (!base) return `${rotulo}: ${valor}`;
  if (base.includes(valor)) return base;
  return `${base} ${rotulo}: ${valor}`;
}

function montarValores(dados) {
  const valores = Object.fromEntries(camposPadrao.map(([campo, aliases]) => [campo, obter(dados, aliases)]));

  valores["Produto ou contexto"] = anexar(
    valores["Produto ou contexto"],
    "Categoria",
    obter(dados, ["categoria"])
  );

  const hipoteseCentral = obter(dados, ["hipotese central"]);
  const hipoteseHumana = obter(dados, ["hipotese sobre o comportamento humano"]);
  valores["Hipótese de design"] = valores["Hipótese de design"] || hipoteseCentral || hipoteseHumana;
  if (hipoteseCentral && valores["Hipótese de design"] !== hipoteseCentral) {
    valores["Hipótese de design"] = anexar(valores["Hipótese de design"], "Hipótese central", hipoteseCentral);
  }
  if (hipoteseHumana && valores["Hipótese de design"] !== hipoteseHumana) {
    valores["Hipótese de design"] = anexar(valores["Hipótese de design"], "Hipótese sobre o comportamento humano", hipoteseHumana);
  }

  valores["Consequências inesperadas"] = anexar(
    valores["Consequências inesperadas"],
    "Capacidade ampliada",
    obter(dados, ["capacidade ampliada"])
  );
  valores["Consequências inesperadas"] = anexar(
    valores["Consequências inesperadas"],
    "Capacidade reduzida ou deslocada",
    obter(dados, ["capacidade reduzida ou deslocada"])
  );
  valores["Consequências inesperadas"] = anexar(
    valores["Consequências inesperadas"],
    "Custo invisível",
    obter(dados, ["custo invisivel"])
  );

  valores["Destino ou transformação posterior"] = anexar(
    valores["Destino ou transformação posterior"],
    "Legado",
    obter(dados, ["legado"])
  );

  valores["Genealogia"] = anexar(
    valores["Genealogia"],
    "Família de ideias",
    obter(dados, ["familia de ideias"])
  );

  valores["Princípio de design revelado"] = anexar(
    valores["Princípio de design revelado"],
    "Por que funcionou",
    obter(dados, ["por que funcionou"])
  );

  const aliasesConsumidos = new Set(camposPadrao.flatMap(([, aliases]) => aliases.map(normalizar)));
  [
    "categoria",
    "hipotese central",
    "hipotese sobre o comportamento humano",
    "capacidade ampliada",
    "capacidade reduzida ou deslocada",
    "custo invisivel",
    "legado",
    "familia de ideias",
    "por que funcionou"
  ].forEach(chave => aliasesConsumidos.add(normalizar(chave)));

  const extras = [...dados.entries()].filter(([chave]) => !aliasesConsumidos.has(chave));
  if (extras.length) {
    const registro = extras.map(([chave, valor]) => `${chave}: ${valor}`).join("; ");
    valores["Consequências inesperadas"] = anexar(
      valores["Consequências inesperadas"],
      "Registros adicionais preservados da ficha anterior",
      registro
    );
  }

  return valores;
}

function tabelaPadrao(valores) {
  const linhas = ["", "| Campo | Registro |", "|---|---|"];
  for (const [campo] of camposPadrao) {
    const valor = valores[campo] || "Não explicitado na ficha anterior.";
    linhas.push(`| **${campo}** | ${valor} |`);
  }
  linhas.push("");
  return linhas.join("\n");
}

let alterados = 0;

for (const arquivo of listarArquivos()) {
  const markdown = fs.readFileSync(arquivo, "utf8");
  const secao = extrairSecao(markdown);
  if (!secao) continue;

  const dados = parsearFichaLegada(secao.corpo);
  if (!dados) continue;

  const valores = montarValores(dados);
  const novaSecao = `## Ficha arqueológica${tabelaPadrao(valores)}`;
  const atualizado = markdown.slice(0, secao.inicio) + novaSecao + markdown.slice(secao.fim);

  fs.writeFileSync(arquivo, atualizado);
  alterados += 1;
  console.log(`Ficha migrada: ${path.relative(raiz, arquivo)}`);
}

console.log(`Migração concluída: ${alterados} fichas convertidas para a tabela padrão.`);
