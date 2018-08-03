const express = require('express');
const bodyParser = require('body-parser');
const users = require('./users/server.js');
const server = express();
const posts = require('./posts/posts.js')

server.use(bodyParser.json());

server.use("/api/users/", users);
server.use("/api/posts/", posts);
server.listen(9090);