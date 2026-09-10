import fs from "node:fs";
import path from "node:path";

const arquivo = path.join(process.cwd(), "log.md");
const marker = "**Auditoria de propagação e consistência**";
const markdown = fs.readFileSync(arquivo, "utf8");

if (markdown.includes(marker)) {
  console.log("Registro da auditoria já existe no log.");
  process.exit(0);
}

const heading = "## [2026-09-10]";
const pos = markdown.indexOf(heading);
if (pos < 0) throw new Error("Heading de 2026-09-10 não encontrado no log.md");

const insertAt = pos + heading.length;
const entrada = `\n- ${marker}: Auditoria do vault após a formalização do protocolo de propagação. Criação de \`scripts/audit-network.mjs\` para detectar ausência em índices, notas órfãs, drift entre fichas e tipos de design, reciprocidade estrutural e títulos duplicados; integração ao workflow automático; expansão da auditoria editorial para a ficha arqueológica de 26 campos. Sincronização dos índices de artefatos, autores e empresas; atualização das notas de Design de Interface, Produto, Serviços, Gráfico, Tipografia e IA; propagação de relações nas genealogias de permanência, limiares, coordenação, reversibilidade e compressão do esforço. Correção semântica dos perfis de Barry Schwartz e Robert Adler, com nova regra de propagação semântica em [[me|me.md]]. Migração automática de fichas legadas, remoção da duplicata \`Espaço entre palavras.md\`, integração de \`Da parede ao interlocutor\` à home e limpeza da inbox já processada.\n`;

fs.writeFileSync(arquivo, markdown.slice(0, insertAt) + entrada + markdown.slice(insertAt));
console.log("Registro da auditoria inserido no log.md.");
