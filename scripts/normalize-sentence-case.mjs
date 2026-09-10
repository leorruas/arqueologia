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
  ["Regra de Uso", "Regra de uso"],
  ["Origens e Surgimento", "Origens e surgimento"],
  ["Evolução e Desenvolvimento", "Evolução e desenvolvimento"],
  ["Figuras e Autores de Destaque", "Figuras e autores de destaque"],
  ["Empresas e Estúdios Clave", "Empresas e estúdios de destaque"],
  ["Artefatos Históricos Relacionados", "Artefatos históricos relacionados"],
  ["Conexões e Referências", "Conexões e referências"],
  ["Design de Produto e Mobiliário", "Design de produto e mobiliário"],
  ["Design Gráfico e Comunicação Visual", "Design gráfico e comunicação visual"],
  ["Design de Serviços e Organização", "Design de serviços e organização"],
  ["Interfaces Digitais e Software", "Interfaces digitais e software"],
  ["Designers e Teóricos", "Designers e teóricos"],
  ["Século XIX e Início do Século XX (Pioneiros e Bauhaus)", "Século XIX e início do século XX (pioneiros e Bauhaus)"],
  ["Meados do Século XX (Modernismo e Design Suíço)", "Meados do século XX (modernismo e design suíço)"],
  ["Teoria do Design e Wicked Problems", "Teoria do design e wicked problems"],
  ["Era Digital e Computação Pessoal", "Era digital e computação pessoal"],
  ["Design de Serviços, Facilitação e Design Estratégico", "Design de serviços, facilitação e design estratégico"],
  ["Filosofia, Sociologia e Relações de Poder", "Filosofia, sociologia e relações de poder"],
  ["Economia Comportamental e Arquitetura de Escolha", "Economia comportamental e arquitetura de escolha"],
  ["Evolução, Cognição e Cultura Material", "Evolução, cognição e cultura material"],
  ["Corporações, Estúdios e Fundições", "Corporações, estúdios e fundições"],
  ["Tecnologia e Eletrônicos", "Tecnologia e eletrônicos"],
  ["Consultorias de Serviços e Design Estratégico", "Consultorias de serviços e design estratégico"],
  ["Design Gráfico e Estúdios", "Design gráfico e estúdios"],
  ["Fundições Tipográficas (Type Foundries)", "Fundições tipográficas (type foundries)"],
  ["Leituras e Livros Catalogados", "Leituras e livros catalogados"],
  ["Taxonomia de Critérios de Distribuição", "Taxonomia de critérios de distribuição"],
  ["As Famílias de Artefatos e os Recursos Invisíveis", "As famílias de artefatos e os recursos invisíveis"],
  ["A Matriz de Estabilização Comportamental", "A matriz de estabilização comportamental"],
  ["As Camadas de Efemeridade Urbana", "As camadas de efemeridade urbana"],
  ["Mecanismos de Construção de Fronteiras", "Mecanismos de construção de fronteiras"],
  ["Indução de Contextos e Behavior Settings", "Indução de contextos e behavior settings"]
]);

const titulosSeguros = new Map([
  ["Design Gráfico", "Design gráfico"],
  ["Design de Interface", "Design de interface"],
  ["Design de Produto", "Design de produto"],
  ["Design de Serviços", "Design de serviços"],
  ["Índice de Artefatos", "Índice de artefatos"],
  ["Índice de Autores", "Índice de autores"],
  ["Índice de Conceitos", "Índice de conceitos"],
  ["Índice de Empresas", "Índice de empresas"],
  ["Índice de Variáveis", "Índice de variáveis"],
  ["Livros Indicados", "Livros indicados"],
  ["Autonomia da Atenção", "Autonomia da atenção"],
  ["Compressão do Esforço", "Compressão do esforço"],
  ["Continuidade de Acesso", "Continuidade de acesso"],
  ["Distribuição de Escassez", "Distribuição de escassez"],
  ["Ecologia de Artefatos", "Ecologia de artefatos"],
  ["Economia da Atenção", "Economia da atenção"],
  ["Eras da Economia e Design", "Eras da economia e design"],
  ["Fricção Boa vs Fricção Ruim", "Fricção boa vs fricção ruim"],
  ["Justiça Procedimental", "Justiça procedimental"],
  ["Manipulação Direta", "Manipulação direta"],
  ["Memória Distribuída", "Memória distribuída"],
  ["Paradoxo da Escolha", "Paradoxo da escolha"],
  ["Peles Temporárias da Arquitetura", "Peles temporárias da arquitetura"],
  ["Recompensa Variável", "Recompensa variável"],
  ["Redução de Inferências", "Redução de inferências"],
  ["Serviço de Reflexão", "Serviço de reflexão"],
  ["Tecnologia de Acesso", "Tecnologia de acesso"],
  ["Tecnologias de Delimitação", "Tecnologias de delimitação"],
  ["Atrito Decisório", "Atrito decisório"],
  ["Custo Transacional", "Custo transacional"],
  ["Custo de Busca", "Custo de busca"],
  ["Custo do Erro", "Custo do erro"],
  ["Expectativa de Disponibilidade", "Expectativa de disponibilidade"],
  ["Legitimidade Decisória", "Legitimidade decisória"],
  ["Previsibilidade Visual", "Previsibilidade visual"],
  ["Atalhos de Teclado", "Atalhos de teclado"],
  ["Botão Salvar", "Botão salvar"],
  ["Carrinho de Compras", "Carrinho de compras"],
  ["Cartão de Embarque", "Cartão de embarque"],
  ["Controle Remoto", "Controle remoto"],
  ["Espaço entre Palavras", "Espaço entre palavras"],
  ["Garrafa de Água", "Garrafa de água"],
  ["Hipótese Científica", "Hipótese científica"],
  ["Justificativa de Valor Público", "Justificativa de valor público"],
  ["Número de Protocolo", "Número de protocolo"],
  ["Pergunta de Pesquisa", "Pergunta de pesquisa"],
  ["Problema de Design", "Problema de design"],
  ["Projeto Piloto", "Projeto piloto"],
  ["Prompt Conversacional", "Prompt conversacional"],
  ["Quadro Branco", "Quadro branco"],
  ["Tela de Login", "Tela de login"],
  ["Atenção e Recompensa", "Atenção e recompensa"],
  ["Coordenação e Sincronização", "Coordenação e sincronização"],
  ["Limiar e Delimitação", "Limiar e delimitação"],
  ["Permanência e Memória Externa", "Permanência e memória externa"],
  ["Reversibilidade e Perdão", "Reversibilidade e perdão"],
  ["Como o Design Aprendeu a Guardar", "Como o design aprendeu a guardar"],
  ["Da Parede ao Feed", "Da parede ao feed"],
  ["Do Gesto à Recompensa", "Do gesto à recompensa"]
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
let titulosAlterados = 0;
let h1Alterados = 0;

for (const arquivo of listarMarkdowns(raiz)) {
  const original = fs.readFileSync(arquivo, "utf8");
  let novo = original.replace(/^(#{2,6})\s+(.+)$/gm, (linha, marcas, titulo) => {
    const limpo = titulo.trim();
    const substituto = substituicoes.get(limpo);
    if (!substituto || substituto === limpo) return linha;
    headingsAlterados += 1;
    return `${marcas} ${substituto}`;
  });

  novo = novo.replace(/^title:\s*(["'])(.+?)\1\s*$/m, (linha, aspas, titulo) => {
    const substituto = titulosSeguros.get(titulo.trim());
    if (!substituto || substituto === titulo.trim()) return linha;
    titulosAlterados += 1;
    return `title: ${aspas}${substituto}${aspas}`;
  });

  novo = novo.replace(/^#\s+(.+)$/m, (linha, titulo) => {
    const substituto = titulosSeguros.get(titulo.trim());
    if (!substituto || substituto === titulo.trim()) return linha;
    h1Alterados += 1;
    return `# ${substituto}`;
  });

  if (novo !== original) {
    fs.writeFileSync(arquivo, novo);
    arquivosAlterados += 1;
  }
}

console.log(`Sentence case: ${headingsAlterados} headings, ${titulosAlterados} títulos e ${h1Alterados} H1 normalizados em ${arquivosAlterados} arquivos.`);
