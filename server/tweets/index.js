const express = require('express');
const router = express.Router();
var Twitter = require('twitter');
var params = {screen_name: 'adidas', tweet_mode: 'extended'};
const config = require('./config')

router.get('/', (req, res) => {
  client.get('statuses/user_timeline', params, function(error, tweets, response) {    
    if (!error) {          
      res.send(tweets); 
    } 
    else {
      res.status(500).json({ error: error });
    }}
  )})
    

var client = new Twitter(config)




module.exports = router;