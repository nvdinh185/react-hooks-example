var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("learnJs");
  var myobj = [
    { id: 0, name: 'NodeJS', username: 'floppydiskette' },
    { id: 1, name: 'Angular', username: 'siliconeidolon' },
    { id: 2, name: 'ReactJS', username: 'benisphere' }
  ];
  dbo.collection("users").insertMany(myobj, function (err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
});