// const pgp = require('pg-promise')(/*options*/);
// const db = pgp(process.env.DATABASE_URL || 'postgres://akppnbjeltipma:d83a3e7a826cd09a205551a1e4063b60f365201ca4ad6ed875dfdc5cb4e07bac@ec2-54-243-46-32.compute-1.amazonaws.com:5432/d35h8248bl7gm9?ssl=true');
const cheerio = require('cheerio');
const axios = require('axios');

const collectTeamData = (db) => {

  const collectSchedData = () => {

    const buildGameString = (gameObj, completed) => {
      let isHome = false;
      // if location cell is empty or 'N', use 'vs.'; otherwise 'at'
      if (!gameObj.children[4].children[0]) {
        isHome = true;
      } else if (gameObj.children[4].children[0].data === 'N') {
        isHome = true;
      }
      if (completed) {
        var gameString = `${isHome ? 'vs.' : 'at'} ${gameObj.children[5].children[0].children ? gameObj.children[5].children[0].children[0].data.replace('\'', '\'\'').replace('Long Island University', 'LIU-Brooklyn').replace('Nevada-Las Vegas', 'UNLV').replace('University of California', 'California').replace('Virginia Commonwealth', 'VCU') : gameObj.children[5].children[0].data.replace('\'', '\'\'').replace('Long Island University', 'LIU-Brooklyn').replace('Nevada-Las Vegas', 'UNLV').replace('University of California', 'California').replace('Virginia Commonwealth', 'VCU').replace('Texas-El Paso', 'UTEP').replace('Texas Christian', 'TCU')}, ${gameObj.children[7].children[0].data} ${gameObj.children[8].children[0].data}-${gameObj.children[9].children[0].data}`;
      } else {
        var gameString = `${gameObj.children[1].children[0].data.slice(0, gameObj.children[1].children[0].data.indexOf(', 20')).replace(',', '')} ${isHome ? 'vs.' : 'at'} ${gameObj.children[5].children[0].children ? gameObj.children[5].children[0].children[0].data.replace('\'', '\'\'').replace('Long Island University', 'LIU-Brooklyn').replace('Nevada-Las Vegas', 'UNLV').replace('University of California', 'California').replace('Virginia Commonwealth', 'VCU') : gameObj.children[5].children[0].data.replace('\'', '\'\'').replace('Long Island University', 'LIU-Brooklyn').replace('Nevada-Las Vegas', 'UNLV').replace('University of California', 'California').replace('Virginia Commonwealth', 'VCU').replace('Texas-El Paso', 'UTEP').replace('Texas Christian', 'TCU')}`;
      }
      return gameString;
    }

    const teamUrl = ('https://www.sports-reference.com/cbb/schools/[name]/2021-schedule.html')
    db.query('SELECT name from teams where nickname is not null order by id asc;')
      .then(schools => {

            // ***DOM STRUCTURE***
            // games[GAME].children[COLUMN].children[0].data
            // if link, add one children[0]

            // console.log('date ', games[0].children[1].children[0].children[0].data);
            // console.log('location ', games[0].children[4].children[0].children[0].data);
            // console.log('opponent ', games[0].children[5].children[0].children[0].data);
            // console.log('result ', games[0].children[7].children[0].data);
            // console.log('tm score ', games[0].children[8].children[0].data);
            // console.log('opp score ', games[0].children[9].children[0].data);
            // console.log('ot ', games[0].children[10].children[0].data);

          schools.forEach((school, i) => {
            let schoolUrlName = school.name.toLowerCase().replace(' ', '-').replace(' ', '-');
            if (schoolUrlName === 'saint-mary\'s-(ca)') {
              schoolUrlName = 'saint-marys-ca';
            }
            if (schoolUrlName === 'liu-brooklyn') {
              schoolUrlName = 'long-island-university';
            }
            if (schoolUrlName === 'vcu') {
              schoolUrlName = 'virginia-commonwealth';
            }
            if (schoolUrlName === 'miami-(fl)') {
              schoolUrlName = 'miami-fl';
            }
            if (schoolUrlName === 'saint-joseph\'s') {
              schoolUrlName = 'saint-josephs';
            }
            if (schoolUrlName === 'unlv') {
              schoolUrlName = 'nevada-las-vegas';
            }
            if (schoolUrlName === 'utep') {
              schoolUrlName = 'texas-el-paso';
            }
            axios.get(teamUrl.replace('[name]', schoolUrlName))
              .then(res => {
                var $ = cheerio.load(res.data);
                var games = $('#div_schedule tbody tr');
                var i = games.length - 1;
                if (!games[i].children[7].children[0]) {
                // if last row is future game (not game with score)
                  var nextGameString = buildGameString(games[i], false);
                  if (games[i-1].children[7].children[0].data === 'Type') {
                  // if prev row is header
                    var prevGameString = buildGameString(games[i-2], true);
                  } else {
                  // if prev row is game
                    var prevGameString = buildGameString(games[i-1], true)
                  }
                } else {
                  // if last row is completed game
                  var prevGameString = buildGameString(games[i], true)
                  var nextGameString = 'TBD';
                }
                // escape st mary's for db lookup
                if (school.name === 'Saint Mary\'s (CA)') {
                  school.name = 'Saint Mary\'\'s (CA)'
                }
                db.query(`UPDATE teams set (prevgm, nextgm) = ('${prevGameString}', '${nextGameString}') where name = '${school.name}' returning name`)
              })
            if (i === schools.length - 1) {
              console.log('team sched data saved');
            }
          })
        })
  }

  axios.get('https://www.sports-reference.com/cbb/seasons/2021-ratings.html')
    .then(res => {
      console.log('initiating collectWLData hypernet ignition sequence')
      var $ = cheerio.load(res.data);
      var rows = $('#ratings tbody tr');

      let teams = [];

      const updateTeamRow = (domTableRow) => {

        if (domTableRow > 386) {
          // db.query(`UPDATE update_timestamps set updated_at = current_timestamp where type = 'standings';`)
          return console.log('team WL data saved!')
        }

        if (rows[domTableRow].children.length === 19) {
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
          if (name === 'Texas-El Paso') {
            name = 'UTEP';
          }
          var w = rows[domTableRow].children[5].children[0].data;
          var l = rows[domTableRow].children[6].children[0].data;
          console.log(name, w, '-', l)
          db.query(`UPDATE teams SET w2020 = ${w}, l2020 = ${l} WHERE name = '${name}';`)
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

module.exports.collectTeamData = collectTeamData;