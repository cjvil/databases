var db = require('../db');

// use for modifying database

module.exports = {
  messages: {
    get: function () {
      db.connection.connect( (err) => {
        if ( err ) { throw err; }
        console.log('connected to models');
      });
      db.connection.end();
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
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