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

export const getAllPosts = (req, res) => {
	res.render('index', { title: 'Messages', messages });
};

export const getNewForm = (req, res) => {
	res.render('new', { title: 'New Message', error: req.query.error });
};

export const postNewMessage = (req, res) => {
	const { user, text } = req.body;
	if (user && text) {
		messages.push({
			text,
			user,
			added: new Date(),
		});
		res.redirect('/');
	} else {
		res.redirect('/new?error=Please provide both user and message text.');
	}
};
