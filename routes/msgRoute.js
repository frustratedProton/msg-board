import express from 'express';
import {
	addMessage,
	getMessages,
	getNewForm,
} from '../controllers/msgController.js';

const router = express.Router();

router.get('/', (req, res) => {
	getMessages(req, res);
});


router.get('/new', (req, res) => {
	getNewForm(req, res);
});

router.post('/new', (req, res) => {
	addMessage(req, res);
});

export default router;
