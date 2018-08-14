const connectdb = require('../db');
const { ObjectID } = require('mongodb');

function getPostsCollection() {
	return connectdb()
		.then((db) => {
			return db.collection('Posts');
		});
}

function getAllPosts() {
	return getPostsCollection()
		.then((collection) => {
			return collection.find({}).toArray();
		});
}

function getPost(id) {
	return getPostsCollection()
		.then((collection) => {
			return collection.findOne({ _id: ObjectID(id) });
		});
}

function updatePost(PostId, params) {
	return getPostsCollection()
	.then(collection => collection
		.updateOne(
			{_id: ObjectID(PostId) },
			{ $set: params}
		));
}

function insertPost(Post){
	return getPostsCollection()
	.then(collection => collection.insertOne(Post));
}

function deletePost(PostId){
	return getPostsCollection
	.then(collection => collection.deleteOne({ _id: ObjectID(id) }))
};

module.exports = {
	getAllPosts,
	getPost,
	insertPost,
	deletePost,
	updatePost
};