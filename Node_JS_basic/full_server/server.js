import express from 'express';
import r from './routes/index';
import DebugHolberton from '../debug';

const d = new DebugHolberton();
d.fetch();

const app = express();
app.use('/', r);
app.listen(1245, () => console.log('Serveur active on http://localhost:1245'));

export default app;
