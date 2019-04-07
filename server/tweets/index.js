const express = require('express');
const router = express.Router();
var Twitter = require('twitter');
const dotenv = require('dotenv')
const result = dotenv.config()
 


router.get('/', (req, res) => {  
  const params = {screen_name: req.query.screen_name, tweet_mode: 'extended'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {   
    if (!error) {          
      res.json(tweets); 
    } 
    else {
      res.status(500).json({ error: error });      
    }}
  )})
    

  const client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    request_options: {
      proxy: process.env.PROXY
    }
  });



module.exports = router;