import fs from "node:fs";

const conceptPath = "01 conceitos/Genealogia de Futuros.md";
let concept = fs.readFileSync(conceptPath, "utf8");

const section = `## O que esta ideia herda da genealogia foucaultiana\n\nO nome não é neutro. A Genealogia de Futuros preserva uma inspiração metodológica em [[autores/Michel Foucault|Michel Foucault]], sobretudo na recusa de tratar o presente como resultado inevitável de uma origem pura. Na genealogia foucaultiana, interessam emergências, contingências, disputas e condições históricas que tornam certas práticas possíveis.\n\nA hipótese deste projeto desloca essa sensibilidade para a outra direção temporal. Se a genealogia histórica pergunta **quais contingências tornaram o presente possível?**, a Genealogia de Futuros pergunta **que novas condições de possibilidade o presente está produzindo?** O parentesco é metodológico, não autoral: Foucault não formulou “Genealogia de Futuros”, e o conceito continua registrado como \`hipótese-do-projeto\`.\n\nIsso impõe uma cautela adicional. Um futuro possível não deve ser narrado como consequência inevitável do artefato. A investigação deve procurar bifurcações, alternativas, resistências e condições que precisariam se estabilizar para que determinado descendente se tornasse plausível.\n\n`;

if (!concept.includes("## O que esta ideia herda da genealogia foucaultiana")) {
  const anchor = "## O futuro começa como promessa\n";
  if (!concept.includes(anchor)) throw new Error("Âncora da seção não encontrada em Genealogia de Futuros.md");
  concept = concept.replace(anchor, section + anchor);
}

const originRow = "| **Origem** | Hipótese do projeto |";
const referenceRow = "| **Referência metodológica** | [[autores/Michel Foucault|Michel Foucault]], especialmente *Nietzsche, a genealogia e a história* (1971); inspiração em contingência e condições de possibilidade, sem atribuir a ele a autoria do conceito |";
if (!concept.includes(referenceRow)) {
  if (!concept.includes(originRow)) throw new Error("Linha de origem não encontrada na ficha conceitual");
  concept = concept.replace(originRow, `${originRow}\n${referenceRow}`);
}

fs.writeFileSync(conceptPath, concept);

const logPath = "log.md";
let log = fs.readFileSync(logPath, "utf8");
const from = "O método passa a distinguir genealogia histórica inspirada por emergência, contingência, disputa e descontinuidade de parentescos funcionais, semióticos, comportamentais, institucionais ou comparativos. Atualização de";
const to = "O método passa a distinguir genealogia histórica inspirada por emergência, contingência, disputa e descontinuidade de parentescos funcionais, semióticos, comportamentais, institucionais ou comparativos. [[01 conceitos/Genealogia de Futuros|Genealogia de Futuros]] passa a registrar explicitamente essa inspiração, preservando sua procedência como hipótese do projeto e sem atribuir o conceito a Foucault. Atualização de";
if (!log.includes(to)) {
  if (!log.includes(from)) throw new Error("Entrada de log sobre Foucault não encontrada");
  log = log.replace(from, to);
  fs.writeFileSync(logPath, log);
}

console.log("Genealogia de Futuros conectada à inspiração foucaultiana.");
