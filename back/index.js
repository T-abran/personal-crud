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

app.post('/register', (req, res) => {
  const { name, cost, category } = req.body;
  console.log(name);
});

app.listen(PORT, () => console.log(`rodando na porta: ${PORT}`));
