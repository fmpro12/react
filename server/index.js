const express = require('express');
const bodyParser = require('body-parser');
const users = require('./users/server.js');
const posts = require('./posts/posts.js');
const followers = require('./followers/index.js');
const server = express();
const path = require('path');
const messages = require("./messages/index")
var params = {screen_name: 'nodejs'};

const distFolder = path.join(__dirname, '../my-app/build')

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'uvKIvLJeHeWooa3XTLwXJ91z1',
  consumer_secret: '2fHKG8YLCsaHrl8fnoJzZt8nOuTrFTrTyAMcdJnA0ApBYOzi0e',
  access_token_key: '451388888-y6jj3VEcdOysIn4SpAdAjWPaylMZTAZGiYFFEhJT',
  access_token_secret: 'c6u7cWZ0FZzpmNMtBWgUgC3r9tcJ7m0VjfLC19RcBGb6h'
});




client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});




server.use(bodyParser.json());
server.use("/api/users/", users);
server.use("/api/posts/", posts);
server.use("/api/followers", followers);
server.use("/api/messages", messages);


server.use(express.static(distFolder))


server.listen(process.env.PORT || 9090)
