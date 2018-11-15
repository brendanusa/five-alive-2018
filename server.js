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

app.get('/api/simscore', (req, res) => {
  console.log('simscore')
  db.query('select name, sim_score_2018 from users;')
    .then((users => {
      users.sort((a, b) => {
        return a.sim_score_2018 - b.sim_score_2018;
      })
      res.send(users);
    }))
})

app.get('/api/picksbyschool', (req, res) => {
  console.log('pickbyschool')
  const teamsMap = { '1': 'test',
            '2': 'Abilene Christian',
            '3': 'Air Force',
            '4': 'Akron',
            '5': 'Alabama',
            '6': 'Alabama A&M',
            '7': 'Alabama State',
            '8': 'Alabama-Birmingham',
            '9': 'Albany (NY)',
            '10': 'Alcorn State',
            '11': 'American',
            '12': 'Appalachian State',
            '13': 'Arizona',
            '14': 'Arizona State',
            '15': 'Arkansas',
            '16': 'Arkansas State',
            '17': 'Arkansas-Pine Bluff',
            '18': 'Army',
            '19': 'Auburn',
            '20': 'Austin Peay',
            '21': 'Ball State',
            '22': 'Baylor',
            '23': 'Belmont',
            '24': 'Bethune-Cookman',
            '25': 'Binghamton',
            '26': 'Boise State',
            '27': 'Boston College',
            '28': 'Boston University',
            '29': 'Bowling Green State',
            '30': 'Bradley',
            '31': 'Brigham Young',
            '32': 'Brown',
            '33': 'Bryant',
            '34': 'Bucknell',
            '35': 'Buffalo',
            '36': 'Butler',
            '37': 'Cal Poly',
            '38': 'Cal State Bakersfield',
            '39': 'Cal State Fullerton',
            '40': 'Cal State Northridge',
            '41': 'Campbell',
            '42': 'Canisius',
            '43': 'Central Arkansas',
            '44': 'Central Connecticut State',
            '45': 'Central Florida',
            '46': 'Central Michigan',
            '47': 'Charleston Southern',
            '48': 'Charlotte',
            '49': 'Chattanooga',
            '50': 'Chicago State',
            '51': 'Cincinnati',
            '52': 'Citadel',
            '53': 'Clemson',
            '54': 'Cleveland State',
            '55': 'Coastal Carolina',
            '56': 'Colgate',
            '57': 'College of Charleston',
            '58': 'Colorado',
            '59': 'Colorado State',
            '60': 'Columbia',
            '61': 'Connecticut',
            '62': 'Coppin State',
            '63': 'Cornell',
            '64': 'Creighton',
            '65': 'Dartmouth',
            '66': 'Davidson',
            '67': 'Dayton',
            '68': 'Delaware',
            '69': 'Delaware State',
            '70': 'Denver',
            '71': 'DePaul',
            '72': 'Detroit Mercy',
            '73': 'Drake',
            '74': 'Drexel',
            '75': 'Duke',
            '76': 'Duquesne',
            '77': 'East Carolina',
            '78': 'East Tennessee State',
            '79': 'Eastern Illinois',
            '80': 'Eastern Kentucky',
            '81': 'Eastern Michigan',
            '82': 'Eastern Washington',
            '83': 'Elon',
            '84': 'Evansville',
            '85': 'Fairfield',
            '86': 'Fairleigh Dickinson',
            '87': 'Florida',
            '88': 'Florida A&M',
            '89': 'Florida Atlantic',
            '90': 'Florida Gulf Coast',
            '91': 'Florida International',
            '92': 'Florida State',
            '93': 'Fordham',
            '94': 'Fort Wayne',
            '95': 'Fresno State',
            '96': 'Furman',
            '97': 'Gardner-Webb',
            '98': 'George Mason',
            '99': 'George Washington',
            '100': 'Georgetown',
            '101': 'Georgia',
            '102': 'Georgia Southern',
            '103': 'Georgia State',
            '104': 'Georgia Tech',
            '105': 'Gonzaga',
            '106': 'Grambling',
            '107': 'Grand Canyon',
            '108': 'Green Bay',
            '109': 'Hampton',
            '110': 'Hartford',
            '111': 'Harvard',
            '112': 'Hawaii',
            '113': 'High Point',
            '114': 'Hofstra',
            '115': 'Holy Cross',
            '116': 'Houston',
            '117': 'Houston Baptist',
            '118': 'Howard',
            '119': 'Idaho',
            '120': 'Idaho State',
            '121': 'Illinois',
            '122': 'Illinois State',
            '123': 'Illinois-Chicago',
            '124': 'Incarnate Word',
            '125': 'Indiana',
            '126': 'Indiana State',
            '127': 'Iona',
            '128': 'Iowa',
            '129': 'Iowa State',
            '130': 'IUPUI',
            '131': 'Jackson State',
            '132': 'Jacksonville',
            '133': 'Jacksonville State',
            '134': 'James Madison',
            '135': 'Kansas',
            '136': 'Kansas State',
            '137': 'Kennesaw State',
            '138': 'Kent State',
            '139': 'Kentucky',
            '140': 'La Salle',
            '141': 'Lafayette',
            '142': 'Lamar',
            '143': 'Lehigh',
            '144': 'Liberty',
            '145': 'Lipscomb',
            '146': 'Little Rock',
            '147': 'Long Beach State',
            '148': 'Long Island University',
            '149': 'Longwood',
            '150': 'Louisiana',
            '151': 'Louisiana State',
            '152': 'Louisiana Tech',
            '153': 'Louisiana-Monroe',
            '154': 'Louisville',
            '155': 'Loyola (IL)',
            '156': 'Loyola (MD)',
            '157': 'Loyola Marymount',
            '158': 'Maine',
            '159': 'Manhattan',
            '160': 'Marist',
            '161': 'Marquette',
            '162': 'Marshall',
            '163': 'Maryland',
            '164': 'Maryland-Baltimore County',
            '165': 'Maryland-Eastern Shore',
            '166': 'Massachusetts',
            '167': 'Massachusetts-Lowell',
            '168': 'McNeese State',
            '169': 'Memphis',
            '170': 'Mercer',
            '171': 'Miami (FL)',
            '172': 'Miami (OH)',
            '173': 'Michigan',
            '174': 'Michigan State',
            '175': 'Middle Tennessee',
            '176': 'Milwaukee',
            '177': 'Minnesota',
            '178': 'Mississippi',
            '179': 'Mississippi State',
            '180': 'Mississippi Valley State',
            '181': 'Missouri',
            '182': 'Missouri State',
            '183': 'Missouri-Kansas City',
            '184': 'Monmouth',
            '185': 'Montana',
            '186': 'Montana State',
            '187': 'Morehead State',
            '188': 'Morgan State',
            '189': "Mount St. Mary's",
            '190': 'Murray State',
            '191': 'Navy',
            '192': 'Nebraska',
            '193': 'Nevada',
            '194': 'Nevada-Las Vegas',
            '195': 'New Hampshire',
            '196': 'New Mexico',
            '197': 'New Mexico State',
            '198': 'New Orleans',
            '199': 'Niagara',
            '200': 'Nicholls State',
            '201': 'NJIT',
            '202': 'Norfolk State',
            '203': 'North Carolina',
            '204': 'North Carolina A&T',
            '205': 'North Carolina Central',
            '206': 'North Carolina State',
            '207': 'North Carolina-Asheville',
            '208': 'North Carolina-Greensboro',
            '209': 'North Carolina-Wilmington',
            '210': 'North Dakota',
            '211': 'North Dakota State',
            '212': 'North Florida',
            '213': 'North Texas',
            '214': 'Northeastern',
            '215': 'Northern Arizona',
            '216': 'Northern Colorado',
            '217': 'Northern Illinois',
            '218': 'Northern Iowa',
            '219': 'Northern Kentucky',
            '220': 'Northwestern',
            '221': 'Northwestern State',
            '222': 'Notre Dame',
            '223': 'Oakland',
            '224': 'Ohio',
            '225': 'Ohio State',
            '226': 'Oklahoma',
            '227': 'Oklahoma State',
            '228': 'Old Dominion',
            '229': 'Omaha',
            '230': 'Oral Roberts',
            '231': 'Oregon',
            '232': 'Oregon State',
            '233': 'Pacific',
            '234': 'Penn State',
            '235': 'Pennsylvania',
            '236': 'Pepperdine',
            '237': 'Pittsburgh',
            '238': 'Portland',
            '239': 'Portland State',
            '240': 'Prairie View',
            '241': 'Presbyterian',
            '242': 'Princeton',
            '243': 'Providence',
            '244': 'Purdue',
            '245': 'Quinnipiac',
            '246': 'Radford',
            '247': 'Rhode Island',
            '248': 'Rice',
            '249': 'Richmond',
            '250': 'Rider',
            '251': 'Robert Morris',
            '252': 'Rutgers',
            '253': 'Sacramento State',
            '254': 'Sacred Heart',
            '255': 'Saint Francis (PA)',
            '256': "Saint Joseph's",
            '257': 'Saint Louis',
            '258': "Saint Mary's (CA)",
            '259': "Saint Peter's",
            '260': 'Sam Houston State',
            '261': 'Samford',
            '262': 'San Diego',
            '263': 'San Diego State',
            '264': 'San Francisco',
            '265': 'San Jose State',
            '266': 'Santa Clara',
            '267': 'Savannah State',
            '268': 'Seattle',
            '269': 'Seton Hall',
            '270': 'Siena',
            '271': 'SIU Edwardsville',
            '272': 'South Alabama',
            '273': 'South Carolina',
            '274': 'South Carolina State',
            '275': 'South Carolina Upstate',
            '276': 'South Dakota',
            '277': 'South Dakota State',
            '278': 'South Florida',
            '279': 'Southeast Missouri State',
            '280': 'Southeastern Louisiana',
            '281': 'Southern',
            '282': 'Southern California',
            '283': 'Southern Illinois',
            '284': 'Southern Methodist',
            '285': 'Southern Mississippi',
            '286': 'Southern Utah',
            '287': 'St. Bonaventure',
            '288': 'St. Francis (NY)',
            '289': "St. John's (NY)",
            '290': 'Stanford',
            '291': 'Stephen F. Austin',
            '292': 'Stetson',
            '293': 'Stony Brook',
            '294': 'Syracuse',
            '295': 'Temple',
            '296': 'Tennessee',
            '297': 'Tennessee State',
            '298': 'Tennessee Tech',
            '299': 'Tennessee-Martin',
            '300': 'Texas',
            '301': 'Texas A&M',
            '302': 'Texas A&M-Corpus Christi',
            '303': 'Texas Christian',
            '304': 'Texas Southern',
            '305': 'Texas State',
            '306': 'Texas Tech',
            '307': 'Texas-Arlington',
            '308': 'Texas-El Paso',
            '309': 'Texas-Rio Grande Valley',
            '310': 'Texas-San Antonio',
            '311': 'Toledo',
            '312': 'Towson',
            '313': 'Troy',
            '314': 'Tulane',
            '315': 'Tulsa',
            '316': 'UC-Davis',
            '317': 'UC-Irvine',
            '318': 'UC-Riverside',
            '319': 'UC-Santa Barbara',
            '320': 'UCLA',
            '321': 'University of California',
            '322': 'Utah',
            '323': 'Utah State',
            '324': 'Utah Valley',
            '325': 'Valparaiso',
            '326': 'Vanderbilt',
            '327': 'Vermont',
            '328': 'Villanova',
            '329': 'Virginia',
            '330': 'Virginia Commonwealth',
            '331': 'Virginia Tech',
            '332': 'VMI',
            '333': 'Wagner',
            '334': 'Wake Forest',
            '335': 'Washington',
            '336': 'Washington State',
            '337': 'Weber State',
            '338': 'West Virginia',
            '339': 'Western Carolina',
            '340': 'Western Illinois',
            '341': 'Western Kentucky',
            '342': 'Western Michigan',
            '343': 'Wichita State',
            '344': 'William & Mary',
            '345': 'Winthrop',
            '346': 'Wisconsin',
            '347': 'Wofford',
            '348': 'Wright State',
            '349': 'Wyoming',
            '350': 'Xavier',
            '351': 'Yale',
            '352': 'Youngstown State'}
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
      for (var key in picksBySchoolObj) {
        picksBySchoolArr.push({
          name: teamsMap[key],
          picks: picksBySchoolObj[key]
        })
      }
      picksBySchoolArr.sort((a, b) => {
        return b.picks - a.picks;
      })
      res.send(picksBySchoolArr)
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