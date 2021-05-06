const express = require("express");
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.listen(8080, () => console.log("Server is running in port 8080..."));

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    const dbo = db.db("learnJs");

    app.get("/get-users", (req, res) => {
        dbo.collection("users").find({}, { projection: { _id: 0 } }).toArray((err, data) => {
            // console.log(data);
            res.send(data);
        });
    });

    app.post("/add-user", (req, res) => {
        let user = req.body.user;
        dbo.collection("users").insertOne(user, function (err, data) {
            res.send();
        });

    });

    app.post("/del-user", (req, res) => {
        let id = req.body.id;
        let myquery = { id: parseInt(id) };
        dbo.collection("users").deleteOne(myquery, function (err, data) {
            res.send();
        });
    });

    app.post("/edit-user", (req, res) => {
        var myquery = { id: parseInt(req.body.updatedUser.id) };
        var newvalues = { $set: req.body.updatedUser };
        dbo.collection("users").updateOne(myquery, newvalues, function (err, data) {
            res.send();
        });
    });

    // db.close();
});