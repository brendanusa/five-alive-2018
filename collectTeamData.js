// const pgp = require('pg-promise')(/*options*/);
// const db = pgp(process.env.DATABASE_URL || 'postgres://akppnbjeltipma:d83a3e7a826cd09a205551a1e4063b60f365201ca4ad6ed875dfdc5cb4e07bac@ec2-54-243-46-32.compute-1.amazonaws.com:5432/d35h8248bl7gm9?ssl=true');
const cheerio = require('cheerio');
const axios = require('axios');

const collectWLData = (db) => {

  axios.get('https://www.sports-reference.com/cbb/seasons/2019-ratings.html')
    .then(res => {
      var $ = cheerio.load(res.data);
      console.log('RATINGS', $('#ratings').length)
    })


}

module.exports.collectWLData = collectWLData;