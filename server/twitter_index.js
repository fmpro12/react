var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'uvKIvLJeHeWooa3XTLwXJ91z1',
  consumer_secret: '2fHKG8YLCsaHrl8fnoJzZt8nOuTrFTrTyAMcdJnA0ApBYOzi0e',
  access_token_key: '451388888-y6jj3VEcdOysIn4SpAdAjWPaylMZTAZGiYFFEhJT',
  access_token_secret: 'c6u7cWZ0FZzpmNMtBWgUgC3r9tcJ7m0VjfLC19RcBGb6h'
});



var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

