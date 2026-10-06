import fs from 'node:fs';
import path from 'node:path';
import {applyReview, propose} from './review-changes.mjs';
if (applyReview('consolidate-unresolved-links')) process.exit(0);
const root=process.cwd(), reportPath=path.join(root,'link-report.json'), sourcePath='Pistas de pesquisa.md';
if (!fs.existsSync(reportPath)) throw new Error('Gere link-report.json antes de detectar pistas.');
const report=JSON.parse(fs.readFileSync(reportPath,'utf8'));
const file=path.join(root,sourcePath), before=fs.existsSync(file)?fs.readFileSync(file,'utf8'):null;
let after=before??'---\ntitle: "Pistas de pesquisa"\ntype: "governanca"\nstatus: "ativo"\npublicar: false\n---\n\n# Pistas de pesquisa\n';
const start='<!-- PISTAS-AUTOMATICAS:INICIO -->', end='<!-- PISTAS-AUTOMATICAS:FIM -->';
const startAt=after.indexOf(start),endAt=after.indexOf(end);
if ((startAt<0)!==(endAt<0)||endAt<startAt) throw new Error('Delimitadores de pistas inconsistentes; original preservado.');
const candidates=[];
for (const item of report.files||[]) for (const target of item.unresolved||[]) {
  const id=JSON.stringify([target,item.sourcePath]);
  const marker=`<!-- pista:${Buffer.from(id).toString('base64url')} -->`;
  // Historical resolved/promoted records retain their marker: do not reopen them.
  if (after.includes(marker)) continue;
  const row=`- **${target.split('/').pop()}**: destino \`${target}\`; origem \`${item.sourcePath}\`; estado: pendente. ${marker}`;
  if (after.includes(`**${target.split('/').pop()}**`)&&after.includes(`\`${item.sourcePath}\``)) continue;
  candidates.push(row);
}
if (candidates.length) {
  const block=candidates.join('\n')+'\n';
  if (endAt>=0) after=after.slice(0,endAt)+block+after.slice(endAt);
  else after+='\n'+start+'\n## Pistas detectadas automaticamente\n\nRegistro acumulativo. Promoção, fusão ou descarte exigem decisão explícita e justificativa; preserve o histórico e as origens.\n\n'+block+end+'\n';
}
// The existing Markdown is retained byte-for-byte, with insertions only.
propose('consolidate-unresolved-links',after!==before?[{sourcePath,before,after}]:[]);
