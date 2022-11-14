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
  axios
    .get(
      "http://sports.core.api.espn.com/v2/sports/basketball/leagues/mens-college-basketball/seasons/2023/types/2/groups/50/standings/0?lang=en&region=us"
    )
    .then((res) => {
      const updateTeam = (index) => {
        let teamId = res.data.standings[index].team.$ref.slice(
          res.data.standings[index].team.$ref.indexOf("teams") + 6,
          res.data.standings[index].team.$ref.indexOf("?")
        );
        let w = res.data.standings[index].records[0].summary.slice(
          0,
          res.data.standings[index].records[0].summary.indexOf("-")
        );
        let l = res.data.standings[index].records[0].summary.slice(
          res.data.standings[index].records[0].summary.indexOf("-") + 1,
          res.data.standings[index].records[0].summary.length
        );
        db.query(
          `UPDATE teams22 SET w2223 = ${w}, l2223 = ${l} WHERE espnid = ${teamId} RETURNING name`
        ).then((res) => {
          // prints team name unless team not in db, i.e. new this season
          console.log(res[0] ? res[0].name : "new team", w, "-", l);
          // update next team unless there are none remaining
          if (index < 361) {
            return updateTeam(index + 1);
          } else {
            return db.query(
              "update update_timestamps set updated_at = current_timestamp where id = 3;"
            );
          }
        });
      };
      updateTeam(0);
    });
};

collectTeamData(db);

module.exports.collectTeamData = collectTeamData;
