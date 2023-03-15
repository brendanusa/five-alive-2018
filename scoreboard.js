const axios = require("axios");
const pgp = require("pg-promise")(/*options*/);

const config = {
  host: "ec2-3-210-173-88.compute-1.amazonaws.com",
  port: 5432,
  database: "da0g66a43jf71l",
  user: "dnibtphgdstqcb",
  password: "41c7c229a0b5e41efb1295a06f6964d5e638a7417f1e95f0f3a14ffaa6c01b0b",
  max: 30,
  ssl: { rejectUnauthorized: false },
};

const db = pgp(config);

const fetchScores = (db) => {
  console.log("start");
  // fetch active teams
  db.query("select abbreviation from teams22 where active = true").then(
    (data) => {
      activeTeams = data;
      console.log(data);
      activeTeams.forEach((team, i) => {
        activeTeams[i] = team.abbreviation;
      });
      // parse current date and insert into url
      var date = new Date(Date.now());
      // group # for reg season is 50; tournament is 100
      console.log(
        `http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard?limit=500&groups=100&dates=${date.getFullYear()}${
          date.getMonth() + 1
        }${date.getDate()}`
      );
      // group # for reg season is 50; tournament is 100
      axios
        .get(
          `http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard?limit=500&groups=100&dates=${date.getFullYear()}0${
            date.getMonth() + 1
          }${date.getDate()}`
          // "http://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/scoreboard?limit=500&groups=50&dates=20221227"
        )
        .then((res) => {
          console.log(res.data.events);
          const games = res.data.events;
          // clear db
          db.query("delete from scores;").then(() => {
            const bball = (i) => {
              // check for active teams
              if (
                activeTeams.includes(
                  res.data.events[i].competitions[0].competitors[0].team
                    .abbreviation
                ) ||
                activeTeams.includes(
                  res.data.events[i].competitions[0].competitors[1].team
                    .abbreviation
                )
              ) {
                // parse clock string
                let clock = res.data.events[i].status.type.shortDetail;
                // remove date
                if (clock.indexOf("/") !== -1 && clock.indexOf("O") === -1) {
                  clock = clock.slice(clock.indexOf("-") + 2, clock.length);
                }
                db.query(
                  `insert into scores (id, hometeam, awayteam, homescore, awayscore, clock, state) values (${res.data.events[i].id}, '${res.data.events[i].competitions[0].competitors[0].team.abbreviation}', '${res.data.events[i].competitions[0].competitors[1].team.abbreviation}', ${res.data.events[i].competitions[0].competitors[0].score}, ${res.data.events[i].competitions[0].competitors[1].score}, '${clock}', '${res.data.events[i].status.type.state}') on conflict (id) do update set homescore = ${res.data.events[i].competitions[0].competitors[0].score}, awayscore = ${res.data.events[i].competitions[0].competitors[1].score}, clock = '${clock}', state = '${res.data.events[i].status.type.state}' returning hometeam;`
                ).then((res) => {
                  console.log(res[0].hometeam, "game updated");
                  if (i < games.length - 1) {
                    return bball(i + 1);
                  } else {
                    // return db
                    //   .query
                    //   "update update_timestamps set updated_at = current_timestamp where id = 5;"
                    //   ();
                  }
                });
              } else {
                if (i < games.length - 1) {
                  return bball(i + 1);
                } else {
                  return;
                }
              }
            };
            bball(0);
          });
        });
    }
  );
};

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
