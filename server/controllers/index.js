// main http request code

var models = require('../models');
var app = require('../app.js').app;

module.exports = {
  messages: {
    // retrieve all messages from database
    get: function (req, res) { // a function which handles a get request for all messages
      console.log('get messages');
      models.messages.get();
      res.end();
    }, 
    post: function (req, res) { // a function which handles posting a message to the database
      console.log('posted to messages');
      models.messages.post();
      res.end();
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

