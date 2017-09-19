var db = require('../db');

// use for modifying database

module.exports = {
  messages: {
    get: function () { // a function which produces all the messages
      db.connection.query('SELECT * FROM messages', (err, result) => {
        if ( err ) { throw err; }
        console.log(result);
      });    
    }, 
    post: function () { // a function which can be used to insert a message into the database
      var insertMessage = 'INSERT INTO messages (user_id, message) values ("austin", "hello world!")';
      db.connection.query(insertMessage, [], (err, result, fields) => {
        if ( err ) { throw err; }
        db.connection.query('SELECT * FROM messages', [], (err, results) => {
          console.log('our own messages', JSON.stringify(results));
          console.log('messages length ', results.length);
        });
      });
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {
      console.log('inside models.users.post');
      var insertUser = 'INSERT users (name) VALUES ("austin") ON DUPLICATE KEY UPDATE name=name';
      db.connection.query(insertUser, [], (err, result, fields) => {
        if ( err ) { throw err; }
        db.connection.query('SELECT * FROM users', [], (err, results) => {
          console.log('our own users', JSON.stringify(results));
          console.log('users length ', results.length);
        });
      });
    }
  }
};

/* in mySQL
 * mysql> INSERT users (name) VALUES ('austin') ON DUPLICATE KEY UPDATE name=name;
 * 
 * mysql> INSERT INTO messages (message, user_id)
 *          SELECT 'hello world!', id
 *            FROM users WHERE name = 'christie' LIMIT 1;
 */