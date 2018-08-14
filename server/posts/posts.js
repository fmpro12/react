const router = require('express').Router();
let collection = require('./collection');
const{ ObjectID } = require('mongodb');



router.get('/', (req, res) => {
	collection
	.getAllPosts()
	.then(data => res.send(data));
});

router.post('/', (req, res) => {
	collection
	.insertPost(req.body)
	.then(post => res.send(post));
});

router.get('/:postId', (req, res) => {
	collection
	.getPost(req.params.postId)
	.then(data => res.send(data));
});

router.put('/:postId', (req, res) => {
	collection
	.updatePost(req.params.postId, req.body)
	.then(data => res.send(date));
});

router.delete('/:postId', (req, res) => {
	collection
	.deletePost(req.params.postId)
	.then(data => res.send(data));
});

module.exports = router;