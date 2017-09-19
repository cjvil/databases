var db = require('../db');

// use for modifying database

module.exports = {
  messages: {
    get: function (response) { // a function which produces all the messages
      db.connection.query('SELECT * FROM messages', (err, results) => {
        if ( err ) { throw err; }
        response.end(JSON.stringify({results}));
      });    
    }, 
    post: function (body, response) { // a function which can be used to insert a message into the database
      var insertMessage = 'INSERT INTO messages (message, roomname, user_id) SELECT ?, ?, id FROM users WHERE name = ? LIMIT 1';
      var messageParams = [body.message, body.roomname, body.username];
      db.connection.query(insertMessage, messageParams, (err) => {
        if ( err ) { throw err; }
      });
    } 
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (body) {
      var params = [body.username];
      var insertUser = 'INSERT INTO users (name) VALUES (?) ON DUPLICATE KEY UPDATE name=name';
      db.connection.query(insertUser, params, (err) => {
        if ( err ) { throw err; }
      });
    }
  }
};

/* in mySQL
 * mysql> INSERT users (name) VALUES ('austin') ON DUPLICATE KEY UPDATE name=name;
 * 
 * mysql> INSERT INTO messages (message, roomname, user_id)
 *          SELECT 'hello world!', 'lobby', id
 *            FROM users WHERE name = 'christie' LIMIT 1;
 */