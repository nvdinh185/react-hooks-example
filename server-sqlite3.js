const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const sqlite3 = require('sqlite3').verbose();
const dbFile = './database/users.db';
const db = new sqlite3.Database(dbFile);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.listen(8080, () => console.log("Server is running in port 8080..."));

db.serialize(() => {
    app.get('/get-users', async (req, res) => {
        db.all('SELECT * FROM users', (err, row) => {
            res.send(row);
        })
    });

    app.post("/add-user", (req, res) => {
        const user = req.body.user;
        const stmt = db.prepare("INSERT INTO users (id, name, username) VALUES (?, ?, ?)");
        stmt.run(user.id, user.name, user.username);
        stmt.finalize();
        res.send();
    });

    app.post("/del-user", (req, res) => {
        const id = req.body.id;
        const stmt = db.prepare("DELETE FROM users WHERE id = ?");
        stmt.run(id);
        stmt.finalize();
        res.send();
    });

    app.post("/edit-user", (req, res) => {
        const user = req.body.updatedUser;
        const stmt = db.prepare("UPDATE users SET name = ?, username = ? WHERE id = ?");
        stmt.run(user.name, user.username, user.id);
        stmt.finalize();
        res.send();
    });
});

// db.close();