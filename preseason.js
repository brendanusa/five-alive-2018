const axios = require("axios");
const pgp = require("pg-promise")(/*options*/);

const dbconfig = {
  host: "ec2-18-206-112-235.compute-1.amazonaws.com",
  port: 5432,
  database: "dag6ep3ss6gjqs",
  user: "rtfioncdlaecxo",
  password: "7036de1df00d2b62079ce7239fe44758fd7131e2d2d96b58218c877f6ef2d012",
  max: 30,
  ssl: { rejectUnauthorized: false },
};

const db = pgp(dbconfig);

const axiosconfig = {
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
  },
};

const populatepreseasonteamdata = (db) => {
  axios
    .get(
      "https://site.api.espn.com/apis/site/v2/sports/basketball/mens-college-basketball/teams?limit=500",
      axiosconfig
    )
    .then((res) => {
      console.log("initiating preseason rocket sequence");

      let teams = [];

      console.log(res.data.sports[0].leagues[0].teams[0].team.abbreviation);

      console.log(res.data.sports[0].leagues[0].teams.length);

      const addTeamRow = (row) => {
        let name = res.data.sports[0].leagues[0].teams[
          row
        ].team.location.replace("'", "''");
        let abbreviation =
          res.data.sports[0].leagues[0].teams[row].team.abbreviation;
        let nickname = res.data.sports[0].leagues[0].teams[
          row
        ].team.name.replace("'", "''");
        let id = res.data.sports[0].leagues[0].teams[row].team.id;
        db.query(
          `INSERT into teams22 (name, abbreviation, nickname, espnid) values ('${name}', '${abbreviation}', '${nickname}', ${id}) returning name`
        ).then((res) => {
          console.log(res[0].name);
          if (row < 359) {
            return addTeamRow(row + 1);
          } else {
            return console.log("done!");
          }
        });
      };

      // addTeamRow(0);
    });
};

// populatepreseasonteamdata(db);
