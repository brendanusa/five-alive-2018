const axios = require('axios');
const pgp = require('pg-promise')(/*options*/);

const config = {
  host: 'ec2-54-243-46-32.compute-1.amazonaws.com',
  port: 5432,
  database: 'd35h8248bl7gm9',
  user: 'akppnbjeltipma',
  password: 'd83a3e7a826cd09a205551a1e4063b60f365201ca4ad6ed875dfdc5cb4e07bac',
  max: 30,
  ssl: {rejectUnauthorized: false}
};

const db = pgp(config);

const fetchScores = (db) => {
  // fetch active teams
  db.query('select abbreviation from teams where active = true')
    .then(data => {
      activeTeams = data;
      activeTeams.forEach((team, i) => {
        activeTeams[i] = team.abbreviation;
      })
      // parse current date and insert into url
      var date = new Date(Date.now())
      axios.get(`http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard?limit=500&dates=${date.getFullYear()}0${date.getMonth()+1}${date.getDate()}`)
        .then(res => {
          for (i = 0; i < res.data.events.length; i++) {
            // check for active team
            if (activeTeams.includes(res.data.events[i].competitions[0].competitors[0].team.abbreviation) || activeTeams.includes(res.data.events[i].competitions[0].competitors[1].team.abbreviation)) {
              // parse clock string
              let clock = res.data.events[i].status.type.shortDetail;
              // remove date
              if (clock.indexOf('/') !== -1 && clock.indexOf('O') === -1) {
                clock = clock.slice(clock.indexOf('-') + 2, clock.length);
              }
              db.query(`insert into scores (id, hometeam, awayteam, homescore, awayscore, clock, state) values (${res.data.events[i].id}, '${res.data.events[i].competitions[0].competitors[0].team.abbreviation}', '${res.data.events[i].competitions[0].competitors[1].team.abbreviation}', ${res.data.events[i].competitions[0].competitors[0].score}, ${res.data.events[i].competitions[0].competitors[1].score}, '${clock}', '${res.data.events[i].status.type.state}') on conflict (id) do update set homescore = ${res.data.events[i].competitions[0].competitors[0].score}, awayscore = ${res.data.events[i].competitions[0].competitors[1].score}, clock = '${clock}', state = '${res.data.events[i].status.type.state}' returning hometeam;`)
                .then(res => {
                  console.log(res[0].hometeam, 'game updated')
                })
            }
          }
        })
    })
}

// *to update team abbreviations in db*
// const populateAbbreviations = (db) => {
//   axios.get('http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams?limit=800')
//     .then(res => {
//       console.log(res.data.sports[0].leagues[0].teams.length)
//       res.data.sports[0].leagues[0].teams.forEach(team => {
//         console.log(team.team.location, team.team.abbreviation)
//         db.query(`update teams set abbreviation = '${team.team.abbreviation} ' where name = '${team.team.location}'`)
//       })
//     })
// }

//delayed call
// setTimeout(function() {
//   fetchScores(db);
// }, Math.random()*60000)

// immediate call
fetchScores(db);