import fs from "node:fs";
import path from "node:path";

const raiz = process.cwd();
const categorias = new Set([
  "00 tipos de design",
  "00 índices",
  "01 conceitos",
  "02 variaveis",
  "03 artefatos",
  "04 genealogias",
  "05 percursos",
  "autores",
  "empresas"
]);

const substituicoes = new Map([
  ["Ficha Técnica", "Ficha técnica"],
  ["Ficha Resumo", "Ficha resumo"],
  ["Ficha Resumo do Conceito", "Ficha resumo do conceito"],
  ["Ficha Resumo da Variável", "Ficha resumo da variável"],
  ["História e Contexto de Criação", "História e contexto de criação"],
  ["História Documentada", "História documentada"],
  ["Interpretação Arqueológica", "Interpretação arqueológica"],
  ["Hipótese em Aberto", "Hipótese em aberto"],
  ["Inovação e Impacto", "Inovação e impacto"],
  ["Referências e Onde Encontrar", "Referências e onde encontrar"],
  ["Aplicação nos Artefatos", "Aplicação nos artefatos"],
  ["Impacto nos Artefatos", "Impacto nos artefatos"],
  ["Variáveis Relacionadas", "Variáveis relacionadas"],
  ["Conceitos Relacionados", "Conceitos relacionados"],
  ["Artefatos Relacionados", "Artefatos relacionados"],
  ["Autores Relacionados", "Autores relacionados"],
  ["As Quatro Camadas de Análise Crítica", "As quatro camadas de análise crítica"],
  ["O Mundo Antes da Inovação", "O mundo antes da inovação"],
  ["A Inovação Litográfica", "A inovação litográfica"],
  ["A Linguagem das Vanguardas e da Publicidade", "A linguagem das vanguardas e da publicidade"],
  ["Deslocamento para a Modernidade", "Deslocamento para a modernidade"],
  ["Quatro Níveis Históricos", "Quatro níveis históricos"],
  ["Quatro Camadas Críticas", "Quatro camadas críticas"],
  ["Fontes e Evidências", "Fontes e evidências"],
  ["Perguntas em Aberto", "Perguntas em aberto"],
  ["Família de Ideias", "Família de ideias"],
  ["Princípio de Design Revelado", "Princípio de design revelado"],
  ["Aumentada / Maximizada", "Aumentada / maximizada"],
  ["Diminuída / Minimizou", "Diminuída / minimizada"],
  ["Diminuída / Minimizada", "Diminuída / minimizada"],
  ["Pistas Ainda sem Estudo Publicado", "Pistas ainda sem estudo publicado"],
  ["Literatura ou Tradição Estabelecida", "Literatura ou tradição estabelecida"],
  ["Adaptações para a Arqueologia do Design", "Adaptações para a arqueologia do design"],
  ["Hipóteses do Projeto", "Hipóteses do projeto"],
  ["Regra de Uso", "Regra de uso"]
]);

function listarMarkdowns(diretorio, acumulador = []) {
  for (const entrada of fs.readdirSync(diretorio, { withFileTypes: true })) {
    const absoluto = path.join(diretorio, entrada.name);
    const relativo = path.relative(raiz, absoluto).split(path.sep).join("/");
    const topo = relativo.split("/")[0];
    if (entrada.isDirectory()) {
      if (categorias.has(topo)) listarMarkdowns(absoluto, acumulador);
      continue;
    }
    if (entrada.name.endsWith(".md") && categorias.has(topo)) acumulador.push(absoluto);
  }
  return acumulador;
}

let arquivosAlterados = 0;
let headingsAlterados = 0;

for (const arquivo of listarMarkdowns(raiz)) {
  const original = fs.readFileSync(arquivo, "utf8");
  const novo = original.replace(/^(#{2,6})\s+(.+)$/gm, (linha, marcas, titulo) => {
    const limpo = titulo.trim();
    const substituto = substituicoes.get(limpo);
    if (!substituto || substituto === limpo) return linha;
    headingsAlterados += 1;
    return `${marcas} ${substituto}`;
  });

  if (novo !== original) {
    fs.writeFileSync(arquivo, novo);
    arquivosAlterados += 1;
  }
}

console.log(`Sentence case: ${headingsAlterados} headings normalizados em ${arquivosAlterados} arquivos.`);
