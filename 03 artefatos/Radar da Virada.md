---
title: "Radar da Virada"
type: "artefato"
status: "rascunho"
tags:
  - design/artefato
  - arqueologia
---

# Radar da Virada

Em uma eleição, acompanhar as conversas públicas significa atravessar várias superfícies. Uma publicação circula no X, um vídeo aparece no YouTube, uma expressão cresce nas buscas e uma notícia reaparece em comentários. Quem tenta compreender esse ambiente encontra informações fragmentadas e medidas incomparáveis. Um número de visualizações não expressa a mesma coisa que uma consulta ao Google ou uma menção no X. As plataformas também selecionam o que cada pessoa consegue observar segundo suas próprias regras.

O [[03 artefatos/Radar da Virada|Radar da Virada]] propõe uma resposta concreta: reunir sinais dessas fontes em um painel de narrativas eleitorais. Na versão pública consultada em outubro de 2026, o site se apresenta como iniciativa voluntária de apoio a Lula, vinculada à Comunidade Tech contra Flávio Bolsonaro, sem vínculo declarado com a campanha. Oferece um *War Room* com modos intitulados **Mais ditas**, **Picos** e **Menções**, além de seções de temas, vídeos, mídia independente e ferramentas comunitárias.[^1] O posicionamento político é declarado; a leitura arqueológica procura identificar que problema o arranjo visual tenta resolver, quais operações consegue demonstrar e quais efeitos ainda são hipótese.

O gesto central consiste em **transformar sinais dispersos de circulação em uma superfície organizada para orientar a atenção**. Essa superfície pode ajudar a reconhecer mudanças e encontrar fontes. Também transfere poder interpretativo para a seleção de indicadores, recortes temporais, categorias e regras de classificação. Quanto mais as pessoas consultam o painel para decidir o que merece acompanhamento, mais importantes se tornam as decisões que definem o que aparece nele.

## Da consulta fragmentada à sala de situação

Antes de um painel desse tipo, o acompanhamento pode depender de abrir feeds diferentes, realizar buscas, consultar gráficos próprios de cada plataforma e reunir manualmente recortes. O clipping de imprensa, a redação jornalística, o painel de controle e a sala de situação são parentes funcionais dessa operação: todos criam um lugar comum para informações que, sem uma mediação, permaneceriam dispersas. Não há evidência de descendência direta dessas práticas para este produto, e os mecanismos de coleta do Radar não foram reconstruídos nesta investigação.

A expressão *War Room* importa porque introduz uma metáfora de coordenação e urgência. Ela sugere uma superfície onde acontecimentos podem ser acompanhados enquanto ainda estão se desenrolando. O projeto combina essa metáfora com temporalidades curtas: 24 horas nas visualizações de palavras mais ditas e menções, e três horas para os picos.[^1] A janela escolhida passa a participar daquilo que a interface pode chamar de relevante. Um assunto duradouro e importante pode não ter pico recente; um tema efêmero pode surgir como urgência porque cresceu abruptamente.

Essa organização faz lembrar [[03 artefatos/Trending Topics do X Twitter|Trending Topics do X/Twitter]], que transforma conversas distribuídas em tópicos perceptíveis; e se contrapõe ao [[03 artefatos/Feed algoritmico do Instagram|feed algorítmico]], no qual muitas regras de seleção permanecem opacas para o usuário. No Radar, algumas decisões aparecem como alternativas nomeadas pelo próprio design: o visitante pode escolher se quer observar volume, aceleração ou evolução temporal. Ainda assim, dar nome à visualização não torna automaticamente auditável a fórmula que a alimenta.

## Três visualizações e três definições de importância

O modo **Mais ditas** anuncia uma janela de 24 horas e declara que tamanho representa “alcance (views por hora)”, enquanto a cor diferencia quem fala mais sobre o assunto: pró-Lula, pró-Flávio ou ambos.[^1] Há uma questão metodológica justamente nessa descrição. Alcance costuma designar pessoas ou contas distintas expostas; *views por hora* descreve uma taxa de visualizações. Sem a fórmula, não sabemos se o painel deduplica pessoas, qual é a unidade efetiva nem como consolida eventos provenientes de fontes diferentes. O nome visual sugere um volume social; a legenda técnica da própria interface indica uma taxa temporal. Essa tensão não pode ser resolvida apenas pela aparência.

**Picos** anuncia palavras que dispararam em uma janela de três horas. A hipótese visual se aproxima de [[02 variaveis/Momentum de atenção|momentum de atenção]]: reconhecer a velocidade recente de crescimento. Mas um aumento pode ser definido por diferença absoluta, crescimento percentual, desvio em relação a uma linha de base ou outra regra. Imagine dois assuntos: um passa de 100 para 300 ocorrências por hora; outro, de 2 para 40. O primeiro ganhou 200 ocorrências por hora; o segundo multiplicou seu ritmo por vinte. Qual será considerado pico depende da operação escolhida. A fórmula do Radar não pôde ser verificada aqui, portanto os exemplos ilustram possibilidades matemáticas, não sua implementação.

**Menções** oferece uma série de citações de Lula e Flávio hora a hora, nas últimas 24 horas.[^1] Essa representação torna perceptível a sucessão de momentos, aproximando-se de [[02 variaveis/Recência|recência]] e de análise temporal. Uma menção, contudo, não equivale a endosso. Uma publicação pode citar um candidato para criticá-lo, ironizá-lo ou reproduzir uma reportagem. A interpretação política da contagem exige conhecer quais dados entram na classificação e de que maneira o sistema distingue posicionamento e simples referência nominal.

As três visualizações, consideradas juntas, mostram a diferença entre [[02 variaveis/Popularidade|popularidade]] acumulada, crescimento recente e evolução de um assunto no tempo. Essa separação pode ampliar a capacidade de leitura do visitante. Mas também pode criar uma percepção de urgência ou consenso caso as categorias sejam tomadas como equivalentes a importância pública, concordância ou intenção de voto. O painel enuncia suas próprias fontes como Trends24, Google Trends, Google Notícias, YouTube, TikTok e Kwai; isso é uma **declaração de procedência do produto**, sem que esta pesquisa tenha verificado APIs, critérios de coleta, deduplicação ou atualização.[^1]

## Quando representar um assunto também significa classificá-lo

Em dados heterogêneos, a normalização exige decisões. O Google Trends, por exemplo, apresenta medidas normalizadas de interesse de busca em suas ferramentas e não uma contagem absoluta de todas as pesquisas realizadas.[^2] Uma menção em rede social, uma visualização de vídeo e uma consulta de busca não compartilham unidade comum. A comparação entre plataformas requer denominadores, pesos ou transformações explícitas. A presença das fontes na página informa onde procurar evidências; não basta para reconstruir a transformação de cada sinal num indicador conjunto.

Outra camada é a classificação social. A legenda do Radar indica cores para lados políticos. Que evidência faz uma publicação entrar na categoria pró-Lula, pró-Flávio ou ambos? Perfil de origem, palavras-chave, conteúdo efetivo, autoria ou um modelo de classificação poderiam produzir resultados diferentes. Uma pessoa pode criticar um candidato ao mencioná-lo. Um perfil pode mudar de posição ou compartilhar ironicamente uma fala adversária. Sem descrição da regra, não é possível afirmar que o site utiliza uma dessas técnicas, nem calcular o erro de classificação. A hipótese arqueológica é que **a categoria torna uma conversa legível ao custo de estabelecer critérios sobre quem pertence a cada conjunto**.

Aqui o [[01 conceitos/Dispositivo|dispositivo]] de Foucault é uma lente comparativa, não uma identificação automática do dashboard com um dispositivo disciplinar. O que merece investigação é a rede composta por fontes, regras de observação, classificações, equipes, práticas de interpretação e ações que passam a depender dessa representação. Um painel que mede o presente também pode alterar quais acontecimentos seus usuários consideram dignos de atenção, desde que essa influência seja demonstrada na prática. A [[04 genealogias/Gramaticas Produtivas|gramática produtiva]] aparece nas próprias categorias e temporalidades que fazem diferentes resultados caberem numa mesma estrutura visual.

## Da observação à possibilidade de ação

A página reúne as áreas **Explodindo agora**, **Pra mandar agora** e **Temas que viram voto**, além de ligações para canais de mídia independente e ferramentas comunitárias como Fura Bolha, Em Frente, Quem Compara e Vira Voto.[^1] A sequência de rótulos sugere uma passagem: identificar mudanças, localizar materiais e encontrar outras experiências. A interface propõe, portanto, uma coordenação entre monitoramento e possibilidades de participação. Não temos evidências de que a navegação efetivamente produza uma determinada ação ou de que as ferramentas sejam usadas na mesma jornada.

A seção **Temas que viram voto** declara mostrar somente temas com efeito comprovado em pesquisa.[^1] Essa é uma afirmação metodológica forte da própria interface. Para validá-la seriam necessários estudos identificáveis, população, período, variável medida e definição do que conta como efeito. Interesse em busca, atenção acumulada, intenção declarada de voto e mudança efetiva de voto são fenômenos diferentes. A escolha de um título pode orientar a interpretação antes que o leitor examine a evidência. Um rótulo muito assertivo exige transparência proporcional sobre sua origem.

O parentesco com [[03 artefatos/Pôster|pôster]] é especialmente fértil: ambos disputam atenção por meio de uma superfície organizada, mas o pôster normalmente conserva uma composição relativamente estável enquanto um painel pode reorganizar indicadores à medida que novos dados chegam. Também se conecta ao percurso [[05 percursos/Da Parede ao Feed|Da parede ao feed]], que investiga a passagem de superfícies públicas para distribuições personalizadas. O Radar estabelece ainda um contraste com [[05 percursos/Da recomendacao a circulacao propria|Da recomendação à circulação própria]]: permite acompanhar fontes dispersas por um endereço próprio, embora continue dependente da cobertura, das plataformas, do processamento e da disponibilidade dos serviços utilizados.

## Uma interface legível ainda precisa tornar seus cálculos verificáveis

A possível consequência do sucesso desse artefato é uma mudança na confiança do usuário. Quanto mais uma ferramenta permite acompanhar acontecimentos sem visitar todas as fontes, mais suas próprias decisões de medição ganham autoridade. Ela pode ampliar capacidades reais de orientação e, simultaneamente, transformar categorias e janelas de coleta em condições para perceber o que importa. A pessoa passa a compreender acontecimentos por meio de indicadores cuja produção talvez não conheça.

A investigação técnica permanece incompleta. A versão pública acessível apresentou os controles, as descrições e as fontes declaradas, enquanto a área dinâmica do War Room exibiu “Carregando…” no documento consultado.[^1] Não foram inspecionados o código interno, as rotinas de coleta, eventuais cálculos no navegador, as APIs acionadas nem amostras completas dos gráficos. Assim, nenhuma fórmula de pico, alcance, cor política ou agregação entre plataformas é atribuída à implementação como fato. O Radar também não deve ser tratado automaticamente como painel cientificamente validado por usar linguagem estatística.

Uma auditoria reproduzível começaria pela coleta de uma amostra identificada de saídas com carimbo temporal, seguida da reconstrução das fontes, das unidades, do cálculo de crescimento e da regra de classificação. Seria importante examinar erros, dados faltantes, duplicação de publicações e diferenças entre a legenda visual e a medida computada. Resultados que não pudessem ser reconstituídos permaneceriam como dados apresentados pela interface, com sua procedência e incerteza explicitadas.

O princípio de design que emerge é simples e exigente: **uma interface que transforma informação em prioridade precisa tornar discutíveis as escolhas pelas quais aquilo virou prioridade**. A pergunta final não é somente o que o radar mostra. É quem consegue verificar, modificar ou contestar as regras que o fazem enxergar.

## Ficha arqueológica

| Campo | Registro |
|---|---|
| **Artefato** | Radar da Virada |
| **Período** | Observação pública em outubro de 2026; primeira implementação não datada nesta pesquisa |
| **Autoria** | Comunidade Tech contra Flávio Bolsonaro, responsável declarada pelo site; equipes e criadores individuais não identificados |
| **Produto ou contexto** | https://radardavirada.pages.dev/; monitor de narrativas eleitorais e ferramentas comunitárias |
| **Tipo(s) de design** | [[00 tipos de design/Design de Interface|Design de interface]], [[00 tipos de design/Design de Servicos|Design de serviços]] |
| **Empresas ou instituições relacionadas** | Comunidade Tech contra Flávio Bolsonaro (responsável declarada); fontes externas listadas pelo próprio site |
| **Problema original** | Acompanhamento fragmentado de assuntos políticos em múltiplas plataformas e fontes |
| **Mundo antes** | Consultas separadas a feeds, buscas, vídeos, notícias, clipping e contagens manuais |
| **Invenção** | Não há reivindicação nem evidência de invenção do dashboard ou do monitoramento de tendências pelo projeto |
| **Refinamento** | Implementação observada que reúne modos Mais ditas, Picos e Menções, janelas temporais e links comunitários |
| **Popularização** | Não demonstrada; não foram obtidos dados de audiência ou adoção do Radar |
| **Padronização** | Convenções de painel e série temporal reaproveitadas; não demonstrada padronização originada pelo projeto |
| **Hipótese de design** | Concentrar sinais dispersos e oferecer leituras temporais distintas facilita identificar mudanças e consultar fontes |
| **Promessa** | Ajudar a perceber narrativas eleitorais e localizar conteúdos e recursos em circulação; reconstrução da proposta da interface |
| **Comportamento aproveitado** | Comparar indicadores, consultar notícias, acompanhar acontecimentos e procurar tendências |
| **Comportamento produzido** | A interface convida a alternar entre volume, picos e menções e a acessar ferramentas relacionadas; efeito real não medido |
| **Relação de poder** | Responsáveis selecionam fontes, janelas e categorias; usuários recebem modos de leitura sem acesso verificado às fórmulas internas |
| **Consequências inesperadas** | Potencial de confundir atenção com apoio, taxa de views com alcance ou pico de circulação com importância pública; hipóteses, não efeitos demonstrados |
| **Destino ou transformação posterior** | Indeterminado em outubro de 2026; continuidade, evolução e adoção ainda não documentadas |
| **Futuro prometido** | Um acompanhamento mais unificado e rápido de narrativas dispersas; interpretação da interface |
| **Futuro produzido** | Uma superfície pública que reúne modos de acompanhamento e caminhos para ferramentas comunitárias; impacto externo não medido |
| **Quando a promessa virou expectativa** | Não demonstrado; não há evidência de normalização social do uso do Radar |
| **Futuro tornado mais provável** | Hipótese: projetos de monitoramento que tornam critérios de classificação e ritmos de atenção parte da experiência cotidiana |
| **Descendentes possíveis** | Painéis de observação auditáveis e interfaces que explicitem proveniência e regras; hipótese prospectiva, não descendência demonstrada |
| **Novo problema produzido pelo sucesso** | Aumento da influência de métricas e categorias próprias do painel sobre a percepção da importância dos assuntos |
| **Conceitos relacionados** | [[01 conceitos/Dispositivo|Dispositivo]], [[01 conceitos/Engajamento em plataformas digitais|Engajamento em plataformas digitais]] |
| **Variáveis relacionadas** | [[02 variaveis/Popularidade|Popularidade]], [[02 variaveis/Momentum de atenção|Momentum de atenção]], [[02 variaveis/Recência|Recência]], [[02 variaveis/Propagação|Propagação]] |
| **Genealogia** | [[04 genealogias/Gramaticas Produtivas|Gramáticas produtivas]], [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]] |
| **Percurso(s)** | [[05 percursos/Da Parede ao Feed|Da parede ao feed]], [[05 percursos/Da recomendacao a circulacao propria|Da recomendação à circulação própria]] |
| **Parentes** | [[03 artefatos/Pôster|Pôster]], [[03 artefatos/Trending Topics do X Twitter|Trending Topics do X/Twitter]], [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]] |
| **Leituras-chave** | Site Radar da Virada (fonte primária de interface); Google Trends, documentação oficial de normalização de interesse; não identificadas obras que comprovem origem ou impacto do projeto |
| **Princípio de design revelado** | Concentrar dados dispersos aumenta legibilidade enquanto transfere decisões de prioridade para categorias, unidades e janelas do painel |
| **Questão em aberto** | Como reproduzir os cálculos de crescimento e classificação do War Room e distinguir atenção observada de significância pública? |

## Referências

[^1]: Radar da Virada. *War Room; Temas que viram voto; Pra mandar agora; Do que cada lado fala; Ferramentas da comunidade*. Página pública consultada em 9 out. 2026. Confirma rótulos, janelas, legendas de visualização, fontes declaradas e responsáveis; não documenta as fórmulas internas nem permite validar resultados dinâmicos. https://radardavirada.pages.dev/

[^2]: Google. *Como funcionam os dados do Google Trends*. Documentação de normalização do interesse relativo, apresentada para distinguir busca de contagens absolutas de menções e visualizações. https://support.google.com/trends/answer/4365533?hl=pt-BR
