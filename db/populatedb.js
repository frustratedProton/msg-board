#!/usr/bin/env node
// const messages = [
// 	{
// 		text: 'Hi there!',
// 		user: 'Amando',
// 		added: new Date(),
// 	},
// 	{
// 		text: 'Hello World!',
// 		user: 'Charles',
// 		added: new Date(),
// 	},
// ];

import pkg from 'pg';
const { Client } = pkg;

const args = process.argv.slice(2);

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    message VARCHAR (255) NOT NULL,
    username VARCHAR (255) NOT NULL,
    posting_date DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO messages (message, username)
VALUES 
    ('Hi there!', 'Amando'),
    ('Hello World!', 'Charles');
`;

(async () => {
	console.log('Seeding...');
	const client = new Client({
		connectionString: args[0] || process.env.DB_URL,
	});

	try {
		await client.connect();
		await client.query(SQL);
		console.log('Database seeded successfully.');
	} catch (err) {
		console.error('Error executing query', err.stack);
	} finally {
		await client.end();
		console.log('Done');
	}
})();
