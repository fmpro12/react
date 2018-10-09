const express = require('express');
const bodyParser = require('body-parser');
const users = require('./users/server.js');
const posts = require('./posts/posts.js');
const server = express();
const path = require('path');


const distFolder = path.join(__dirname, '../my-app/build')

server.use(bodyParser.json());

server.use("/api/users/", users);
server.use("/api/posts/", posts);

server.use(express.static(distFolder))

server.listen(process.env.PORT || 9090)

