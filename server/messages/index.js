const express = require('express');
const router = express.Router();
const Message = require('./MessagesModel');

router.get('/', (req, res) => {
 Message.find({})
	.then(data => res.send(data));
 });

 router.post('/', (req, res) => {
	const post = new Message(req.body);
	post.save()
	.then(data => res.send(data))
	.catch(e => res.status(400).send(e.message));
});

 router.get('/:postId', (req, res) => {	 
	 Message.findById(req.params.postId)
	 .then(data => {
		 if(message)
		 res.send(data);
		 else
		 res.status(404).send("message not found");
	 })
	 .catch (e => res.status(400).send("message not exist"));
 });

 router.put('/:postId', (req, res) => {	 
	 findByIdAndUpdate(req.params.postId, req.body)
	 .then(data => {
		if(message)
		res.send(data);
		else
		res.status(404).send("message not found");
	})
	.catch (e => res.status(400).send("message not exist"));
});

 router.delete('/:postId', (req, res) => {	 
	Message.findByIdAndRemove(req.params.postId)
	.then(data => {
		if(message)
		res.send(data);
		else
		res.status(404).send("message not found");
	})
	.catch (e => res.status(400).send("message not exist"));
});

module.exports = router;