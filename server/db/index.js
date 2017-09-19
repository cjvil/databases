var mysql = require('mysql');

// helper functions

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'plantlife',
  database: 'chat'
});

// connection.connect((err)=> {
//   if (err) {
//     throw err;
//   } else {
//     console.log('connected to database');
//   }

// });

// connection.end();

exports.connection = connection;
