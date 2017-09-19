// main http request code

var models = require('../models');
var app = require('../app.js').app;

module.exports = {
  messages: {
    // retrieve all messages from database
    get: function (req, res) { // a function which handles a get request for all messages
      
    }, 
    post: function (req, res) { // a function which handles posting a message to the database
      console.log('posted to messages');
      res.end();
      // app.post(/* path */, (req, res) => {
      //   console.log('posted');
      //   res.end();
      // });
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log('posted to users');
      res.end();
    }
  }
};

