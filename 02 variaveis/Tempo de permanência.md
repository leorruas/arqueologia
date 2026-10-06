---
title: "Tempo de permanência"
type: "variavel"
status: "rascunho"
eixo: "curto ↔ longo tempo de permanência"
tags:
  - design/variavel
  - arqueologia
---

# Tempo de permanência

Uma pessoa pode abrir um conteúdo e sair em um segundo ou permanecer por minutos sem executar nenhuma outra ação. **Tempo de permanência** compara quanto tempo uma pessoa continua diante de um item, superfície ou sequência antes de abandoná-lo ou mudar de estado.

**Eixo:** curto ↔ longo tempo de permanência.

A variável é observável em medidas como dwell time, watch time e duração de sessão, dependendo do artefato. Sistemas de recomendação usam esse tipo de comportamento porque ele oferece um sinal contínuo mesmo quando a pessoa não curte, comenta ou compartilha. Trabalhos industriais de recomendação de vídeo tratam previsão de watch time como objetivo relevante de ranking, ao mesmo tempo em que mostram que duração do conteúdo e vieses de exposição precisam ser considerados.[^1]

## Permanecer não prova gostar

Tempo maior pode estar associado a interesse, dificuldade, distração, obrigação ou simples reprodução automática. Ele também não mede diretamente [[02 variaveis/Atencao|atenção]]: um conteúdo pode continuar aberto enquanto o foco está em outro lugar.

No [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]], [[03 artefatos/Feed algoritmico do X Twitter|Feed algorítmico do X/Twitter]], a documentação da Meta descreve previsões sobre permanência e visualização entre os sinais usados na ordenação.[^2] O interesse arqueológico está na tradução: duração comportamental vira evidência probabilística de relevância futura.

No X/Twitter, o código aberto de 2023 incluía previsões de permanência prolongada em conversas e watch time de vídeo, e o Home Mixer preserva parâmetros relacionados a dwell e video watch time. Isso mostra que duração pode participar do ranking sem ser reduzida a like ou reply.

Por isso, a variável deve ser lida junto do [[01 conceitos/Engajamento em plataformas digitais|engajamento em plataformas digitais]]. Permanência é um componente observável do comportamento; satisfação continua sendo uma inferência.

## Como observar sem confundir

A medida pode ser tempo absoluto, proporção assistida, conclusão de conteúdo ou tempo até o próximo gesto. Comparações precisam controlar características como duração total do vídeo ou tamanho do texto, porque conteúdos mais longos oferecem mais oportunidade de acumular tempo.

Em interfaces de continuidade, o [[03 artefatos/Infinite Scroll|Infinite Scroll]] e o [[03 artefatos/Feed de Videos Curtos|Feed de vídeos curtos]] também podem alterar duração de sessão ao reduzir o custo de chegar ao próximo item. O tempo observado resulta, portanto, da combinação entre conteúdo, interface, contexto e decisão do usuário.

## Ficha da variável

| Campo | Registro |
|---|---|
| **Variável** | Tempo de permanência |
| **Eixo** | Curto ↔ longo tempo de permanência |
| **Definição operacional** | Duração observável da permanência de uma pessoa diante de um item, superfície ou sequência |
| **Como observar** | Dwell time, watch time, proporção assistida, conclusão e duração de sessão |
| **O que não mede sozinho** | Interesse, satisfação, atenção consciente ou qualidade do conteúdo |
| **Trade-offs principais** | Métrica contínua e abundante, mas sensível à duração do conteúdo, autoplay, contexto e exposição |
| **Artefatos-chave** | [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]] |
| **Conceitos relacionados** | [[01 conceitos/Engajamento em plataformas digitais|Engajamento em plataformas digitais]], [[01 conceitos/Economia da Atencao|Economia da atenção]] |
| **Genealogias relacionadas** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]] |

## Referências

[^1]: Lin, Xiao et al. “Tree based Progressive Regression Model for Watch-Time Prediction in Short-video Recommendation”. *Proceedings of the 29th ACM SIGKDD Conference on Knowledge Discovery and Data Mining*, 2023. O trabalho trata watch time como sinal central de recomendação e discute vieses ligados à duração.

[^2]: Meta AI. “Instagram Feed Ranking System Card”. 23 fev. 2022. https://ai.meta.com/tools/system-cards/instagram-feed-ranking/
