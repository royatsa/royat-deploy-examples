const http = require('http');
const fs = require('fs');
if (process.env.CRASH_ON_START === '1') { console.error('Crashing on purpose (CRASH_ON_START=1)'); process.exit(1); }
const version = fs.readFileSync(__dirname + '/VERSION', 'utf8').trim();
const port = Number(process.env.PORT || 3000);
http.createServer((req, res) => {
  if (req.url === '/health') { res.writeHead(200); return res.end('ok'); }
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end(`royat-deploy-example dockerfile ${version}\n`);
}).listen(port, '0.0.0.0', () => console.log(`listening on ${port}`));
