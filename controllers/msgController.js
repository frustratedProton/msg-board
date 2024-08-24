import * as db from '../db/queries.js';

export const getMessages = async (req, res) => {
	const messages  = await db.getAllPosts();
	// console.log(messages)
	res.render('index', { title: 'Mini Messageboard', messages });
};

export const getNewForm = (req, res) => {
	res.render('form', { title: 'New Messages' });
};

export const addMessage = async (req, res) => {
	const { messageUser, messageText } = req.body;
	// messages.push({ text: messageText, user: messageUser, added: new Date() });
	await db.addNewPost(messageText, messageUser);
	res.redirect('/');
};
