var db = require('../db');

// use for modifying database

module.exports = {
  messages: {
    get: function () { // a function which produces all the messages
      db.connection.connect( (err) => {
        if ( err ) { throw err; }
        db.connection.query('SELECT * FROM messages', (err, result) => {
          if ( err ) { throw err; }
          console.log(result);
        });    
      });
    }, 
    post: function () { // a function which can be used to insert a message into the database
      db.connection.connect( (err) => {
        if ( err ) { throw err; }
        var sqlQuery = 'INSERT INTO messages (user_id, message) values ("austin", "hello world!")';
        db.connection.query(sqlQuery, (err, result, fields) => {
          if ( err ) { throw err; }
          console.log('res length' + result.length);
        });
        console.log('inside model.post');
      });
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

/* in mySQL
 * mysql> INSERT users (name) VALUES ('austin') ON DUPLICATE KEY UPDATE name=name;
 * 
 * mysql> INSERT INTO messages (message, user_id)
 *          SELECT 'hello world!', id
 *            FROM users WHERE name = 'christie' LIMIT 1;
 */