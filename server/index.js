const express = require('express');
const bodyParser = require('body-parser');
const users = require('./users/server.js');
const posts = require('./posts/posts.js');
const followers = require('./followers/index.js');
const server = express();
const path = require('path');
const messages = require("./messages/index")
const tweets = require ('./tweets')

const distFolder = path.join(__dirname, '../my-app/build')


server.use(bodyParser.json());
server.use("/api/users/", users);
server.use("/api/posts/", posts);

server.use("/api/followers", followers, function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
}
);

server.use("/api/messages", messages);
server.use("/api/tweets", tweets, function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
}
)


server.use(express.static(distFolder))


server.listen(process.env.PORT || 9090)
