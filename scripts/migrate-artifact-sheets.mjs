import fs from 'node:fs';
import path from 'node:path';
import {artifactFields, normalizeField} from './artifact-schema.mjs';
import {applyReview, propose} from './review-changes.mjs';
if (applyReview('migrate-artifact-sheets')) process.exit(0);
const root=process.cwd(), changes=[], losses=[];
function list(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?list(path.join(dir,e.name)):e.name.endsWith('.md')?[path.join(dir,e.name)]:[]);
}
for (const file of list(path.join(root,'03 artefatos'))) {
  const before=fs.readFileSync(file,'utf8'), sourcePath=path.relative(root,file);
  const headings=[...before.matchAll(/^##\s+(Ficha arqueológica|Ficha resumo)[ \t]*$/gmi)];
  if (headings.length!==1) { losses.push({sourcePath,detail:'Ficha ausente ou duplicada; exige revisão manual.'}); continue; }
  const heading=headings[0], start=heading.index+heading[0].length;
  const next=/\n##\s+/.exec(before.slice(start));
  const end=next?start+next.index:before.length;
  const body=before.slice(start,end), rows=[...body.matchAll(/^[ \t]*\|[ \t]*(.+?)[ \t]*\|[ \t]*(.*?)[ \t]*\|[ \t]*$/gm)];
  if (!rows.length) { losses.push({sourcePath,detail:'Ficha sem tabela legível; original preservado.'}); continue; }
  const values=new Map(), labels=new Map();
  for (const row of rows) {
    const key=normalizeField(row[1]);
    if (key==='campo'||/^:?-+:?$/.test(key)) continue;
    if (values.has(key)) { losses.push({sourcePath,detail:`Campo duplicado: ${row[1]}`}); }
    values.set(key,row[2]); labels.set(key,row[1].replace(/\*\*/g,'').trim());
  }
  // Earlier workflows relocated these seven records into consequences. Recover only
  // the complete, ordered labeled block; keep its original text as historical evidence.
  const archived = values.get(normalizeField('Consequências inesperadas')) || '';
  const marker = 'Registros adicionais preservados da ficha anterior: ';
  const sevenFields = ['Promessa','Futuro prometido','Futuro produzido','Quando a promessa virou expectativa','Futuro tornado mais provável','Descendentes possíveis','Novo problema produzido pelo sucesso'];
  const archivedLabels = sevenFields.map(normalizeField);
  const tail = archived.includes(marker) ? archived.slice(archived.indexOf(marker) + marker.length) : '';
  if (tail.startsWith(archivedLabels[0] + ': ')) {
    const positions = archivedLabels.map((label,i)=>i===0?0:tail.indexOf('; '+label+': '));
    if (positions.every((pos,i)=>pos>=0 && (i===0||pos>positions[i-1]))) {
      for (let i=0;i<archivedLabels.length;i++) {
        const begin=positions[i]+(i===0?0:2)+archivedLabels[i].length+2;
        const finish=i+1<archivedLabels.length?positions[i+1]:tail.length;
        const current=values.get(archivedLabels[i]);
        if (!current || current==='Ainda não explicitado.') values.set(archivedLabels[i],tail.slice(begin,finish));
      }
    }
  }
  const consumed=new Set(), table=['| Campo | Registro |','|---|---|'];
  for (const [field,aliases] of artifactFields) {
    const keys=[...new Set([field,...aliases].map(normalizeField))].filter(key=>values.has(key));
    keys.forEach(key=>consumed.add(key));
    const existing=keys.map(key=>values.get(key));
    // Preserve every existing value, including placeholders and concurrent aliases.
    table.push(`| **${field}** | ${existing.length?existing.join(' / '):'Ainda não explicitado.'} |`);
  }
  for (const [key,value] of values) if (!consumed.has(key)) table.push(`| **${labels.get(key)}** | ${value} |`);
  const first=rows[0].index,last=rows.at(-1),finish=last.index+last[0].length;
  const originalBlock=body.slice(first,finish);
  if (originalBlock.split(/\r?\n/).some(line=>line.trim()&&!/^\s*\|/.test(line))) { losses.push({sourcePath,detail:'Texto entre linhas da tabela; revisão manual necessária.'}); continue; }
  const newBlock=table.join('\n');
  for (const value of values.values()) if (!newBlock.includes(value)) losses.push({sourcePath,detail:'Valor original não preservado.'});
  const after=before.slice(0,heading.index)+'## Ficha arqueológica'+body.slice(0,first)+newBlock+body.slice(finish)+before.slice(end);
  if (after!==before) changes.push({sourcePath,before,after});
}
propose('migrate-artifact-sheets',changes,losses);
