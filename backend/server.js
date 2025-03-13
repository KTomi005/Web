const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require("mysql");
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.json());
app.use(cors()); 



app.get("/", (req, res) => {
    res.send("Fut a backend!");
})

const db = mysql.createConnection({
    user: "root",
    host: "127.0.0.1",
    port: 3306,
    password: "",
    database: "dungeon",
}); 
db.connect(err => {
    if (err) {
        console.error('Database connection failed:', err);
    } else {
        console.log('Connected to MySQL');
    }
});


app.get('/signup', (req, res) => {
    db.query('SELECT * FROM user', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    // Győződjünk meg, hogy a mezők nem üresek
    if (!username || !email || !password) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    const query = 'INSERT INTO user (Username, Email, Password) VALUES (?, ?, ?)';
    db.query(query, [username, email, password], (err, result) => {
        if (err) {
            console.error("Database error: ", err);  // Logoljuk a backend hibát
            return res.status(500).json({ message: "Error during registration." });
        }

        res.status(201).json({ message: "User successfully created!" });
    });
});
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: "Username and password are required!" });
    }

    const query = 'SELECT * FROM user WHERE Username = ? AND Password = ?';
    db.query(query, [username, password], (err, result) => {
        if (err) {
            console.error("Database error: ", err);
            return res.status(500).json({ message: "Error during login." });
        }
    
        console.log("Database result:", result);  // Log the query result
    
        if (result.length === 0) {
            return res.status(400).json({ message: "Invalid username or password." });
        }
    
        res.status(200).json({ message: "Login successful!" });
    });
})   


