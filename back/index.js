const express = require('express');
const mysql = require('mysql2');

const cors = require('cors');

const app = express();

const db = mysql.createPool({
  host: 'localhost',
  user: 'tiago',
  password: 'abranges',
  database: 'crud_games',
});

app.use(cors());
app.use(express.json());

const PORT = 3001;

app.get('/getCards', (_req, res) => {
  let query = `SELECT * FROM Games`;
  db.query(query,(err, result) =>{
    if (err) {
      console.log(err);
    }else res.json(result)
  } )
})

app.post('/register', (req, _res) => {
  const { name, cost, category } = req.body;
  console.log(name);
  let query = `INSERT INTO Games (name, cost, category ) VALUES (?, ?, ?)`;
  db.query(query, [name, cost, category], (err, result) => {
    console.log(err);
  })
});

app.listen(PORT, () => console.log(`rodando na porta: ${PORT}`));
