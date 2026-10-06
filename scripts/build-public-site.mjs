import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd(), output=path.join(root,'.site');
const report=JSON.parse(fs.readFileSync(path.join(root,'publication-report.json'),'utf8'));
if(!report.passed) throw new Error('Publicação bloqueada; veja publication-report.json.');
fs.rmSync(output,{recursive:true,force:true});fs.mkdirSync(output,{recursive:true});
function copy(relative){const from=path.resolve(root,relative),to=path.resolve(output,relative);if(!from.startsWith(root+path.sep)||!to.startsWith(output+path.sep))throw new Error('Caminho inválido');fs.mkdirSync(path.dirname(to),{recursive:true});fs.copyFileSync(from,to);}
for(const entry of fs.readdirSync(root)) if(/\.(html|css|js)$/.test(entry))copy(entry);
copy('search-index.json');
const index=JSON.parse(fs.readFileSync(path.join(root,'search-index.json'),'utf8'));
for(const article of index.articles) if(article.publicar!==false)copy(article.sourcePath);
fs.writeFileSync(path.join(output,'.nojekyll'),'');
console.log(`Site filtrado: ${index.articles.length} notas públicas; governança, templates e relatórios fora do pacote.`);
