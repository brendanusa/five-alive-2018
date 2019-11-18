// const pgp = require('pg-promise')(/*options*/);
// const db = pgp(process.env.DATABASE_URL || 'postgres://akppnbjeltipma:d83a3e7a826cd09a205551a1e4063b60f365201ca4ad6ed875dfdc5cb4e07bac@ec2-54-243-46-32.compute-1.amazonaws.com:5432/d35h8248bl7gm9?ssl=true');
const cheerio = require('cheerio');
const axios = require('axios');

// const collectSchedData = () => {
//   const teamUrl = ('https://www.sports-reference.com/cbb/schools/[name]/2020-schedule.html')
//   db.query('SELECT name from schools where teams_2019 is not null;')
//     .then(schools => {
//       schools.forEach(school => {
//         axios.get(url.replace('[name]', school))
//           .then(res => {
//             console.log('fetching sched data for ', school);
//             var $ = cheerio.load(res.data);
//             var rows = $('#div_schedule tbody tr');
//             console.log(rows[0])
//           })
//       })
//     })
// }

const collectWLData = (db) => {

  axios.get('https://www.sports-reference.com/cbb/seasons/2020-ratings.html')
    .then(res => {
      console.log('initiating collectTeamData sequence hypernet')
      var $ = cheerio.load(res.data);
      var rows = $('#ratings tbody tr');

      let teams = [];

      const updateTeamRow = (domTableRow) => {

        if (domTableRow > 386) {
          return console.log('team WL data saved!')
        }

        if (rows[domTableRow].children.length === 18) {
          var name = rows[domTableRow].children[1].children[0].children[0].data;
          name = name.replace("\'", "''")
          if (name === 'Long Island University') {
            name = 'LIU-Brooklyn';
          }
          if (name === 'Nevada-Las Vegas') {
            name = 'UNLV';
          }
          if (name === 'University of California') {
            name = 'California';
          }
          if (name === 'Virginia Commonwealth') {
            name = 'VCU';
          }
          var w = rows[domTableRow].children[4].children[0].data;
          var l = rows[domTableRow].children[5].children[0].data;
          db.query(`UPDATE teams SET w2019 = ${w}, l2019 = ${l} WHERE name = '${name}';`)
            .then(() => {
              return updateTeamRow(domTableRow + 1);
            })
        } else {
          return updateTeamRow(domTableRow + 1);
        }

      }

      updateTeamRow(0);

    })

  // collectSchedData();


}

module.exports.collectWLData = collectWLData;