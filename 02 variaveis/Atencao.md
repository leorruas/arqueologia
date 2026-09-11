---
title: "Atenção"
type: "variavel"
status: "publicado"
eixo: "baixa ↔ alta demanda de foco consciente"
tags:
  - design/variavel
  - arqueologia
---

# Atenção

Uma interface pode quase desaparecer enquanto realizamos uma tarefa, ou pode exigir que acompanhemos continuamente sinais, mudanças e decisões. **Atenção** é a variável usada neste projeto para comparar quanta demanda de foco consciente uma situação de uso coloca sobre a pessoa.

**Eixo:** baixa demanda de foco consciente ↔ alta demanda de foco consciente.

O eixo não mede “engajamento” como sinônimo de qualidade nem tempo de tela como medida suficiente. Uma tarefa pode durar horas com baixa exigência de monitoramento contínuo; outra pode durar segundos e exigir concentração intensa.

## Capturar atenção e exigir atenção não são a mesma coisa

Um alerta sonoro pode capturar o foco por um instante. Um formulário complexo pode não interromper ninguém e ainda exigir grande esforço atencional para ser preenchido. Por isso, a variável precisa observar **o quanto a tarefa depende de atenção consciente para continuar funcionando**, e não apenas se algo chama o olhar.

A literatura psicológica há muito trata atenção como capacidade limitada de processamento. Kahneman, por exemplo, modelou atenção como esforço distribuído entre atividades concorrentes.[^1] Aqui, usamos essa tradição apenas como antecedente para um eixo de comparação entre artefatos.

Henri Bergson oferece uma lente diferente. Em *Matière et mémoire* (1896), sobretudo na discussão do reconhecimento atento, atenção não aparece apenas como aumento de intensidade perceptiva. Bergson distingue o reconhecimento automático, que prolonga rapidamente a percepção em uma resposta útil, do reconhecimento atento, no qual a ação deixa de seguir imediatamente o hábito, retorna ao objeto e permite que imagens de memória enriqueçam aquilo que está sendo percebido.[^2] Essa diferença ajuda a perguntar não apenas **quanto** foco uma situação exige, mas **o que passa a aparecer quando interrompemos uma resposta automática para examinar de novo**.

Para o design, isso sugere uma segunda dimensão de investigação. Um artefato pode mudar a quantidade de atenção exigida e também mudar aquilo que se torna disponível à atenção. O [[03 artefatos/Espelho|espelho]], por exemplo, transforma o próprio corpo em objeto continuamente reinspecionável: olhar, corrigir e olhar outra vez. Essa leitura bergsoniana não substitui o eixo operacional desta variável; ela acrescenta uma lente sobre percepção, memória, hábito e possibilidade de ação.

[[03 artefatos/Infinite Scroll|Infinite Scroll]] pode prolongar uma sequência de atenção ao reduzir pontos explícitos de parada, mas isso não significa que “maximize atenção” de maneira automática. O efeito depende do conteúdo, do contexto e do comportamento do usuário.

O [[03 artefatos/Botao Like|Botão Like]] pode direcionar atenção para métricas sociais quando essas métricas se tornam relevantes para a pessoa. Já [[03 artefatos/Pull to Refresh|Pull to Refresh]] concentra momentaneamente o foco na atualização e no resultado que aparece, mas a relação com retenção prolongada é uma hipótese comportamental, não propriedade inevitável do gesto.

## Reduzir demanda pode liberar foco para outra coisa

O [[03 artefatos/Grid|Grid]] é interessante porque pode tornar certas relações espaciais previsíveis. Quando títulos, colunas e alinhamentos seguem um sistema reconhecível, parte da atenção que seria usada para decodificar a estrutura pode ser transferida ao conteúdo.

[[03 artefatos/Archive|Archive]] pode produzir efeito semelhante em outro domínio. Ao permitir que mensagens saiam do primeiro plano sem desaparecer, ele reduz a necessidade de manter tudo simultaneamente visível para garantir recuperabilidade.

Isso não significa que os artefatos “limpem a mente”. Eles redistribuem trabalho atencional. O usuário pode gastar menos foco organizando e mais procurando depois; pode prestar menos atenção à estrutura e mais ao conteúdo.

Essa ideia conecta a variável à [[01 conceitos/Autonomia da Atencao|Autonomia da atenção]]. As duas não são equivalentes. **Atenção** pergunta quanto foco é exigido ou mobilizado. **Autonomia da atenção** investiga como agência, autonomia e liberdade se distribuem na orientação, manutenção e mudança desse foco, apoiando-se especialmente na distinção formulada por [[autores/Kaisa Kärki|Kaisa Kärki]].

## Alta atenção pode ser desejável

Baixa demanda atencional não é objetivo universal.

Ler uma obra difícil, operar equipamento crítico ou revisar uma decisão importante pode exigir concentração intensa por bons motivos. Um sistema que tenta “facilitar” tudo pode retirar sinais necessários para julgamento.

Da mesma forma, interfaces que automatizam decisões podem reduzir demanda local de atenção e aumentar dependência de processos que o usuário deixa de observar.

Por isso, esta variável deve ser lida junto de [[02 variaveis/Custo do Erro|Custo do erro]] e [[02 variaveis/Legitimidade Decisoria|Legitimidade decisória]]. Quanto maior a consequência de uma decisão ou menor sua auditabilidade, menos seguro é tratar atenção apenas como custo a eliminar.

## Como observar

Atenção não é diretamente visível, mas alguns indícios permitem comparar situações: necessidade de monitoramento contínuo, frequência de interrupções, quantidade de elementos concorrentes, tempo até perceber uma mudança, erros quando a pessoa divide o foco e necessidade de retornar mentalmente à tarefa depois de uma interrupção.

Métricas como tempo de permanência podem ajudar em certos contextos, mas não medem sozinhas atenção consciente. Permanecer numa tela não prova concentração; sair rapidamente não prova desinteresse.

A pergunta arqueológica mais útil é: **o que deixa de funcionar quando a pessoa deixa de prestar atenção por alguns segundos?** A resposta revela quanto o artefato depende do foco humano para sustentar sua operação.

## Ficha da variável

| Campo | Registro |
|---|---|
| **Variável** | Atenção |
| **Eixo** | Baixa ↔ alta demanda de foco consciente |
| **Definição operacional** | Quantidade e continuidade de foco consciente exigidas ou mobilizadas por uma tarefa, elemento ou ambiente |
| **Como observar** | Monitoramento necessário, interrupções, competição entre estímulos, erros sob atenção dividida e custo de retomada |
| **O que não mede sozinho** | Engajamento, satisfação, valor do conteúdo ou autonomia sobre o foco |
| **Trade-offs principais** | Reduzir demanda pode liberar capacidade; também pode ocultar processos que mereciam atenção |
| **Artefatos-chave** | [[03 artefatos/Infinite Scroll|Infinite Scroll]], [[03 artefatos/Botao Like|Botão Like]], [[03 artefatos/Archive|Archive]], [[03 artefatos/Grid|Grid]], [[03 artefatos/Espelho|Espelho]] |
| **Conceitos relacionados** | [[01 conceitos/Autonomia da Atencao|Autonomia da atenção]], [[01 conceitos/Economia da Atencao|Economia da atenção]] |
| **Genealogias relacionadas** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]] |

## Referências

[^1]: Kahneman, Daniel. *Attention and Effort*. Prentice-Hall, 1973. Usado como antecedente para a ideia de capacidade atencional limitada, não como origem desta operacionalização.

[^2]: Bergson, Henri. *Matière et mémoire: essai sur la relation du corps à l'esprit*. Paris: Félix Alcan, 1896. Ver especialmente o capítulo II, sobre reconhecimento das imagens e reconhecimento atento. Na tradução inglesa de Nancy Margaret Paul e W. Scott Palmer, *Matter and Memory* (London: George Allen & Co., 1911), a discussão de reconhecimento e atenção aparece especialmente nas pp. 118–125.