const express = require('express');
const router = express.Router();
const Follower = require('./FollowersModel');

router.get('/', (req, res) => {
 Follower.find({})
	.then(data => res.send(data));
 });

 router.post('/', (req, res) => {
	const post = new Follower(req.body);
	post.save()
	.then(data => res.send(data))
	.catch(e => res.status(400).send(e.message));
});

 router.get('/:userId', (req, res) => {	 
	 Follower.findById(req.params.userId)
	 .then(data => {
		 if(follower)
		 res.send(data);
		 else
		 res.status(404).send("Follower not found");
	 })
	 .catch (e => res.status(400).send("Follower not exist"));
 });

 router.put('/:userId', (req, res) => {	 
	 findByIdAndUpdate(req.params.userId, req.body)
	 .then(data => {
		if(follower)
		res.send(data);
		else
		res.status(404).send("Follower not found");
	})
	.catch (e => res.status(400).send("Follower not exist"));
});

 router.delete('/:userId', (req, res) => {	 
	Follower.findByIdAndRemove(req.params.userId)
	.then(data => {
		if(follower)
		res.send(data);
		else
		res.status(404).send("Follower not found");
	})
	.catch (e => res.status(400).send("Follower not exist"));
});

module.exports = router;