const axios = require('axios');
const pgp = require('pg-promise')(/*options*/);

const fetchScores = (db) => {
  // fetch active teams
  db.query('select abbreviation from teams where active = true')
    .then(data => {
      activeTeams = data;
      activeTeams.forEach((team, i) => {
        activeTeams[i] = team.abbreviation;
      })
      axios.get('http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard?limit=500&dates=20201215&groups=50')
        .then(res => {
          for (i = 0; i < res.data.events.length; i++) {
            // check for active team
            if (activeTeams.includes(res.data.events[i].competitions[0].competitors[0].team.abbreviation) || activeTeams.includes(res.data.events[i].competitions[0].competitors[1].team.abbreviation)) {
              // parse clock string
              let clock = res.data.events[i].status.type.shortDetail;
              if (clock.indexOf('-') !== -1) {
                clock = clock.slice(clock.indexOf('-') + 2, clock.length);
              }
              db.query(`insert into scores (id, hometeam, awayteam, homescore, awayscore, clock, state) values (${res.data.events[i].id}, '${res.data.events[i].competitions[0].competitors[0].team.abbreviation}', '${res.data.events[i].competitions[0].competitors[1].team.abbreviation}', ${res.data.events[i].competitions[0].competitors[0].score}, ${res.data.events[i].competitions[0].competitors[1].score}, '${clock}', '${res.data.events[i].status.type.state}') on conflict (id) do update set homescore = ${res.data.events[i].competitions[0].competitors[0].score}, awayscore = ${res.data.events[i].competitions[0].competitors[1].score}, clock = '${clock}', state = '${res.data.events[i].status.type.state}' returning id;`)
                .then(res => {
                  console.log('game', res[0].id, 'updated')
                })
            }
          }
        })
    })
}

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

fetchScores(pgp(process.env.DATABASE_URL || 'postgres://akppnbjeltipma:d83a3e7a826cd09a205551a1e4063b60f365201ca4ad6ed875dfdc5cb4e07bac@ec2-54-243-46-32.compute-1.amazonaws.com:5432/d35h8248bl7gm9?ssl=true'));