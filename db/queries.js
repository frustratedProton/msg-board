import pool from './pool.js';

export const getAllPosts = async () => {
	const { rows } = await pool.query('SELECT * FROM messages');
	// console.log(rows);
	return rows;
};

export const addNewPost = async (message, username) => {
	await pool.query(
		'INSERT INTO messages (message, username) VALUES ($1, $2)',
		[message, username]
	);
};
