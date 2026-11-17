import { readFileSync } from 'node:fs';
export default { define: { __VERSION__: JSON.stringify(readFileSync('./VERSION', 'utf8').trim()) } };
