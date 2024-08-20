const messages = [
	{
		text: 'Hi there!',
		user: 'Amando',
		added: new Date(),
	},
	{
		text: 'Hello World!',
		user: 'Charles',
		added: new Date(),
	},
];

export const getMessages = (req, res) => {
	res.render('index', { title: 'Mini Messageboard', messages });
};

export const getNewForm = (req, res) => {
	res.render('form', { title: 'New Messages', messages });
};

export const addMessage = (req, res) => {
	const { messageUser, messageText } = req.body;
	messages.push({ text: messageText, user: messageUser, added: new Date() });
	res.redirect('/');
};
