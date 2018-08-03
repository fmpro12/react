const express = require('express');
const bodyParser = require('body-parser');
const users = require('./users/server.js');
const server = express();

server.use(bodyParser.json());

server.use("/api/users/", users);

server.listen(9090);