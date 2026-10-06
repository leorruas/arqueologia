---
title: "Feedback negativo em recomendação"
type: "conceito"
status: "rascunho"
origem: "literatura + adaptação"
grau: "consolidado"
tags:
  - design/conceito
  - arqueologia
---

# Feedback negativo em recomendação

Quando uma pessoa não curte um post, o sistema ainda sabe muito pouco. Ela pode ter ignorado, não visto, não tido tempo ou simplesmente preferido não reagir. **Feedback negativo em recomendação** descreve sinais que indicam algum grau de rejeição, desinteresse ou desejo de reduzir exposições semelhantes.

A literatura de sistemas de recomendação distingue sinais positivos e negativos e mostra por que a ausência de uma ação não deve ser tratada automaticamente como rejeição. Gong e Zhu, por exemplo, separam feedback positivo, negativo e neutro em recomendação de notícias e tratam o ato de pular conteúdo como um sinal negativo implícito, enquanto outros comportamentos permanecem ambíguos.[^1]

## Rejeição explícita e rejeição inferida

Feedback negativo explícito ocorre quando a pessoa comunica diretamente uma preferência contrária: marcar “Não tenho interesse”, ocultar conteúdo, deixar de seguir ou usar um controle semelhante.

Feedback negativo implícito depende de interpretação do comportamento. Pular rapidamente, abandonar cedo ou reduzir o tempo de permanência pode sugerir desinteresse, mas também pode resultar de contexto, distração, duração do conteúdo ou exposição acidental. Por isso, sinais implícitos carregam mais ambiguidade.

Wang e colegas tratam feedback negativo como instrumento importante de controle do usuário e mostram, em sistemas sequenciais, que modelos podem ser treinados para responder de modo mais rápido à rejeição explícita e implícita.[^2] A questão de design deixa de ser apenas “o sistema consegue detectar que eu gostei?” e passa a incluir **quão rapidamente ele consegue aprender aquilo que eu não quero repetir**.

## No Instagram, rejeição também personaliza

O Instagram oferece controles explícitos de preferência. A Meta afirma que marcar uma recomendação como “Não tenho interesse” remove o post e reduz a sugestão de conteúdos semelhantes no futuro; também oferece palavras ocultas, revisão de contas seguidas e redefinição das recomendações.[^3][^4]

A documentação pública mais recente dos system cards do Instagram também foi reportada como incluindo previsões de abandono, como a probabilidade de pular um post no Feed. Como o conteúdo desses cartões é carregado dinamicamente e não ficou disponível diretamente nesta pesquisa, o vault trata esse ponto de 2026 como confirmação secundária, não como evidência primária independente.[^5]

No [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]], [[03 artefatos/Feed algoritmico do X Twitter|Feed algorítmico do X/Twitter]], feedback negativo completa o circuito de personalização: o sistema não aprende apenas com aproximação, mas também com afastamento. Isso torna visível uma assimetria importante. Curtir e compartilhar são escolhas explícitas; simplesmente passar adiante pode virar inferência sobre rejeição mesmo sem intenção deliberada de ensinar o sistema.

## No X, rejeição entra diretamente no score

O código aberto do Twitter em 2023 documentou previsões específicas de feedback negativo e denúncia no heavy ranker, combinadas ao score com coeficientes negativos. A documentação atual também afirma que usuários podem influenciar recomendações ao reportar conteúdo em que não têm interesse. Isso mostra uma implementação em que afastamento explícito participa diretamente da decisão de distribuição, embora os pesos públicos de 2023 não devam ser tratados como configuração atual.

## O escopo da recusa muda a função do gesto

O [[03 artefatos/Feed algoritmico do X Twitter|Feed algorítmico do X/Twitter]] permite distinguir controles que parecem semelhantes na interface, mas produzem efeitos diferentes. “Not interested” comunica uma preferência ao sistema de recomendação; silenciar termo ou conta aplica um filtro mais persistente; bloquear redefine a relação social e impede formas de interação; denunciar solicita julgamento institucional sobre possível violação.

A aba Following acrescenta uma recusa de outra ordem: em vez de fornecer feedback sobre candidatos individuais, a pessoa troca a regra de seleção da superfície e volta a uma timeline cronológica das contas seguidas.

Essa diferença sugere que feedback negativo deve registrar **escopo e destino do sinal**. Uma rejeição pode atualizar um modelo, aplicar um filtro local, alterar o grafo social ou iniciar moderação. O gesto visível de afastamento não informa sozinho qual infraestrutura será acionada.

## No TikTok, pular é comportamento e sinal

No [[03 artefatos/Feed Para Voce do TikTok|Feed Para Você do TikTok]], skip aparece explicitamente na documentação atual como uma das interações que podem influenciar recomendação. Isso torna o swipe particularmente ambíguo: ele é ao mesmo tempo comando de navegação para chegar ao próximo vídeo e dado sobre o vídeo abandonado.

O TikTok também oferece “Não tenho interesse”, que comunica rejeição de forma mais deliberada e faz o sistema mostrar menos conteúdos semelhantes. A diferença entre os dois gestos é importante. Skip pode ocorrer por desinteresse, falta de tempo, interrupção, duração ou porque a pessoa já entendeu o conteúdo; “Não tenho interesse” possui intenção comunicativa muito mais explícita.

Nesse artefato, portanto, rejeição implícita e explícita coexistem na mesma superfície: **deslizar ensina sem necessariamente querer ensinar; marcar desinteresse transforma a rejeição em instrução deliberada**.

## Ficha do conceito

| Campo | Registro |
|---|---|
| **Conceito** | Feedback negativo em recomendação |
| **Origem** | Literatura + adaptação |
| **Grau de consolidação** | Consolidado em sistemas de recomendação, com implementações e definições variadas |
| **Formulação associada a** | Literatura de feedback implícito, sequential recommendation e user control |
| **Área principal** | Sistemas de recomendação / IHC |
| **Distinção central** | Rejeição explícita ↔ rejeição inferida a partir de comportamento |
| **O que ajuda a explicar** | Como sistemas aprendem preferências negativas e reduzem exposições semelhantes |
| **O que não explica sozinho** | Motivo da rejeição, intenção consciente, qualidade do conteúdo ou satisfação geral |
| **Artefatos-chave** | [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]], [[03 artefatos/Feed algoritmico do X Twitter|Feed algorítmico do X/Twitter]], [[03 artefatos/Feed Para Voce do TikTok|Feed Para Você do TikTok]] |
| **Variáveis relacionadas** | [[02 variaveis/Tempo de permanência|Tempo de permanência]], [[02 variaveis/Afinidade inferida|Afinidade inferida]] |
| **Genealogias relacionadas** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]] |

## Referências

[^1]: Gong, Shansan; Zhu, Kenny Q. “Positive, Negative and Neutral: Modeling Implicit Feedback in Session-based News Recommendation”. *SIGIR ’22*, 2022, pp. 1185–1195. DOI: https://doi.org/10.1145/3477495.3532040

[^2]: Wang, Yueqi et al. “Learning from Negative User Feedback and Measuring Responsiveness for Sequential Recommenders”. *RecSys ’23*, 2023. DOI: https://doi.org/10.1145/3604915.3610244

[^3]: Meta. “Testing More Ways to Control What You See on Instagram”. 30 ago. 2022. https://about.fb.com/news/2022/08/testing-ways-to-control-what-you-see-on-instagram/

[^4]: Meta. “Reshape Your Instagram With a Recommendations Reset”. 19 nov. 2024. https://about.fb.com/news/2024/11/introducing-recommendations-reset-instagram/

[^5]: Aubrium Research Editorial. “The Minus Sign: What Instagram Scores Against You”. 2026. A fonte relata leitura dos system cards da Meta atualizados em junho de 2026 e reproduz previsões de skip no Feed e Feed Recommendations; usada aqui como fonte secundária para o estado atual dos cartões.
