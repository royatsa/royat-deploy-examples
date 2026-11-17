import { readFileSync } from 'node:fs';
import path from 'node:path';
export const dynamic = 'force-dynamic';
export default function Page() {
  const version = readFileSync(path.join(process.cwd(), 'VERSION'), 'utf8').trim();
  return <main>royat-deploy-example nextjs {version}</main>;
}
