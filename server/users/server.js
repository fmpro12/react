const express = require('express');
const router = express.Router();
const User = require('./UserModel');



router.get('/', (req, res) => {
 User.find({})
	.then(data => res.send(data));
 });

 router.post('/', (req, res) => {
	const post = new User(req.body);
	post.save()
	.then(data => res.send(data))
	.catch(e => res.status(400).send(e.message));
});

 router.get('/:userId', (req, res) => {	 
	 User.findById(req.params.userId)
	 .then(data => {
		 if(user)
		 res.send(data);
		 else
		 res.status(404).send("User not found");
	 })
	 .catch (e => res.status(400).send("User not exist"));
 });

 router.put('/:userId', (req, res) => {	 
	 findByIdAndUpdate(req.params.userId, req.body)
	 .then(data => {
		if(user)
		res.send(data);
		else
		res.status(404).send("User not found");
	})
	.catch (e => res.status(400).send("User not exist"));
});

 router.delete('/:userId', (req, res) => {	 
	User.findByIdAndRemove(req.params.userId)
	.then(data => {
		if(user)
		res.send(data);
		else
		res.status(404).send("User not found");
	})
	.catch (e => res.status(400).send("User not exist"));
});

module.exports = router;