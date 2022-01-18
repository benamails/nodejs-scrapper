const cheerio = require('cheerio');
const got = require('got');
const mongo = require('mongodb');

const MongoClient = require('mongodb').MongoClient;
const urlMongo = "mongodb+srv://benamails:iK765KMkuQeC@cluster0.urrvm.mongodb.net/myScrapper?retryWrites=true&w=majority";

// const loc = require ('./fetchURL')

const url= 'http://www.unevegetariennepresqueparfaite.com/celle-qui-faisait-des-bananes-roties-au-four-vegetalien/'

got(url).then(response => {
  const $ = cheerio.load(response.body);

  var title = []
  $('title').each(function(i,e) {
    title[i] = $(this).text();
  });
  console.log(title.toString());

  var tags = []
  $('.entry-meta-categories').each(function(i,e){
    tags[i] = $(this).text();
  });
  console.log(tags);

  var recette = []
  $('.entry-content > div').each(function(i,e){
    recette[i] = $(this).text();
  });
  console.log(recette.toString());

  MongoClient.connect(urlMongo, function(err, db) {
    if (err) throw err;
    var dbo = db.db("myScrapper");
    var receipt = {
      title: title.toString(),
      intro: recette.toString()
    };
    dbo.collection("receipts").insertOne(receipt, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });

}).catch(err => {
  console.log(err);
  });
