const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',       // your MySQL username
    password: '',       // your MySQL password
    database: 'signup_db' // your database name
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL connected...');
});

// Serve the signup form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle form submission
app.post('/signup', (req, res) => {
    const { name, email, password } = req.body;

    // Hash the password before storing it
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [name, email, hashedPassword], (err, result) => {
        if (err) {
            console.log(err);
            return res.send('Error occurred');
        }
        res.send('User registered successfully!');
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
