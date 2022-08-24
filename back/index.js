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
app.get('/', (req, res) => {
  const query = "INSERT INTO Games ( name, cost, category ) VALUES ('mk', 13, 'luta')";
  db.query(query, (error, result) => {
    console.log(error);
  });
});

app.listen(PORT, () => console.log(`rodando na porta: ${PORT}`));
