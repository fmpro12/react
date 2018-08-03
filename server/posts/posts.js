const express = require('express');
const posts = require('./posts.json');
const bodyParser = require('body-parser');
const app = express();
const fs = require('fs');
const router = express.Router();

function getPost(id) {
	return posts.find(post => post.id == id);
}

function saveJson(posts) {
	fs.writeFileSync(__dirname + '/.posts.json', JSON.stringify(posts));
}

router.get('/', (req, res) => {
	res.send(posts);
});

router.post('/', (req, res) => {
	const post = getpost(req.body.id);

	if(!post) {
		posts.push(req.body);
		res.send(req.body);
		saveJson(posts);
	} else {
		res
			.status(400)
			.send(`post with ID ${req.body.id} already exists`);
	}
});

router.get('/:postId', (req, res) => {
	const post = getpost(req.params.postId);
	if(post) {
		res.send(post);
	} else {
		res
			.status(404)
			.send("post not found!");
	}
});

router.put('/:postId', (req, res) => {
	posts = posts.filter(post => post.id != req.params.postId);
	posts.push(req.body);

	res.send(req.body);
	saveJson(posts);
});

router.delete('/:postId', (req, res) => {
	posts = posts.filter(post => post.id != req.params.postId);

	res.send("OK");
	saveJson(posts);
});

module.exports = router;