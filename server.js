const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const axios = require('axios');
var pgp = require('pg-promise')(/*options*/);
var db = pgp(process.env.DATABASE_URL || 'postgres://akppnbjeltipma:d83a3e7a826cd09a205551a1e4063b60f365201ca4ad6ed875dfdc5cb4e07bac@ec2-54-243-46-32.compute-1.amazonaws.com:5432/d35h8248bl7gm9?ssl=true');
// DATABASE_URL=$(heroku config:get DATABASE_URL -a five-alive-2018) your_process
// var db = pgp(process.env.DATABASE_URL || 'postgres://bbansavage:pass@localhost:5432/five_alive_2018');

server = app.listen(port, function(){
  console.log('server is running on port', port)
});

var socket = require('socket.io');
io = socket(server);

io.on('connection', (socket) => {
  console.log('Client connected on socket', socket.id)

  socket.on('SEND_MESSAGE', function(data){
    io.emit('RECEIVE_MESSAGE', data);
  })

  socket.on('disconnect', () => console.log('Client disconnected'));
});

app.get('/api/port', (req, res) => {
  res.send(port.toString())
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/password', (req, res) => {
  db.query(`SELECT * FROM users WHERE password = '${req.query.password}'`)
    .then((data) => {
      res.send(data);
    })
    .catch(error => {
      console.log('ERROR', error)
      res.send(error);
    })
})

app.get('/api/standings', (req, res) => {
  console.log('server standings')
  db.query('select name, teams_2018 from users;')
    .then(users => {
      res.send(users)
      // users.forEach(user => {
      //   if (user.name !== 'Ryan Hollywood Corbalis') {
      //     picks[user.name] = [];
      //     user.teams_2018.forEach(team => {
      //       picks[user.name].push(teamsObj[team])
      //     })
      //   }
      // })
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

app.get('/api/messages', (req, res) => {
  console.log('retrieving messages...')
  db.query('select * from messages order by created desc limit 50')
    .then((data) => {
      console.log('DATA', data.reverse())
      res.send(data.reverse());
    })
    .catch(error => {
      console.log('ERROR', error)
      res.send(error);
    })
})

app.get('/api/message', (req, res) => {
  console.log('posting message...')
  console.log('id', req.query.userid, 'name', req.query.username, 'text', req.query.text)
  var timestamp = new Date()
  var message = req.query.text;
  let i = 0;
  while (i < message.length) {
    if (message[i] === '\'') {
      message = message.slice(0, i + 1) + '\'' + message.slice(i + 1);
      i++;
    }
    i++
  }
  console.log('MESSAGE', message)
  db.query(`insert into messages (user_id, user_name, text) values (${req.query.userid}, '${req.query.username}', '${message}');`)
    .then((data) => {
      res.send(data);
    })
    .catch(error => {
      console.log('ERROR', error)
      res.send(error);
    })
})

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use('/', express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

// app.listen(port, () => console.log(`Listening on port ${port}`));