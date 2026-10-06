import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root = process.cwd();
export const hash = text => crypto.createHash('sha256').update(text).digest('hex');
function inside(base, relative) {
  const resolved = path.resolve(base, relative);
  if (!resolved.startsWith(base + path.sep)) throw new Error(`Caminho fora da raiz: ${relative}`);
  return resolved;
}
export function applyReview(name) {
  if (!process.argv.includes('--apply')) return false;
  const folder = path.join(root, '.review', name);
  const manifest = JSON.parse(fs.readFileSync(path.join(folder, 'manifest.json'), 'utf8'));
  if (manifest.script !== name || manifest.losses?.length) throw new Error('Proposta incompatível ou com perda de dados.');
  const changes = manifest.changes.map(item => {
    const file = inside(root, item.sourcePath);
    const candidate = fs.readFileSync(inside(folder, item.sourcePath), 'utf8');
    const before = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
    if ((before === null ? null : hash(before)) !== item.beforeHash) throw new Error(`Proposta obsoleta: ${item.sourcePath}`);
    if (hash(candidate) !== item.afterHash) throw new Error(`Proposta alterada: ${item.sourcePath}; gere novamente antes de aplicar.`);
    return {file, candidate};
  });
  for (const {file, candidate} of changes) { fs.mkdirSync(path.dirname(file), {recursive:true}); fs.writeFileSync(file, candidate); }
  console.log(`${name}: ${changes.length} alterações da proposta aplicadas. Atualize log e revise o diff antes do commit.`);
  return true;
}
export function propose(name, changes, losses = []) {
  const folder = path.join(root, '.review', name);
  fs.rmSync(folder, {recursive:true, force:true});
  fs.mkdirSync(folder, {recursive:true});
  const manifest = {script:name, generatedAt:new Date().toISOString(), losses, changes:[]};
  for (const item of changes) {
    const destination = inside(folder, item.sourcePath);
    fs.mkdirSync(path.dirname(destination), {recursive:true});
    fs.writeFileSync(destination, item.after);
    manifest.changes.push({sourcePath:item.sourcePath, beforeHash:item.before === null ? null : hash(item.before), afterHash:hash(item.after)});
  }
  fs.writeFileSync(path.join(folder, 'manifest.json'), JSON.stringify(manifest, null, 2));
  console.log(`${name}: ${changes.length} propostas em .review/${name}; originais preservados.`);
  if (losses.length) { console.error('Possível perda de dados:', losses); process.exitCode = 1; }
}
