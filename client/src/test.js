// import React from 'react';

// const test = props =>

//   <div><p>Brendan</p></div>

// export default test;

// UPDATE sal_emp SET pay_by_quarter = '{25000,25000,27000,27000}'
//     WHERE name = 'Carol';

// update users set teams_2018 = '{1,2,3,4,6}' where id=2;

//  insert into users (name, teams_2018, password) values ('bren2', '{1,2,3,4,5}', 'bren2345');

// heroku pg:push five_alive_2018 DATABASE_URL --app five-alive-

// update users set teams_2018 = '{3,5,10,14,18}' where id=3;

// VERY IMPORTANT:

//   2 | bren               | {2,5,8,12,18}         | bren1234
//  16 | Patrick Grove      | {84,136,234,323,326}  | schnad61
//  11 | Jeremy Aquino      | {72,122,160,228,323}  | ja902033
//   8 | Gilberto Estupinan | {190,281,286,291,343} | ge023980
//   6 | Amol Vohra         | {20,136,228,314,318}  | av361982
//  19 | Avi Ringer         | {72,122,126,200,343}  | nixon777
//  18 | Coreen Kopper      | {89,126,136,291,343}  | coco6142
//   4 | test test          | {2,3,4,5,6}           | 1111
//  15 | Kevin Meuse        | {122,148,190,286,328} | km016522
//  20 | Michael Martin     | {42,148,158,219,332}  | mm528372
//  10 | Dan Vogel          | {42,190,228,254,323}  | owlbike9

// FIXED:  
//  id |        name        |      teams_2018       | password 
// ----+--------------------+-----------------------+----------
//   5 | Reed Lyon          |                       | secret07
//   7 | Patrick Godfrey    |                       | batman02
//   9 | Chris Godfrey      |                       | yanktrac
//  12 | JP Kelly           |                       | mcuban68
//  14 | Michael Agresti    |                       | ma829388
//  17 | Adam Sidney        |                       | tyus0481
//  21 | Tim Falkner        |                       | falk9194
//   4 | test test          | {2,3,4,5,6}           | 1111
//  10 | Dan Vogel          | {42,190,228,254,323}  | owlbike9
//   3 | bren2              | {3,5,10,14,18}        | bren2345
//   2 | bren               | {5,8,11,15,21}        | bren1234
//  16 | Patrick Grove      | {87,139,237,326,329}  | schnad61
//  11 | Jeremy Aquino      | {75,125,163,231,326}  | ja902033
//   8 | Gilberto Estupinan | {193,284,289,294,346} | ge023980
//   6 | Amol Vohra         | {23,139,231,317,321}  | av361982
//  19 | Avi Ringer         | {75,125,129,203,346}  | nixon777
//  18 | Coreen Kopper      | {92,129,139,294,346}  | coco6142
//  15 | Kevin Meuse        | {125,151,193,289,331} | km016522
//  20 | Michael Martin     | {45,151,161,222,335}  | mm528372
//  13 | Andrew Collins     | {45,193,231,257,326}  | collns56

// heroku pg:pull postgresql-rigid-35531 five_alive_2018 --app five-alive-2018

// pg_upgrade -v \
//     -d /usr/local/var/postgres \
//     -D /usr/local/var/postgres10.1 \
//     -b /usr/local/Cellar/postgresql/9.6.4/bin/ \
//     -B /usr/local/Cellar/postgresql/10.1/bin

// cp -a /users/bbansavage/Library/Application\ Support/Postgres/var-9.6/. /usr/local/var/postgres

// DATABASE_URL=$(heroku config:get DATABASE_URL -a your-app) your_process

  // const validCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

  // const caps = (str) => {
  //   return str.map(char => char.toUpperCase())
  // }

  // console.log(caps(validCharacters))

  console.log(new Date())

// insert into messages (user_id, user_name, text, created) values (3, 'Brendan Bansavage', 'test2', '2018-11-06T21:46:45.803Z');

var obj = {'Alex Raup':
   [ 'Connecticut',
     'George Mason',
     'Penn State',
     'Princeton',
     'Virginia' ],
  'Justin McNamee':
   [ 'Connecticut',
     'Georgetown',
     'Kansas',
     'Louisiana State',
     'Washington' ],
  'Reed Lyon':
   [ 'Gonzaga', 
   'Iowa State', 
   'Saint Louis', 
   'Texas', 
   'Wisconsin' ],
  'Dillon Smith':
   [ 'Harvard',
     'Kansas State',
     "St. John's (NY)",
     'Tennessee',
     'Wisconsin' ],
  'Rob Coloney':
   [ 'Kansas',
     'Louisiana State',
     'Nevada',
     'Pepperdine',
     "St. John's (NY)" ],
  'Greg Ortiz':
   [ 'Duke', 
   'George Mason', 
   'Illinois State', 
   'Indiana', 
   'Texas' ],
  'French-Reiman':
   [ 'Indiana',
     'Kentucky',
     'Louisiana State',
     'Oregon',
     "St. John's (NY)" ],
  'Casey Schutte':
   [ 'Harvard',
     'Marquette',
     'Michigan State',
     'Minnesota',
     'Wisconsin' ],
  'Patrick Grove':
   [ 'Florida', 
   'Kentucky', 
   'Pittsburgh', 
   'Vanderbilt', 
   'Virginia' ],
  'Jeremy Aquino': 
  [ 'Duke', 
  'Indiana', 
  'Maryland', 
  'Oregon', 
  'Vanderbilt' ],
  'Gilberto Estupinan':
   [ 'Nevada',
     'Southern Methodist',
     "St. John's (NY)",
     'Syracuse',
     'Wisconsin' ],
  'Amol Vohra':
   [ 'Belmont',
     'Kentucky',
     'Oregon',
     'UC-Irvine',
     'University of California' ],
  'Avi Ringer':
   [ 'Duke', 
   'Indiana', 
   'Iowa State', 
   'North Carolina', 
   'Wisconsin' ],
  'Coreen Kopper':
   [ 'Florida State',
     'Iowa State',
     'Kentucky',
     'Syracuse',
     'Wisconsin' ],
  'Kevin Meuse':
   [ 'Indiana',
     'Louisiana State',
     'Nevada',
     "St. John's (NY)",
     'Virginia Tech' ],
  'Michael Martin':
   [ 'Central Florida',
     'Louisiana State',
     'Marquette',
     'Notre Dame',
     'Washington' ],
  'Johnny Vohra':
   [ 'Florida State',
     'Kentucky',
     'Oregon',
     "St. John's (NY)",
     'Vanderbilt' ],
  'Adam Sidney': 
  [ 'Duke', 
  'Harvard', 
  'Indiana', 
  'Iowa State', 
  'Oregon' ],
  'Andrew Soltish': 
  [ 'Bryant', 
  'Kansas', 
  'Michigan', 
  'Siena', 
  'Syracuse' ],
  'Chris Clark':
   [ 'Central Florida',
     'Indiana',
     'Seton Hall',
     'Texas A&M',
     'Texas Christian' ],
  'Mark McGill':
   [ 'Connecticut',
     'Duke',
     'Northern Kentucky',
     "St. John's (NY)",
     'UC-Irvine' ],
  'Troy Davis':
   [ 'Connecticut', 
   'Davidson', 
   'Indiana', 
   'Kentucky', 
   'Oregon' ],
  'Brendan Bansavage':
   [ 'Central Florida',
     'Connecticut',
     'Nevada',
     'Oregon',
     'Wisconsin' ],
  'JP Kelly':
   [ 'Canisius',
     'Long Island University',
     'Massachusetts',
     'Old Dominion',
     'Southern Utah' ],
  'Noah Garber':
   [ 'Connecticut',
     'Kentucky',
     "St. John's (NY)",
     'Syracuse',
     'Washington' ],
  'Michael Agresti':
   [ 'Duke', 
   'Indiana', 
   'Iowa State', 
   'Kentucky', 
   "St. John's (NY)" ],
  'Joe Franza':
   [ 'Indiana', 
   'Kansas State', 
   'Kentucky', 
   'Richmond', 
   'UCLA' ],
  'Dan Vogel':
   [ 'Central Florida',
     'Nevada',
     'Oregon',
     'Saint Louis',
     'Vanderbilt' ],
  'Chris Godfrey':
   [ 'Duke', 
   'Kentucky', 
   'Ohio State', 
   'San Jose State', 
   'Wisconsin' ],
  'Tim Falkner':
   [ 'Evansville',
     'Maine',
     'McNeese State',
     'Texas',
     'Wichita State' ],
  'Andrew Collins':
   [ 'Duke', 
   'Harvard', 
   'Kentucky', 
   'Pepperdine', 
   'Washington' ],
  'Patrick Godfrey': 
  [ 'Dayton', 
  'Duke', 
  'Georgetown', 
  'Oregon', 
  'Stanford' ]};

var str = JSON.stringify(obj)

// while (str.includes(':')) {
//   str = str.replace(':', '')
// }

while (str.includes('],')) {
  str = str.replace('],', '\n')
}

while (str.includes('[')) {
  str = str.replace('[', '')
}

console.log(str)
// for (var key in obj) {

//   console.log(key, ': ', obj[key])
// }