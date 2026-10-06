import fs from 'node:fs';
import path from 'node:path';
import {artifactFields,normalizeField,schemaVersion} from './artifact-schema.mjs';
const root=process.cwd(), issues=[];
const read=rel=>fs.readFileSync(path.join(root,rel),'utf8');
function add(kind,sourcePath,detail){issues.push({kind,sourcePath,detail});}
function fields(text){return [...text.matchAll(/^\s*\|\s*(.+?)\s*\|/gm)].map(m=>normalizeField(m[1])).filter(x=>x!=='campo'&&!/^:?-+:?$/.test(x));}
const template=fields(read('templates/template-artefato.md'));
const expected=artifactFields.map(([field])=>normalizeField(field));
if (template.length!==33||expected.length!==33||template.some((field,i)=>field!==expected[i])) add('schema-drift','templates/template-artefato.md','Template e schema compartilhado devem concordar nos 33 campos, na mesma ordem.');
const editorial=JSON.parse(read('editorial-report.json'));
if (editorial.schemaVersion !== schemaVersion) add('stale-schema-report','editorial-report.json','Relatório deve usar a versão atual do schema.');
for (const file of editorial.legacyArtifactFiles||[]) for (const item of file.items) if (/Ficha arqueológica/i.test(item.text)) add('invalid-sheet',file.sourcePath,item.text);
const links=JSON.parse(read('link-report.json'));
for (const file of links.files||[]) for (const target of file.unresolved||[]) add('unresolved-link',file.sourcePath,target);
for (const file of links.ambiguousFiles||[]) for (const item of file.ambiguous) add('ambiguous-link',file.sourcePath,`${item.target}: ${item.candidates.join(', ')}`);
// A candidate with detected loss is never eligible for application/publication.
const reviewRoot=path.join(root,'.review');
if(fs.existsSync(reviewRoot)) for(const name of fs.readdirSync(reviewRoot)) {
 const manifestPath=path.join(reviewRoot,name,'manifest.json');
 if(fs.existsSync(manifestPath)) for(const loss of JSON.parse(fs.readFileSync(manifestPath,'utf8')).losses||[]) add('data-loss',loss.sourcePath,loss.detail);
}
const report={generatedAt:new Date().toISOString(),passed:issues.length===0,blockingCount:issues.length,issues,warnings:{capitalization:editorial.candidateCount,network:JSON.parse(read('network-report.json')).issueCount}};
fs.writeFileSync(path.join(root,'publication-report.json'),JSON.stringify(report,null,2));
console.log(`Publicação: ${issues.length} bloqueios; ${report.warnings.capitalization} candidatos editoriais e ${report.warnings.network} avisos de rede.`);
if(issues.length)process.exitCode=1;
