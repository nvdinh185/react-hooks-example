const express = require("express");
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,X-Requested-With');
    next();
});

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(8080, () => console.log("Server is running in port 8080..."));

MongoClient.connect(url, (err, db) => {
    if (err) throw err;
    var dbo = db.db("learnJs");
    var mang = [];

    app.get("/get-users", (req, res) => {
        dbo.collection("users").find({}).toArray((err, result) => {
            if (err) throw err;
            for (let el of result) {
                delete el._id;
            }
            mang = result;
            // console.log(mang);
            res.send(result);
        })
    });

    app.post("/add-user", (req, res) => {
        let user = req.body.user;
        dbo.collection("users").insertOne(user, function (err, res) { });
        res.send(user);
    })

    app.post("/del-user", (req, res) => {
        let id = req.body.id;
        let myquery = { id: parseInt(id) };
        dbo.collection("users").deleteOne(myquery, function (err, obj) { });
        res.send([]);
    })

    app.post("/edit-user", (req, res) => {
        var myquery = { id: parseInt(req.body.updatedUser.id) };
        var newvalues = { $set: req.body.updatedUser };
        dbo.collection("users").updateOne(myquery, newvalues, function (err, res) { });
        res.send([]);
    })

    // db.close();
});