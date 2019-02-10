const express = require('express');
const router = express.Router();
const Post = require('./PostModel');



router.get('/', (req, res) => {
	const userId = req.query.userId;
	const query = req.query.query;
	const filter = {};

	if (userId) filter.author = userId;
	if (query) {
		const rgx = new RegExp(query, "i");
		filter.$or =[
			{ name: rgx },
			{ lastname: rgx },
			{ email: rgx },
		];
	}
	Post.find(filter)
	    .populate('author')
	   .then(data => res.send(data))
	   .catch(e => res.status(400).send(e.message));
 
	});

	router.post('/', (req, res) => {
		const post = new Post(req.body);
		post.save()
		.then(data => res.send(data))
		.catch(e => res.status(400).send(e.message));
	});
	
	 router.get('/:postId', (req, res) => {	 
		Post
		.paginate (
{ post: req.params.postId },
{
	page,
	limit: 3,
	populate: ['author'],
}
	)
		 
		 .then(data => {
			 if(post)
			 res.send(data);
			 else
			 res.status(404).send("Post not found");
		 })
		 .catch (e => res.status(400).send("Post not exist"));
	 });
	
	 router.put('/:postId', (req, res) => {	 
		 findByIdAndUpdate(req.params.postId, req.body)
		 .then(data => {
			if(post)
			res.send(data);
			else
			res.status(404).send("Post not found");
		})
		.catch (e => res.status(400).send("Post not exist"));
	});
	
	 router.delete('/:postId', (req, res) => {	 
		Post.findByIdAndRemove(req.params.postId)
		.then(data => {
			if(post)
			res.send(data);
			else
			res.status(404).send("Post not found");
		})
		.catch (e => res.status(400).send("Post not exist"));
	});
	
	module.exports = router;