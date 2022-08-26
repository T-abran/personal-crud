require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

const db = mysql.createPool({
  host:'localhost',
  user: 'root', // seu usuario aqui
  password: 'suasenha',// sua senha aqui
  database: 'crud_games', // nome do banco

});

app.use(cors());
app.use(express.json());

const PORT =  3001;

app.get('/getCards', (_req, res) => {
  let query = `SELECT * FROM Games`;
  db.query(query, (err, result) => {
    if (err) {
      console.log(err);
    } else res.send(result);
  });
});

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
