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

server = app.listen(8000, function(){
  console.log('socket.io server is running on port 8080')
});

// const io = require('socket.io')();

var socket = require('socket.io');
io = socket(server);

io.on('connection', (socket) => {
  console.log(socket.id);

  socket.on('SEND_MESSAGE', function(data){
    io.emit('RECEIVE_MESSAGE', data);
  })
});

// io.on('connection', (client) => {
//   client.on('subscribeToTimer', (interval) => {
//     console.log('client is subscribing to timer with interval ', interval);
//     setInterval(() => {
//       client.emit('timer', new Date());
//     }, interval);
//   });
//   client.on('message', (messages) => {
//     console.log('client is subscribing to messages: ', messages);
//     // app.get('/api/messages', (req, res) => {
//     //   console.log('retrieving messages inside socket...')
//     //   db.query('select * from messages limit 50')
//     //     .then((data) => {
//     //       res.send(data);
//     //     })
//     //     .catch(error => {
//     //       console.log('ERROR', error)
//     //       res.send(error);
//     //     })
//     // })
//     client.emit('newMessages', messages);
//   })
// });

// io.listen(8000);

console.log('TEST', process.env.NODE_ENV)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const temp = () => {
//   const teamsObj = {}
//   const picks = {}
//   db.query('select * from teams;')
//     .then(teams => {
//       teams.forEach(team => {
//         teamsObj[team.id] = team.name;
//       })
//     })
//     .then(() => {
//       db.query('select name, teams_2018 from users;')
//         .then(users => {
//           users.forEach(user => {
//             if (user.name !== 'Ryan Hollywood Corbalis') {
//               picks[user.name] = [];
//               user.teams_2018.forEach(team => {
//                 picks[user.name].push(teamsObj[team])
//               })
//             }
//           })
//           console.log(picks)
//         })
//     })
// }

// temp();

// app.get('/api/hello', (req, res) => {
//   res.send({ express: 'Hello From Express' });
// });

app.get('/api/password', (req, res) => {
  console.log('password received!')
  console.log('DBQUERY', `SELECT * FROM users WHERE password = '${req.query.password}'`)
  console.log(typeof db)
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
  db.query('select * from messages limit 50')
    .then((data) => {
      res.send(data);
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
  db.query(`insert into messages (user_id, user_name, text) values (${req.query.userid}, '${req.query.username}', '${req.query.text}');`)
    .then((data) => {
      res.send(data);
    })
    .catch(error => {
      console.log('ERROR', error)
      res.send(error);
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