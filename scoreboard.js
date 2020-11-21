const axios = require('axios');


// const returnGames = (populatedGames) => {
//   // console.log('meow', populatedGames)
//   return populatedGames;
// }

const selectedTeams = ['MIZ ',
'SDSU ',
'FGCU ',
'LIU ',
'COR ',
'HALL ',
'PSU ',
'LOU ',
'MD ',
'UK ',
'BUT ',
'GONZ ',
'KU ',
'USU ',
'MEM ',
'BCU ',
'ND ',
'BAY ',
'FLA ',
'RICH ',
'WEB ',
'VAN ',
'WRST ',
'VILL ',
'STAN ',
'UTEP ',
'SC ',
'FUR ',
'IONA ',
'CAL ',
'TEX ',
'CLMB ',
'RICE ',
'XAV ',
'SMC ',
'UVA ',
'OSU ',
'UCLA ',
'VCU ',
'ORE ',
'DUKE ',
'ARIZ ',
'MSU ',
'ILL ',
'IND ',
'UNLV ',
'MIA ',
'PUR ',
'PROV ',
'GTWN ',
'HARV ',
'DAV ',
'UGA ',
'ETSU ',
'LT '];

const fetchScores = (db) => {
  console.log('hi')
  axios.get('http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard?limit=500&dates=20200311&groups=50')
    .then(res => {
      return res.data.events[0].competitions[0].competitors[0].team.abbreviation;
      // for (let i = 0; i < res.data.events.length; i++) {
        // console.log(event.competitions[0].competitors[0].team.abbreviation,
        //   event.competitions[0].competitors[0].score,
        //   '-',
        //   event.competitions[0].competitors[1].team.abbreviation,
        //   event.competitions[0].competitors[1].score,
        //   event.status.type.shortDetail)
        // let selected = false;
        // only send to client if event includes #5ALIVE team


        // ---
        // db.query(`select name from teams where abbreviation = '${res.data.events[i].competitions[0].competitors[0].team.abbreviation} ' and nickname is not null`)
        //   .then(data => {
        //     if (data.length === 1) {
        //       selected = true;
        //     }
        //     db.query(`select name from teams where abbreviation = '${res.data.events[i].competitions[0].competitors[0].team.abbreviation} ' and nickname is not null`)
        //       .then(data => {
        //         if (data.length === 1) {
        //           selected = true;
        //         }
        //         if (selected) {
        //           var eventObj = {
        //             homeTeam: {
        //               abbreviation: res.data.events[i].competitions[0].competitors[0].team.abbreviation,
        //               score: res.data.events[i].competitions[0].competitors[0].score
        //             },
        //             awayTeam: {
        //               abbreviation: res.data.events[i].competitions[0].competitors[1].team.abbreviation,
        //               score: res.data.events[i].competitions[0].competitors[1].score
        //             },
        //             clock: res.data.events[i].status.type.shortDetail
        //           };
        //           if (eventObj.clock.indexOf('/') !== -1) {
        //             eventObj.clock = res.data.events[i].status.type.shortDetail.slice(res.data.events[i].status.type.shortDetail.indexOf('-') + 2, res.data.events[i].status.type.shortDetail.length);
        //           }
        //           games.push(eventObj);
        //         }
        //         if (i === res.data.events.length - 1) {
        //           console.log('finished', games)
        //           return games;
        //         }
        //       })
        //   })

        //   ---

      // }
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

module.exports.fetchScores = fetchScores;
// module.exports.populateAbbreviations = populateAbbreviations;