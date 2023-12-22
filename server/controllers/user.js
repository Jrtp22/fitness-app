const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

const pool = new Pool({
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": process.env.DB_DATABASE,
  "host": "127.0.0.1",
  "dialect": "postgres"
});

router.post('/', async (req, res) => {
  try {
    const { rows } = await pool.query('INSERT INTO users (column1, column2, ...) VALUES ($1, $2, ...) RETURNING *', [req.body.column1, req.body.column2, ...]);
    const user = rows[0];
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM users');
    const users = rows;
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
