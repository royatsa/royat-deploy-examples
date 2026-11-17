const express = require('express');
const fs = require('fs');
if (process.env.CRASH_ON_START === '1') { console.error('Crashing on purpose (CRASH_ON_START=1)'); process.exit(1); }
const version = fs.readFileSync(__dirname + '/VERSION', 'utf8').trim();
const app = express();
app.get('/health', (req, res) => res.send('ok'));
app.get('/', (req, res) => res.type('text').send(`royat-deploy-example node-express ${version}\n`));
const port = Number(process.env.PORT || 3000);
app.listen(port, '0.0.0.0', () => console.log(`listening on ${port}`));
