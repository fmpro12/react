const express = require('express');
const users = require('./users.json');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');

app.use(bodyParser.json());

app.get('/users', (req, res) => res.send(users));

app.post('/users', (req, res) => {
    const user = users.find(user => user.id = req.body.id);

    if(!user){

    users.push(req.body);             
    res.send(req.body);
    fs.writeFileSync('./users.json', JSON.stringify(users))

    }else{
        res
        .status(400)
        .send(`User with ID ${user.id} already exist`);
    }
}); 

app.get('/users/:userId', (req, res) => {
    const user = users.find(user => user.id = req.params.userId);
    res.send(user);
});

app.listen(3000);