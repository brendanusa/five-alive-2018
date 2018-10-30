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
  db.query(`SELECT name FROM users WHERE password = '${req.body.get}'`)
    .then((data) => {
      res.send(data);
    })
    .catch(error => {
      res.send('UNABLE TO LOGIN: ' + error);
    })
})

app.post('/api/world', (req, res) => {
  console.log(req.body.post);
  db.query(`INSERT into users (name) values ('${req.body.post}')`)
    .then(() => {
      res.send(`I received your POST request. This is what you sent me: ${req.body.post}`);
    })
    .catch(error => {
      res.send(error + 'here is the db url: ' + process.env.DATABASE_URL);
    });
});

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use('/#', express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));