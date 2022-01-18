const cheerio = require('cheerio');
const got = require('got');
const loc = require ('./fetchURL')

const sitemapURL= 'http://www.unevegetariennepresqueparfaite.com/sitemap.xml';

got(sitemapURL).then(response => {
  const $ = cheerio.load(response.body);

  var loc = []
    $('loc').each(function(i,e) {
      if (i<5){
        loc[i] = $(this).text();
      }
    });
loc.forEach(
  ficheRecette =>
  console.log(ficheRecette));

}).catch(err => {
  console.log(err);
  });

module.exports = loc
