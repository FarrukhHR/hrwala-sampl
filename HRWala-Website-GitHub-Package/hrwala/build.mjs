import { cp, mkdir, rm, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('.', import.meta.url));
const output = join(root, 'dist');
const files = ['index.html', 'jobs.html', 'styles.css', 'content.js', 'app.js', 'assets', '.nojekyll'];
// Validate inputs before touching the generated output folder.
await Promise.all(files.map(file => access(join(root, file))));
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const file of files) {
  await cp(join(root, file), join(output, file), { recursive: true });
}
console.log('HR Wala build complete. Static output: dist/');
