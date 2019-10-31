const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
// const axios = require('axios');
const pgp = require('pg-promise')(/*options*/);
const collectTeamData = require('./collectTeamData');
const pickFiveData = require('./pickFiveData');
const db = pgp(process.env.DATABASE_URL || 'postgres://akppnbjeltipma:d83a3e7a826cd09a205551a1e4063b60f365201ca4ad6ed875dfdc5cb4e07bac@ec2-54-243-46-32.compute-1.amazonaws.com:5432/d35h8248bl7gm9?ssl=true');

// DYNAMIC DB URL
// DATABASE_URL=$(heroku config:get DATABASE_URL -a five-alive-2018) your_process
// var db = pgp(process.env.DATABASE_URL || 'postgres://bbansavage:pass@localhost:5432/five_alive_2018');

// TO UPDATE STANDINGS
// collectTeamData.collectWLData(db);

server = app.listen(port, function(){
  console.log('server is running on port', port)
});

var socket = require('socket.io');
io = socket(server);

io.on('connection', (socket) => {
  console.log('Client connected on socket', socket.id)

  socket.on('SEND_MESSAGE', function(data){
    console.log('Client sent new message')
    let {
      userid,
      username,
      text
    } = data;
    const timestamp = new Date()
    let i = 0;
    while (i < text.length) {
      if (text[i] === '\'') {
        text = text.slice(0, i + 1) + '\'' + text.slice(i + 1);
        i++;
      }
      i++;
    }
    db.query(`insert into messages (user_id, user_name, text) values (${userid}, '${username}', '${text}');`)
      .then(() => {
        db.query('select * from messages order by created desc limit 50')
        .then(data => {
          io.emit('RECEIVE_MESSAGES', data.reverse());
        })
        .catch(error => {
          console.log('ERROR ' + error)
          res.send('Unable to retrieve messages: ' + error)
        })
      })
      .catch(error => {
        console.log('ERROR ', error)
        io.emit('Unable to save message: ', error);
      })
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
      console.log('BRENDAN', data)
      res.send(data);
    })
    .catch(error => {
      console.log('ERROR', error)
      res.send('Unable to verify password: ', error);
    })
})

app.get('/api/picks', (req, res) => {
  db.query('select name, teams_2018 from users;')
    .then(users => {
      res.send(users)
    })
    .catch(error => {
      console.log('ERROR ' + error)
      res.send('Unable to retrieve picks: ' + error)
    })
})

app.get('/api/simscore', (req, res) => {
  db.query('select name, sim_score_2018 from users;')
    .then(users => {
      users.sort((a, b) => {
        return a.sim_score_2018 - b.sim_score_2018;
      })
      res.send(users);
    })
    .catch(error => {
      console.log('ERROR ' + error)
      res.send('Unable to retrieve simScores: ' + error)
    })
})

app.get('/api/picksbyschool', (req, res) => {
  const picksBySchoolObj = {};
  const picksBySchoolArr = [];
  db.query('select teams_2018 from users')
    .then(users => {
      users.forEach(user => {
        for (var key in user.teams_2018) {
          if (picksBySchoolObj[user.teams_2018[key]]) {
            picksBySchoolObj[user.teams_2018[key]]++;
          } else {
            picksBySchoolObj[user.teams_2018[key]] = 1;
          }
        }
      })
      db.query('select id, name from teams')
        .then(teams => {
          const teamsMap = {};
          teams.forEach(team => {
            teamsMap[team.id] = team.name;
          })
          for (var key in picksBySchoolObj) {
            picksBySchoolArr.push({
              name: teamsMap[key],
              picks: picksBySchoolObj[key]
            })
          }
          picksBySchoolArr.sort((a, b) => {
            return b.picks - a.picks || b.name - a.name;
          })
          res.send(picksBySchoolArr)
        })
        .catch(error => {
          console.log('ERROR ' + error)
          res.send('Unable to retrieve teams: ' + error)
        })
    })
    .catch(error => {
      console.log('ERROR ' + error)
      res.send('Unable to retrieve users: ' + error)
    })
})

app.get('/api/standings', (req, res) => {
  let resData = {}
  db.query('SELECT id, name, w2018, l2018 from teams;')
    .then(data => {
      resData.teams = data.sort((a, b) => a.id - b.id);
      db.query('SELECT name, teams_2018 from users;')
        .then(data => {
          resData.users = data;
          resData.users.forEach((user, i) => {
            resData.users[i].wins = user.teams_2018.reduce((acc, val) => {
              return acc += resData.teams[val - 1].w2018;
            }, 0)
            resData.users[i].teams_2018 = resData.users[i].teams_2018.map(teamid => {
              return resData.teams[teamid - 1];
            })
          })
          resData.users.sort((a, b) => {
            return b.wins - a.wins;
          })
          res.send(resData.users);
        })
        .catch(error => {
          console.log('ERROR ' + error)
          res.send('Unable to retrieve users: ' + error)
        })
    })
    .catch(error => {
      console.log('ERROR ' + error)
      res.send('Unable to retrieve teams: ' + error)
    })
})

// TODO: Change to post req
app.get('/api/teams', (req, res) => {
  console.log('Picks received!')
  let teamsArray = req.query.teamids.split(',')
  teamsArray = teamsArray.map(teamId => parseInt(teamId));
  db.query(`update users set teams_2019 = '{${teamsArray}}' where id=${parseInt(req.query.userid)} returning teams_2019`)
    .then(() => {
      res.send('Picks saved!')
    })
    .catch(error => {
      console.log('ERROR ' + error)
      res.send('Unable to save picks: ' + error)
    })
})

app.get('/api/messages', (req, res) => {
  console.log('retrieving messages...')
  db.query('select * from messages order by created desc limit 50')
    .then((data) => {
      res.send(data.reverse());
    })
    .catch(error => {
      console.log('ERROR', error)
      res.send('Unable to retrieve messages: ' + error);
    })
})

app.get('/api/pickfive/highscores', (req, res) => {
  console.log('retrieving pickfive highscores')
  res.send(pickFiveData.pickFiveHighScores)
})

app.get('/api/pickfive/champs', (req, res) => {
  console.log('retrieving pickfive champs')
  res.send(pickFiveData.pickFiveChamps)
})

app.get('/api/schools', (req, res) => {
  console.log('fetching team select school list');
  db.query('SELECT name, w1819, l1819 from teams order by name asc;')
    .then(data => {
      res.send(data)
    })
    .catch(error => {
      console.log('ERROR', error)
      res.send('Unable to retrieve school list: ' + error);
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

const teamsHard = [
  {name: 'Abilene Christian', w: 16, l: 16}
]