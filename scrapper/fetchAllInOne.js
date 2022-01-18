const cheerio = require('cheerio');
const got = require('got');
const mongo = require('mongodb');

const MongoClient = require('mongodb').MongoClient;
const urlMongo = "mongodb+srv://benamails:iK765KMkuQeC@cluster0.urrvm.mongodb.net/myScrapper?retryWrites=true&w=majority";

console.log('youhou')
const sitemap= 'http://www.unevegetariennepresqueparfaite.com/sitemap.xml';

got(sitemap).then(response => {
  const $ = cheerio.load(response.body);

  var loc = []
    $('loc').each(function(i,e) {
      if (i<100){
        loc[i] = $(this).text();
      }
    });
setTimeout(function () { }, 5000);
loc.forEach(url =>
// début de forEach()
  got(url).then(response => {
    // console.log(url);
    const $ = cheerio.load(response.body);

    var title = []
    $('title').each(function(i,e) {
      title[i] = $(this).text();
    });
    // console.log(title);

    var tags = []
    $('.entry-meta-categories').each(function(i,e){
      tags[i] = $(this).text();
    });
    // console.log(tags);

    var recette = []
    $('.entry-content > div').each(function(i,e){
      recette[i] = $(this).text();
    });
    // console.log(recette);

    MongoClient.connect(urlMongo, function(err, db) {
      if (err) throw err;
      var dbo = db.db("myScrapper");
      var receipt = {
        title: title.toString(),
        tags: tags,
        intro: recette.toString()
      };
      dbo.collection("receipts").insertOne(receipt, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
      });
    });
  })
// fin de foreach()
);


}).catch(err => {
  console.log(err);
  });
