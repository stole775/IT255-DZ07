const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'methotels',
});

connection.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Connected to database');
});

app.get('/api/sobe', (req, res) => {
  connection.query('SELECT * FROM sobe', (err, results) => {
    if (err) {
      console.error('Error executing query: ' + err.stack);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }
    res.json(results);
  });
});

// Dodavanje sobe
app.post('/api/sobe', (req, res) => {
    const { naziv, link, votes, brGostiju, klima, sauna, miniBar, brojNoci } = req.body;
    const query = `INSERT INTO sobe (id, naziv, link, votes, brGostiju, klima, sauna, miniBar,brojNoci) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    connection.query(query, [naziv, link, votes, brGostiju, klima, sauna, miniBar, brojNoci], (err, result) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json({ success: true, id: result.insertId });
    });
  });
  
  // Ažuriranje sobe
  app.put('/api/sobe/:id', (req, res) => {
    const roomId = req.params.id;
    const { naziv, link, votes, brGostiju, klima, sauna, miniBar, brojNoci } = req.body;
    const query = `UPDATE sobe SET naziv=?, link=?, votes=?, brGostiju=?, klima=?, sauna=?, miniBar=?, brojNoci=? WHERE id=?`;
    connection.query(query, [naziv, link, votes, brGostiju, klima, sauna, miniBar, brojNoci, roomId], (err) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json({ success: true });
    });
  });
  
  // Brisanje sobe
  app.delete('/api/sobe/:id', (req, res) => {
    const roomId = req.params.id;
    const query = `DELETE FROM sobe WHERE id=?`;
    connection.query(query, [roomId], (err) => {
      if (err) {
        console.error('Error executing query: ' + err.stack);
        res.status(500).json({ error: 'Internal Server Error' });
        return;
      }
      res.json({ success: true });
    });
  });
  

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
