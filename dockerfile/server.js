const http = require('http');
const fs = require('fs');
if (process.env.CRASH_ON_START === '1') { console.error('Crashing on purpose (CRASH_ON_START=1)'); process.exit(1); }
const version = fs.readFileSync(__dirname + '/VERSION', 'utf8').trim();
const port = Number(process.env.PORT || 3000);
http.createServer((req, res) => {
  if (req.url === '/health') { res.writeHead(200); return res.end('ok'); }
  // Test switch for plan limits: with ALLOW_ALLOC=1, /alloc?mb=N holds N MB of memory.
  if (req.url.startsWith('/alloc') && process.env.ALLOW_ALLOC === '1') {
    const mb = Number(new URL(req.url, 'http://x').searchParams.get('mb') || 0);
    global.hold = [];
    for (let i = 0; i < mb; i++) global.hold.push(Buffer.alloc(1024 * 1024, 1));
    res.writeHead(200); return res.end(`holding ${mb} MB\n`);
  }
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end(`royat-deploy-example dockerfile ${version}\n`);
}).listen(port, '0.0.0.0', () => console.log(`listening on ${port}`));
