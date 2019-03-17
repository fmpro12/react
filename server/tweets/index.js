const express = require('express');
const router = express.Router();
var Twitter = require('twitter');
var params = {screen_name: 'nodejs'};

router.get('/', (req, res) => {
  client.get('statuses/user_timeline', params, function(error, tweets, response) {    
    if (!error) {
      console.log(tweets);
      res.send(tweets);          
    } 
    else {
      res.status(500).json({ error: error });
    }}
  )})
    

var client = new Twitter({
  consumer_key: 'uvKIvLJeHeWooa3XTLwXJ91z1',
  consumer_secret: '2fHKG8YLCsaHrl8fnoJzZt8nOuTrFTrTyAMcdJnA0ApBYOzi0e',
  access_token_key: '451388888-y6jj3VEcdOysIn4SpAdAjWPaylMZTAZGiYFFEhJT',
  access_token_secret: 'c6u7cWZ0FZzpmNMtBWgUgC3r9tcJ7m0VjfLC19RcBGb6h'
});



module.exports = router;