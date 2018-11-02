const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const axios = require('axios');
var pgp = require('pg-promise')(/*options*/);
var db = pgp(process.env.DATABASE_URL || 'postgres://bbansavage:pass@localhost:5432/five_alive_2018');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/password', (req, res) => {
  console.log('password received!')
  console.log('DBQUERY', `SELECT * FROM users WHERE password = '${req.query.password}'`)
  db.query(`SELECT * FROM users WHERE password = '${req.query.password}'`)
    .then((data) => {
      res.send(data);
    })
    .catch(error => {
      res.send('UNABLE TO LOGIN: ' + error);
    })
})

// temporarily using GET instead of POST
app.get('/api/teams', (req, res) => {
  console.log('teams received!')
  let teamsArray = req.query.teamids.split(',')
  teamsArray = teamsArray.map(teamId => parseInt(teamId));
  db.query(`update users set teams_2018 = '{${teamsArray}}' where id=${parseInt(req.query.userid)} returning teams_2018`)
    .then(() => {
      res.send('SUCCESS!')
    })
    .catch(error => {
      console.log('ERROR ' + error)
      res.send('UNABLE TO SAVE TEAMS: ' + error)
    })
})

// app.post('/api/world', (req, res) => {
//   console.log(req.body.post);
//   db.query(`INSERT into users (name) values ('${req.body.post}')`)
//     .then(() => {
//       res.send(`I received your POST request. This is what you sent me: ${req.body.post}`);
//     })
//     .catch(error => {
//       res.send(error + 'here is the db url: ' + process.env.DATABASE_URL);
//     });
// });

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use('/', express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));