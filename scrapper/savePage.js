const mongo = require('mongodb');

const MongoClient = require('mongodb').MongoClient;
const urlMongo = "mongodb+srv://benamails:iK765KMkuQeC@cluster0.urrvm.mongodb.net/myScrapper?retryWrites=true&w=majority";

MongoClient.connect(urlMongo, function(err, db) {
  if (err) throw err;
  var dbo = db.db("myScrapper");
  var receipt = {
    title: "Company Inc",
    intro: "Highway 37"
  };
  dbo.collection("receipts").insertOne(receipt, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});
