import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import msgRouter from './routes/msgRoute.js';
const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', msgRouter);

app.listen(PORT, () => console.log(`Running at ${PORT}`));
