import express from 'express';
import { getAllPosts, getNewForm, postNewMessage } from '../controllers/msgController.js';
const router = express.Router();

router.get('/', getAllPosts);

router.get('/new', getNewForm);

router.post('/new', postNewMessage)

export default router;