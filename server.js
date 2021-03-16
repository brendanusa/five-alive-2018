console.log('server');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const pgp = require('pg-promise')(/*options*/);

const config = {
  host: 'ec2-54-243-46-32.compute-1.amazonaws.com',
  port: 5432,
  database: 'd35h8248bl7gm9',
  user: 'akppnbjeltipma',
  password: 'd83a3e7a826cd09a205551a1e4063b60f365201ca4ad6ed875dfdc5cb4e07bac',
  max: 30,
  ssl: {rejectUnauthorized: false}
};

const db = pgp(config);

// const db = pgp('postgres://akppnbjeltipma:d83a3e7a826cd09a205551a1e4063b60f365201ca4ad6ed875dfdc5cb4e07bac@ec2-54-243-46-32.compute-1.amazonaws.com:5432/d35h8248bl7gm9')

const pickFiveData = require('./pickFiveData');

// DYNAMIC DB URL
// DATABASE_URL=$(heroku config:get DATABASE_URL -a five-alive-2018) your_process
// db = pgp(process.env.DATABASE_URL || 'postgres://bbansavage:pass@localhost:5432/five_alive_2018');

server = app.listen(port, function(){
  console.log('server is running on port', port)
});

// var socket = require('socket.io');
// io = socket(server);

// io.on('connection', (socket) => {
//   console.log('Client connected on socket', socket.id)

//   socket.on('SEND_MESSAGE', function(data){
//     console.log('Client sent new message')
//     let {
//       userid,
//       username,
//       text
//     } = data;
//     const timestamp = new Date()
//     let i = 0;
//     while (i < text.length) {
//       if (text[i] === '\'') {
//         text = text.slice(0, i + 1) + '\'' + text.slice(i + 1);
//         i++;
//       }
//       i++;
//     }
//     db.query(`insert into messages (user_id, user_name, text) values (${userid}, '${username}', '${text}');`)
//       .then(() => {
//         db.query('select * from messages order by created desc limit 50')
//         .then(data => {
//           io.emit('RECEIVE_MESSAGES', data.reverse());
//         })
//         .catch(error => {
//           console.log('ERROR ' + error)
//           res.send('Unable to retrieve messages: ' + error)
//         })
//       })
//       .catch(error => {
//         console.log('ERROR ', error)
//         io.emit('Unable to save message: ', error);
//       })
//   })

//   socket.on('disconnect', () => console.log('Client disconnected'));
// });

app.get('/api/port', (req, res) => {
  res.send(port.toString())
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/scores', (req, res) => {
  db.query(`SELECT * from scores order by state asc, clock asc`)
    .then((data => {
      data.forEach(game => {
        if (game.homescore === 0 && game.awayscore === 0) {
          game.homescore = ' ';
          game.awayscore = ' ';
        }
      })
      res.send(data)
    }))
    .catch(error => {
      console.log('ERROR', error);
      res.send('Unable to fetch scores');
    })
})

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
  console.log('PICKS REQUEST')
  db.query('select name, teams_2019 from users where teams_2019 is not null;')
    .then(users => {
      console.log(users)
      res.send(users)
    })
    .catch(error => {
      console.log('ERROR ' + error)
      res.send('Unable to retrieve picks: ' + error)
    })
})

app.get('/api/picks', (req, res) => {
  console.log('PICKS REQUEST')
  db.query('select name, teams_2019 from users where teams_2019 is not null;')
    .then(users => {
      console.log(users)
      res.send(users)
    })
    .catch(error => {
      console.log('ERROR ' + error)
      res.send('Unable to retrieve picks: ' + error)
    })
})

app.get('/api/simscore', (req, res) => {
  db.query('select name, sim_score_2020 from users where teams_2020 is not null;')
    .then(users => {
      users.sort((a, b) => {
        return a.sim_score_2020 - b.sim_score_2020;
      })
      res.send(users);
    })
    .catch(error => {
      console.log('ERROR ' + error)
      res.send('Unable to retrieve simScores: ' + error)
    })
})

app.get('/api/picksbyschool', (req, res) => {
  db.query('select teams.id, teams.name, count(distinct users.id) from users join teams on teams.id = any (users.teams_2020) group by teams.id order by count desc, name asc;')
    .then(teams => {
      res.send(teams)
    })
    .catch(error => {
      console.log('ERROR ' + error)
      res.send('Unable to retrieve users: ' + error)
    })
})

app.get('/api/standings', (req, res) => {
  console.log('STANDINGS REQUEST')
  let resData = {}
  db.query('SELECT id, name, w2019, l2019, w2020, l2020, nickname, conference, prevgm, nextgm from teams;')
    .catch(error => {
      console.log('ERROR', error)
      res.send('Unable to retrieve teams: ' + error)
    })
    .then(data => {
      console.log('143')
      resData.teams = {};
      data.forEach(team => {
        resData.teams[team.id] = team;
      })
      db.query('SELECT name, teams_2020 from users where teams_2020 is not null order by name asc;')
        .then(data => {
          resData.users = data;
          resData.users.forEach((user, i) => {
            resData.users[i].wins = user.teams_2020.reduce((acc, val, i) => {
              return acc += resData.teams[user.teams_2020[i]].w2020;
            }, 0)
            resData.users[i].teams_2020 = resData.users[i].teams_2020.map(teamid => {
                return resData.teams[teamid];
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

app.get('/api/standingsDate', (req, res) => {
  db.query('select to_char(updated_at, \'mm/dd/yyyy hh:mi:ss\') as updated from update_timestamps where type = \'standings\';')
  .then(data => {
    res.send(data);
  })
  .catch(error => {
    console.log('ERROR', error)
    res.send('Unable to retrieve standings date: ' + error);
  })
})


// TODO: Change to post req
app.get('/api/teams', (req, res) => {
  console.log('Picks received!')
  let teamsArray = req.query.teamids.split(',')
  teamsArray = teamsArray.map(teamId => parseInt(teamId));
  db.query(`update users set teams_2020 = '{${teamsArray}}' where id=${parseInt(req.query.userid)} returning teams_2020`)
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

app.get('/api/pickfive/standings', (req, res) => {
  console.log('retrieving pickfive standings')
  res.send(pickFiveData.pickFiveStandings)
})

app.get('/api/pickfive/highscores', (req, res) => {
  console.log('retrieving pickfive highscores')
  res.send(pickFiveData.pickFiveHighScores)
})

app.get('/api/pickfive/champs', (req, res) => {
  console.log('retrieving pickfive champs')
  res.send(pickFiveData.pickFiveChamps)
})

// route for teamselect
app.get('/api/schools', (req, res) => {
  console.log('fetching team select school list');
  db.query('SELECT name, w2019, l2019 from teams WHERE w2019 is not null order by name asc;')
    .then(data => {
      res.send(data)
    })
    .catch(error => {
      console.log('ERROR', error)
      res.send('Unable to retrieve school list: ' + error);
    })
})

if (process.env.NODE_ENV === 'production') {
  console.log('NODE_ENV is production')
  // Serve any static files
  app.use('/', express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
