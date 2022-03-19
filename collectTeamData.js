const cheerio = require("cheerio");
const axios = require("axios");
const pgp = require("pg-promise")(/*options*/);

const config = {
  host: "ec2-18-206-112-235.compute-1.amazonaws.com",
  port: 5432,
  database: "dag6ep3ss6gjqs",
  user: "rtfioncdlaecxo",
  password: "7036de1df00d2b62079ce7239fe44758fd7131e2d2d96b58218c877f6ef2d012",
  max: 30,
  ssl: { rejectUnauthorized: false },
};

const db = pgp(config);

const collectTeamData = (db) => {
  const collectSchedData = () => {
    const buildGameString = (gameObj, completed, teamname) => {
      console.log("20", teamname);
      let isHome = false;

      // if location cell is empty or 'N', use 'vs.'; otherwise 'at'
      if (!gameObj.children[4].children[0]) {
        isHome = true;
      } else if (gameObj.children[4].children[0].data === "N") {
        isHome = true;
      }

      if (completed) {
        var gameString = `${isHome ? "vs." : "at"} ${
          gameObj.children[5].children[0].children
            ? gameObj.children[5].children[0].children[0].data
                .replace("'", "''")
                .replace("Long Island University", "LIU-Brooklyn")
                .replace("Nevada-Las Vegas", "UNLV")
                .replace("University of California", "California")
                .replace("Virginia Commonwealth", "VCU")
            : gameObj.children[5].children[0].data
                .replace("'", "''")
                .replace("Long Island University", "LIU-Brooklyn")
                .replace("Nevada-Las Vegas", "UNLV")
                .replace("University of California", "California")
                .replace("Virginia Commonwealth", "VCU")
                .replace("Texas-El Paso", "UTEP")
                .replace("Texas Christian", "TCU")
        }, ${gameObj.children[7].children[0].data} ${
          gameObj.children[8].children[0].data
        }-${gameObj.children[9].children[0].data}`;
      } else {
        let opponent;

        if (gameObj.children[5].children[0]) {
          //cell is not empty
          // console.log("55", teamname);
          if (gameObj.children[5].children[0].children) {
            //and contains a link
            // console.log("58", teamname);
            opponent = gameObj.children[5].children[0].children[0].data
              .replace("'", "''")
              .replace("Long Island University", "LIU-Brooklyn")
              .replace("Nevada-Las Vegas", "UNLV")
              .replace("University of California", "California")
              .replace("Virginia Commonwealth", "VCU")
              .replace("Texas-El Paso", "UTEP")
              .replace("Texas Christian", "TCU");
          } else {
            //and contains only text
            // console.log("69", teamname);
            opponent = gameObj.children[5].children[0].data
              .replace("'", "''")
              .replace("Long Island University", "LIU-Brooklyn")
              .replace("Nevada-Las Vegas", "UNLV")
              .replace("University of California", "California")
              .replace("Virginia Commonwealth", "VCU")
              .replace("Texas-El Paso", "UTEP")
              .replace("Texas Christian", "TCU");
          }
        } else {
          //cell is empty
          console.log("81", teamname);
          opponent = "-";
        }

        var gameString = `${gameObj.children[1].children[0].data
          .slice(0, gameObj.children[1].children[0].data.indexOf(", 20"))
          .replace(",", "")} ${isHome ? "vs." : "at"} ${opponent}`;

        console.log("89", gameString);
      }
      return gameString;
    };

    const teamUrl =
      "https://www.sports-reference.com/cbb/schools/[name]/2022-schedule.html";
    db.query(`SELECT name from teams where active = true order by id asc;`)
      .then((schools) => {
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
          // for isolating problem teams
          // if (school.name === "Indiana") {
          let schoolUrlName = school.name
            .toLowerCase()
            .replace(" ", "-")
            .replace(" ", "-");

          if (schoolUrlName === "saint-mary's-(ca)") {
            schoolUrlName = "saint-marys-ca";
          } else if (schoolUrlName === "liu-brooklyn") {
            schoolUrlName = "long-island-university";
          } else if (schoolUrlName === "vcu") {
            schoolUrlName = "virginia-commonwealth";
          } else if (schoolUrlName === "miami-(fl)") {
            schoolUrlName = "miami-fl";
          } else if (schoolUrlName === "saint-joseph's") {
            schoolUrlName = "saint-josephs";
          } else if (schoolUrlName === "unlv") {
            schoolUrlName = "nevada-las-vegas";
          } else if (schoolUrlName === "utep") {
            schoolUrlName = "texas-el-paso";
          } else if (schoolUrlName === "uc-santa-barbara") {
            schoolUrlName = "california-santa-barbara";
          } else if (schoolUrlName === "texas-a&m") {
            schoolUrlName = "texas-am";
          } else if (schoolUrlName === "loyola-(md)") {
            schoolUrlName = "loyola-md";
          } else if (schoolUrlName === "st.-bonaventure") {
            schoolUrlName = "st-bonaventure";
          }

          axios.get(teamUrl.replace("[name]", schoolUrlName)).then((res) => {
            var $ = cheerio.load(res.data);
            var games = $("#div_schedule tbody tr");
            let prevGameString;
            let nextGameString;

            // MID SEASON
            // for (let i = 0; i < games.length; i++) {
            //   if (!games[i].children[7].children[0]) {
            //     if (i === 0) {
            //       prevGameString = "None";
            //     } else {
            //       prevGameString = buildGameString(
            //         games[i - 1],
            //         true,
            //         school.name
            //       );
            //     }
            //     nextGameString = buildGameString(games[i], false, school.name);
            //     i = games.length;
            //   }
            // }

            // END OF SEASON
            var i = games.length - 1;
            if (!games[i].children[7].children[0]) {
              // if last row is future game (not game with score)
              nextGameString = buildGameString(games[i], false, school.name);
              if (games[i - 1].children[7].children[0].data === "Type") {
                // if prev row is header
                prevGameString = buildGameString(
                  games[i - 2],
                  true,
                  school.name
                );
              } else {
                // if prev row is game
                prevGameString = buildGameString(
                  games[i - 1],
                  true,
                  school.name
                );
              }
            } else {
              // if last row is completed game
              prevGameString = buildGameString(games[i], true, school.name);
              nextGameString = "-";
            }

            // escape st mary's and st joe's for db lookup
            if (school.name === "Saint Mary's (CA)") {
              school.name = "Saint Mary''s (CA)";
            }
            if (school.name === "Saint Joseph's") {
              school.name = "Saint Joseph''s";
            }
            db.query(
              `UPDATE teams set (prevgm, nextgm) = ('${prevGameString}', '${nextGameString}') where name = '${school.name}' returning name`
            );
          });
          if (i === schools.length - 1) {
            return;
          }
          // }
        });
      })
      .catch((error) => {
        console.log("ERROR!", error);
      });
  };

  axios
    .get("https://www.sports-reference.com/cbb/seasons/2022-ratings.html")
    .then((res) => {
      console.log("initiating collectWLData hypernet ignition sequence");
      var $ = cheerio.load(res.data);
      var rows = $("#ratings tbody tr");

      let teams = [];

      const updateTeamRow = (domTableRow) => {
        if (domTableRow > 386) {
          db.query(
            `UPDATE update_timestamps set updated_at = current_timestamp where type = 'standings'`
          );
          return console.log("team WL data saved!");
        }

        if (rows[domTableRow].children.length === 19) {
          var name = rows[domTableRow].children[1].children[0].children[0].data;
          name = name.replace("'", "''");
          if (name === "Long Island University") {
            name = "LIU-Brooklyn";
          }
          if (name === "Nevada-Las Vegas") {
            name = "UNLV";
          }
          if (name === "University of California") {
            name = "California";
          }
          if (name === "Virginia Commonwealth") {
            name = "VCU";
          }
          if (name === "Texas-El Paso") {
            name = "UTEP";
          }
          var w = rows[domTableRow].children[5].children[0].data;
          var l = rows[domTableRow].children[6].children[0].data;
          console.log(name, w, "-", l);
          db.query(
            `UPDATE teams SET w2122 = ${w}, l2122 = ${l} WHERE name = '${name}';`
          ).then(() => {
            // return;
            return updateTeamRow(domTableRow + 1);
          });
        } else {
          // return;
          return updateTeamRow(domTableRow + 1);
        }
      };

      // updateTeamRow(0);
    });

  collectSchedData();
};

collectTeamData(db);

module.exports.collectTeamData = collectTeamData;
