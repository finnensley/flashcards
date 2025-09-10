//Server with Node.js/Express, will work the same as Go server

import express from 'express';
import pkg from 'pg';
import cors from 'cors';

const { Pool } = pkg;
const app = express();
const port = 5000; //choose a port for backend

app.use(cors());
app.use(express.json()); // to parse JSON request bodies

//Database connection pool
const pool = new Pool({
    user: 'finnensley',
    host: 'localhost',
    database: 'postgres',
    password: 'Finnigan2020!',
    port: 5432, //Default PostgreSQL port
});

// API endpoint to fetch data

app.get('/questions', async (req, res) => {
  try {
    const questions = await pool.query('SELECT * FROM flashcard_questions');
    res.json({ questions: questions.rows });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

app.get('/answers', async (req, res) => {
  try {
    const answers = await pool.query('SELECT * FROM flashcard_answer_options');
    res.json({ answers: answers.rows });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

//Start the server
app.listen(port, () => {
    console.log(`Backend server running on port ${port}`);
})

// In termainl: 
// node server.js