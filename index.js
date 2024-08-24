import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import msgRouter from './routes/msgRoute.js';


const app = express();
const PORT = process.env.APP_PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/', msgRouter);

app.get('/test', (req, res) => {
	res.send('Test route works!');
});

app.listen(PORT, () =>
	console.log(
		`Running at ${PORT} ${__filename} ${path.join(__dirname, 'views')}`
	)
);
