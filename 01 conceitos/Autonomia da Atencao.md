---
title: "Autonomia da atenção"
type: "conceito"
status: "publicado"
origem: "literatura + adaptação"
grau: "debatido"
tags:
  - design/conceito
  - arqueologia
---

# Autonomia da atenção

Duas interfaces podem exigir a mesma quantidade total de atenção e ainda assim produzir relações muito diferentes com ela. Em uma, a pessoa decide quando procurar a informação, consegue manter o foco escolhido e pode interromper a interação quando quiser. Na outra, o sistema define repetidamente o momento da convocação, torna difícil ignorá-la ou remove pontos em que seria necessário escolher continuar.

**Autonomia da atenção** é usada neste projeto como uma lente para investigar quanto autogoverno uma pessoa conserva sobre a orientação, manutenção e mudança do próprio foco. A formulação do vault é uma adaptação de debates já existentes sobre autonomia, agência, liberdade da atenção, interrupção e economia da atenção. Ela não deve ser tratada como sinônimo de “poucas notificações” nem como uma escala simples de controle de interface.

A referência conceitual mais direta é Kaisa Kärki. Em *Autonomy of Attention* (2022), ela distingue **agência da atenção**, **autonomia da atenção** e **liberdade da atenção**.[^1] Essa distinção corrige uma imprecisão da versão anterior desta nota, que reunia as três coisas sob o mesmo nome.

## Agência, autonomia e liberdade não são a mesma coisa

Na formulação de Kärki, **agência da atenção** diz respeito à capacidade de decidir de maneira não automática aquilo a que se presta atenção. **Autonomia da atenção** envolve uma camada reflexiva: desejos e compromissos de segunda ordem conseguem orientar essas decisões atencionais. **Liberdade da atenção** diz respeito à possibilidade de manter ou deslocar o foco sem permanecer fixado contra a própria vontade ou ser afastado repetidamente de um foco escolhido.[^1]

Para o design, as três dimensões podem ser observadas separadamente.

Um sistema pode preservar agência local, oferecendo botões e escolhas, mas ainda dificultar autonomia se sua arquitetura empurra repetidamente o usuário para ações que ele próprio preferiria não priorizar. Também pode preservar autonomia de intenção e reduzir liberdade momentânea, como ocorre quando uma interrupção indesejada captura o foco durante uma tarefa escolhida.

Essa distinção aproxima o conceito de [[01 conceitos/Autodeterminação|Autodeterminação]], mas não os torna equivalentes. Na Self-Determination Theory, autonomia significa agir com volição e endosso, e não simplesmente possuir muitas opções ou agir sem influência externa.[^2] Aplicada à atenção, essa cautela é importante: oferecer vinte configurações de notificação não garante autonomia se elas forem incompreensíveis, custosas de alterar ou incompatíveis com aquilo que a pessoa realmente quer fazer.

## O design governa condições de atenção, não apenas estímulos

Wayne Wu vincula atenção e agência ao tratar atenção como seleção para ação: atender envolve selecionar informação e orientar ação entre alternativas possíveis.[^3] Sebastian Watzl, por outra via, descreve atenção como estrutura de priorização da vida mental. Essas abordagens ajudam a mostrar por que uma interface não precisa literalmente “controlar a mente” para interferir na atenção. Basta alterar aquilo que ganha prioridade, aquilo que exige resposta e o custo de permanecer no curso anterior.[^4]

[[autores/Henri Bergson|Henri Bergson]] oferece um antecedente diferente. Sua análise do reconhecimento atento em *Matière et mémoire* ajuda a compreender atenção como uma relação entre percepção, memória, hábito e ação. Mas Bergson não fornece, por si só, uma teoria de autonomia atencional. Aqui ele ajuda a explicar **o que a atenção faz**; Kärki, Ryan e Deci, Wu e outros ajudam a perguntar **quem governa sua orientação e segundo quais fins**.

Essa diferença é central para o projeto. Autonomia da atenção não é uma propriedade isolada da mente. Ela depende também do ambiente projetado.

## Pull e push não são simplesmente bom e ruim

Uma forma inicial de observar autonomia da atenção é distinguir busca, convocação e persistência.

No [[03 artefatos/Archive|Archive]], uma mensagem pode sair do campo visual sem desaparecer. Isso permite ao usuário escolher quando recuperá-la. A atenção é parcialmente desacoplada da permanência da informação.

No [[03 artefatos/Post-it|Post-it]], ocorre quase o contrário. A nota é posicionada no ambiente justamente para interceptar o olhar futuro. Mas isso não significa automaticamente baixa autonomia: foi o próprio usuário quem pode ter projetado aquela futura interrupção para si mesmo. Esse caso é particularmente importante porque mostra que controle atencional também pode ser **externalizado**. Kärki chama atenção para a possibilidade de regular a própria atenção por práticas, habilidades e pelo desenho deliberado do ambiente, conjunto que ela relaciona ao conceito de *attention capital*.[^1]

O [[03 artefatos/Badge de notificacao|Badge de notificação]] cria um terceiro caso. Ele pode permanecer visível depois que o evento ocorreu, convertendo uma ocorrência passada em pendência perceptível. A hipótese de design aqui não é que todo badge “captura” continuamente a atenção, mas que sua persistência pode aumentar as oportunidades de uma pendência voltar a competir por prioridade.

Essa diferença mostra por que `pull = autonomia` e `push = captura` é simples demais. Uma notificação pode ser desejada; uma busca pode ser compulsiva; um lembrete persistente pode ter sido criado pelo próprio usuário. O conceito precisa observar **quem configurou o gatilho, de acordo com quais fins, quem pode recusá-lo e qual é o custo de fazê-lo**.

## Interrupção tem custo, mas custo não é o mesmo que falta de autonomia

A literatura de IHC sobre interrupções sustenta que deslocamentos de foco têm consequências mensuráveis. Estudos de Shamsi Iqbal e Eric Horvitz analisaram suspensão e retomada de tarefas em ambientes computacionais; Gloria Mark, Daniela Gudith e Ulrich Klocke encontraram que pessoas podem compensar interrupções trabalhando mais rapidamente, mas com maior estresse, frustração, pressão temporal e esforço.[^5][^6]

Esses trabalhos sustentam a importância do problema, mas não provam, sozinhos, perda de autonomia. Uma interrupção pode ser custosa e ainda assim desejada. A contribuição do conceito é acrescentar a pergunta normativa: **o deslocamento do foco corresponde aos fins que a própria pessoa endossa ou decorre principalmente das prioridades de outro ator do sistema?**

## O fim da página também é uma decisão sobre atenção

[[03 artefatos/Infinite Scroll|Infinite Scroll]] ajuda a revelar outra dimensão. Uma página tradicional oferece um ponto em que continuar exige nova ação. A rolagem infinita remove parte desse atrito e mantém conteúdo chegando à medida que a pessoa se desloca.

Isso não “prende” mecanicamente a atenção, mas altera a arquitetura de decisão. O sistema elimina um momento explícito em que seria necessário escolher continuar. Para a autonomia da atenção, o detalhe relevante não é apenas o tempo adicional de uso, mas o desaparecimento de uma oportunidade de reavaliar o próprio curso de ação.

A genealogia [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]] amplia essa investigação mostrando como pôster, controle remoto, Like, Pull to Refresh, feeds e badges reorganizam diferentes momentos da relação entre atenção, novidade, continuação e retorno.

Autonomia da atenção pergunta algo diferente da variável [[02 variaveis/Atencao|Atenção]]. A variável registra quanto foco uma situação exige ou mobiliza. Este conceito pergunta como agência, autonomia e liberdade são distribuídas na transição desse foco.

## Autonomia não é apenas um painel de configurações

Uma interface que respeita atenção pode oferecer instrumentos para silenciar, adiar, agrupar, escolher frequência, desligar recomendações, ocultar badges ou estabelecer horários. Esses mecanismos podem aumentar capacidade de recusa e de autogoverno.

Mas há um limite importante nessa leitura. Marin e colaboradores criticam abordagens da economia da atenção que tratam atenção apenas como um recurso individual que cada pessoa deveria controlar melhor. Eles propõem compreendê-la também como prática situada e socialmente moldada.[^7] Essa crítica impede que autonomia da atenção vire uma versão sofisticada de “o usuário que configure direito”.

O ambiente, os padrões sociais, as obrigações de trabalho, os defaults e o modelo econômico do serviço também estruturam aquilo que é realisticamente recusável. Em trabalhos posteriores, Kärki e Visa Kurki defendem justamente que a proteção da atenção frequentemente passa pela regulação do ambiente em que uma tarefa acontece, e não apenas pela força de vontade do indivíduo.[^8]

Por isso, autonomia da atenção se aproxima de poder mais do que de estética minimalista. Uma interface visualmente calma pode decidir quase tudo pelo usuário. Uma interface movimentada pode oferecer controle significativo. E um sistema pode oferecer formalmente um botão de desligar sem oferecer autonomia substantiva se o custo social ou funcional de usá-lo for alto demais.

## Uma lente operacional para o design

A formulação própria da Arqueologia do Design pode ser preservada se for tratada como **operacionalização de design**, não como definição filosófica universal.

Ao analisar um artefato, a pergunta “quem controla a atenção?” pode ser decomposta em quatro problemas:

1. **Iniciação:** quem decide que o foco deve mudar agora?
2. **Sustentação:** quem torna fácil ou difícil permanecer no foco escolhido?
3. **Saída:** existem pontos reais em que a pessoa pode encerrar, adiar ou ignorar a convocação?
4. **Alinhamento:** o comportamento atencional produzido corresponde aos fins que a pessoa endossa ou principalmente aos fins de outro ator do sistema?

Essa decomposição é uma contribuição do projeto. Ela deriva de tradições sobre agência, autonomia, liberdade da atenção, interrupção e arquitetura de escolha, mas não deve ser atribuída integralmente a nenhum dos autores citados.

James Williams oferece uma formulação normativa próxima ao defender a **liberdade da atenção** como problema político e moral central da economia da atenção.[^9] A força dessa conexão está em deslocar a pergunta de “quanto tempo de tela?” para “a infraestrutura informacional apoia ou compete com aquilo a que a pessoa quer dedicar sua vida?”.

A hipótese do projeto pode então ser formulada com mais precisão:

> **Um artefato reduz autonomia atencional quando reorganiza as condições de atenção de modo que se torne sistematicamente mais difícil ao usuário orientar, sustentar ou encerrar o foco de acordo com fins que ele próprio endossa.**

Isso não permite classificar automaticamente uma interface como ética ou manipulativa. Permite, porém, localizar onde ocorre a disputa.

## Ficha do conceito

| Campo | Registro |
|---|---|
| **Conceito** | Autonomia da atenção |
| **Origem** | Literatura + adaptação de design |
| **Grau de consolidação** | Debatido; há formulação filosófica explícita de *autonomy of attention*, mas a operacionalização usada neste projeto é própria |
| **Formulação associada a** | Kaisa Kärki; diálogo com Richard Ryan e Edward Deci, Wayne Wu, Sebastian Watzl, James Williams e estudos de interrupção em IHC |
| **Área principal** | Filosofia da atenção / design de interação / psicologia da atenção / ética da tecnologia |
| **Distinção central** | Demanda de atenção, agência atencional, autonomia atencional e liberdade da atenção não são a mesma coisa |
| **O que ajuda a explicar** | Quem inicia, sustenta e encerra deslocamentos de foco; se o ambiente favorece objetivos endossados pelo usuário ou prioridades de outros atores |
| **O que não explica sozinho** | Valor do conteúdo, quantidade total de atenção, vício, manipulação ou qualidade moral de uma interface |
| **Artefatos-chave** | [[03 artefatos/Archive|Archive]], [[03 artefatos/Infinite Scroll|Infinite Scroll]], [[03 artefatos/Post-it|Post-it]], [[03 artefatos/Badge de notificacao|Badge de notificação]] |
| **Conceitos relacionados** | [[01 conceitos/Autodeterminação|Autodeterminação]], [[01 conceitos/Economia da Atencao|Economia da atenção]] |
| **Variáveis relacionadas** | [[02 variaveis/Atencao|Atenção]], [[02 variaveis/Atrito Decisorio|Atrito decisório]] |
| **Genealogias relacionadas** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]] |
| **Cuidado conceitual** | A definição operacional do vault é mais ampla que a definição filosófica específica de Kärki; referências empíricas sobre interrupção demonstram custos, não demonstram por si mesmas perda de autonomia |

## Referências

[^1]: Kärki, Kaisa. “Autonomy of Attention”. In Vincent C. Müller (ed.), *Philosophy and Theory of Artificial Intelligence 2021*. Springer, 2022, pp. 39–55. DOI: 10.1007/978-3-031-09153-7_4. Kärki distingue agência, autonomia e liberdade da atenção e propõe ainda a ideia de *attention capital*.

[^2]: Ryan, Richard M.; Deci, Edward L. “Self-Regulation and the Problem of Human Autonomy: Does Psychology Need Choice, Self-Determination, and Will?”. *Journal of Personality*, 74(6), 2006, pp. 1557–1586. DOI: 10.1111/j.1467-6494.2006.00420.x. Útil para distinguir autonomia como autogoverno e volição de mera quantidade de opções ou independência.

[^3]: Wu, Wayne. *Movements of the Mind: A Theory of Attention, Intention and Action*. Oxford University Press, 2023. Em especial o capítulo “Attention and Attending”, que desenvolve a relação entre atenção, seleção, ação e controle agentivo.

[^4]: Watzl, Sebastian. *Structuring Mind: The Nature of Attention and How It Shapes Consciousness*. Oxford University Press, 2017. Trata atenção como estrutura de priorização, útil para compreender como ambientes reorganizam saliências sem determinar mecanicamente a ação.

[^5]: Iqbal, Shamsi T.; Horvitz, Eric. “Disruption and Recovery of Computing Tasks: Field Study, Analysis, and Directions”. *CHI 2007*, pp. 677–686. DOI: 10.1145/1240624.1240730.

[^6]: Mark, Gloria; Gudith, Daniela; Klocke, Ulrich. “The Cost of Interrupted Work: More Speed and Stress”. *CHI 2008*, pp. 107–110. DOI: 10.1145/1357054.1357072.

[^7]: Marin, Lavinia et al. “Attention as Practice”. *Global Philosophy*, 2023. O artigo critica a redução da atenção a recurso individual controlável e propõe tratá-la como prática ética, situada e social.

[^8]: Kärki, Kaisa; Kurki, Visa. “Does a Person Have a Right to Attention? Depends on What She is Doing”. *Philosophy & Technology*, 36, 86, 2023. DOI: 10.1007/s13347-023-00673-0. Os autores argumentam que proteger atenção frequentemente requer regular o ambiente da tarefa. Ver também Kärki e Kurki, “The Right to Concentrate”, *Neuroethics*, 19, 4, 2026.

[^9]: Williams, James. *Stand Out of Our Light: Freedom and Resistance in the Attention Economy*. Cambridge University Press, 2018. O livro formula “freedom of attention” como problema normativo da economia da atenção.