require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE_NAME,
  waitForConnections: process.env.MYSQL_WAIT_FOR_CONNECTIONS,
  connectionLimit: process.env.MYSQL_CONNECTION_LIMIT,
  queueLimit: process.env.MYSQL_QUEUE_LIMIT,
});

app.use(cors());
app.use(express.json());

const PORT = process.env.MYSQL_PORT || 3001;

app.get('/getCards', (_req, res) => {
  let query = `SELECT * FROM Games`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else res.send(result);
  });
});
console.log(process.env.MYSQL_PORT);
app.post('/register', (req, res) => {
  const { name, cost, category } = req.body;
  let query = `INSERT INTO Games (name, cost, category ) VALUES (?, ?, ?)`;

  db.query(query, [name, cost, category], (err, result) => {
    if (err) {
      console.log(err);
    } else res.send(result);
  });
});

app.put('/edit', (req, res) => {
  const { id, name, cost, category } = req.body;
  const query = `UPDATE Games SET name = ?, cost = ?, category = ? WHERE id = ?`;
  db.query(query, [name, cost, category, id], (err, result) => {
    if (err) {
      console.log(err);
    } else res.send(result);
  });
});

app.delete('/delete/:id', (req, res) => {
  const { id } = req.params;
  let query = 'DELETE FROM Games WHERE id = ?';
  db.query(query, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, () => console.log(`rodando na porta: ${PORT}`));
