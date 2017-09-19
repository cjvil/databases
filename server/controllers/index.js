// main http request code

var models = require('../models');
var app = require('../app.js').app;

module.exports = {
  messages: {
    // retrieve all messages from database
    get: function (req, res) { // a function which handles a get request for all messages
      models.messages.get(res);
    }, 
    post: function (req, res) { // a function which handles posting a message to the database
      models.messages.post(req.body);
      res.end();
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      models.users.post(req.body);
      res.end();
    }
  }
};

