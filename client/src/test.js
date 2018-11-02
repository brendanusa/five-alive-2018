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

const addThree = (str, id) => {
  arr = str.replace('{', '').replace('}', '').split(',')
  arr = arr.map(num => {
    num = parseInt(num) + 3;
    return num.toString()
  });
  return 'update users set teams_2018 = \'{' + arr.join(',') + '}\' where id=' + id.toString() + ';';
}

console.log(addThree('{84,136,234,323,326}', 16))