---
title: "Atenção sustentada"
type: "variavel"
status: "rascunho"
eixo: "instável ↔ sustentada continuidade do foco ao longo do tempo"
tags:
  - design/variavel
  - arqueologia
---

# Atenção sustentada

Uma pessoa pode perceber imediatamente um sinal e ainda ser incapaz de continuar detectando sinais semelhantes depois de vinte, quarenta ou noventa minutos. **Atenção sustentada** compara a estabilidade com que o foco relevante para uma tarefa consegue ser mantido ao longo do tempo.

**Eixo:** instável ↔ sustentada continuidade do foco ao longo do tempo.

A variável é diferente de [[02 variaveis/Atencao|Atenção]], que no Arqueologia do Design mede quanta demanda de foco uma situação impõe. Uma tarefa pode exigir atenção intensa e breve; outra pode exigir pouca complexidade a cada instante, mas obrigar a pessoa a permanecer vigilante por horas. Também é diferente de [[01 conceitos/Acesso consciente|acesso consciente]]: perceber conscientemente um evento em um momento não garante que a capacidade de percebê-lo continue estável ao longo da sessão.

## O radar transformou cansaço em problema de design

A história experimental da atenção sustentada está fortemente ligada a um problema operacional da Segunda Guerra Mundial. Operadores de radar precisavam detectar eventos raros durante longos períodos em telas repetitivas. Norman Mackworth foi encarregado de investigar por que sinais importantes começavam a ser perdidos com o passar do tempo.

Seu experimento clássico de 1948 usou o que ficou conhecido como **Mackworth Clock Test**. Um ponteiro avançava repetidamente em pequenos passos ao redor de um mostrador; de vez em quando, dava um salto maior. A tarefa era pressionar um botão ao detectar esse evento raro. Ao longo de duas horas, a taxa de detecção caía, com uma perda importante já na primeira meia hora.[^1] Revisões contemporâneas descrevem o resultado como a primeira demonstração laboratorial do **vigilance decrement**, a queda de desempenho à medida que o tempo de monitoramento aumenta.[^2]

O experimento é arqueologicamente importante porque desloca o erro. Um operador que deixa passar um sinal depois de uma hora pode parecer simplesmente distraído ou pouco disciplinado. O teste mostra que a própria estrutura da tarefa produz condições previsíveis de falha. Longos períodos de monotonia, eventos raros e necessidade de monitoramento contínuo transformam vigilância em recurso que se degrada.

Décadas depois, tarefas como a Sustained Attention to Response Task, apresentada por Robertson e colegas em 1997, passaram a medir lapsos por outra lógica: a pessoa executa uma resposta repetitiva e precisa inibi-la diante de alvos raros. Erros nessa tarefa se relacionaram a falhas cotidianas de atenção e tornaram visível como automatização e perda momentânea de controle podem coexistir.[^3]

## Permanecer não significa continuar atento

Essa variável é especialmente importante para interfaces digitais porque duração é fácil de medir. [[02 variaveis/Tempo de permanência|Tempo de permanência]] registra quanto tempo uma superfície ou conteúdo continuou ativo; atenção sustentada pergunta se o foco relevante permaneceu estável durante esse intervalo.

As duas medidas podem divergir profundamente. Uma pessoa pode permanecer dez minutos numa página enquanto alterna mentalmente para outras tarefas. Pode assistir a um vídeo inteiro por autoplay. Pode continuar rolando um feed em estado altamente automático. Também pode passar pouco tempo num conteúdo e ainda processá-lo de forma muito concentrada.

O [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]] consegue observar duração e múltiplas ações, mas não mede diretamente a continuidade do foco consciente. O sistema pode usar tempo assistido como proxy útil de interesse sem possuir evidência de que a pessoa permaneceu atentamente engajada em cada instante.

## O foco falha em escalas diferentes

Atenção sustentada trata de minutos e horas, enquanto outros fenômenos mostram gargalos em escalas muito menores. O *attentional blink*, por exemplo, descreve dificuldade temporária para detectar um segundo alvo algumas centenas de milissegundos depois do primeiro. [[01 conceitos/Acesso consciente|Acesso consciente]] reúne essas falhas sem tratá-las como equivalentes.

Essa diferença de escala é útil para design. Uma notificação pode interromper um foco em segundos. Um vídeo pode exigir concentração contínua por minutos. Um operador pode precisar monitorar um painel por horas. Todos são problemas de atenção, mas a arquitetura temporal da exigência muda radicalmente.

A pergunta operacional desta variável é: **o desempenho relevante permanece estável enquanto a tarefa continua?**

## Condições que alteram sustentação

A literatura de vigilância mostra que o desempenho resulta da interação entre tarefa, ambiente e pessoa. Frequência e previsibilidade dos alvos, dificuldade perceptiva, duração da sessão, carga de trabalho, feedback e estado de alerta podem alterar a trajetória do desempenho.[^2]

Isso impede uma leitura moral simples. Um sistema que exige vigilância contínua transfere à pessoa a responsabilidade de manter um estado cognitivo que tende naturalmente a oscilar. Em contextos críticos, essa decisão pode ser tão importante quanto cor, tipografia ou layout.

Para interfaces de baixa consequência, perda de foco pode apenas encerrar uma sessão. Em sistemas médicos, industriais, de transporte ou segurança, ela pode produzir falhas graves. O mesmo princípio aparece em escalas diferentes: quando a continuidade da operação depende de atenção humana ininterrupta, **a atenção deixa de ser apenas comportamento do usuário e passa a ser componente da infraestrutura**.

## Como observar

Atenção sustentada pode ser observada por variação de acurácia, tempo de resposta, omissões, falsas respostas e mudanças de sensibilidade ao longo da tarefa. Em pesquisas experimentais, essas medidas são acompanhadas por blocos temporais para verificar se o desempenho se deteriora, se oscila ou se permanece estável.

Em produtos digitais, métricas de sessão não substituem essas medidas. Tempo total, scroll e watch time podem sugerir continuidade comportamental, mas não distinguem foco atento de automatismo, multitarefa ou ausência mental. Quando a distinção importa, testes comportamentais, tarefas secundárias, medidas fisiológicas ou métodos de eye tracking podem fornecer indícios adicionais, ainda sem oferecer leitura direta da experiência consciente.

## Ficha da variável

| Campo | Registro |
|---|---|
| **Variável** | Atenção sustentada |
| **Eixo** | Instável ↔ sustentada continuidade do foco ao longo do tempo |
| **Definição operacional** | Estabilidade do desempenho atencional relevante enquanto uma tarefa ou sequência continua |
| **Como observar** | Omissões, falsas respostas, acurácia, tempo de resposta e sensibilidade comparados ao longo do tempo |
| **O que não mede sozinho** | Acesso consciente em um instante, interesse, satisfação, compreensão ou valor percebido |
| **Trade-offs principais** | Sustentação permite monitoramento e continuidade; depender dela por longos períodos aumenta exposição a lapsos previsíveis |
| **Artefatos-chave** | [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]], [[03 artefatos/Entrevista longa|Entrevista longa]], sistemas de monitoramento contínuo |
| **Conceitos relacionados** | [[01 conceitos/Acesso consciente|Acesso consciente]], [[01 conceitos/Autonomia da Atencao|Autonomia da atenção]], [[01 conceitos/Economia da Atencao|Economia da atenção]] |
| **Genealogias relacionadas** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]] |

## Referências

[^1]: Mackworth, Norman H. “The Breakdown of Vigilance during Prolonged Visual Search”. *Quarterly Journal of Experimental Psychology*, 1(1), 1948, pp. 6–21. DOI: https://doi.org/10.1080/17470214808416738

[^2]: Guidetti, Oliver A.; Speelman, Craig P.; Bouhlas, Peter. “Mapping between Cognitive Theories and Psycho-physiological Models of Attention System Performance”. *Cerebral Cortex*, 33(18), 2023, pp. 10122–10138. A revisão reconstrói o Mackworth Clock Test e registra queda aproximada de 10% nas detecções corretas durante os primeiros 30 minutos do teste original. DOI: https://doi.org/10.1093/cercor/bhad271

[^3]: Robertson, Ian H.; Manly, Tom; Andrade, Jackie; Baddeley, Brian T.; Yiend, Jenny. “‘Oops!’: Performance Correlates of Everyday Attentional Failures in Traumatic Brain Injured and Normal Subjects”. *Neuropsychologia*, 35(6), 1997, pp. 747–758. DOI: https://doi.org/10.1016/S0028-3932(97)00015-8
