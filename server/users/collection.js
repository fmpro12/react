const connectdb = require('../db');
const { ObjectID } = require('mongodb');

function getUsersCollection() {
	return connectdb()
		.then((db) => {
			return db.collection('users');
		});
}

function getAllUsers() {
	return getUsersCollection()
		.then((collection) => {
			return collection.find({}).toArray();
		});
}

function getUser(id) {
	return getUsersCollection()
		.then((collection) => {
			return collection.findOne({ _id: ObjectID(id) });
		});
}

function updateUser(userId, params) {
	return getUsersCollection()
	.then(collection => collection
		.updateOne(
			{_id: ObjectID(userId) },
			{ $set: params}
		));
}

function insertUser(user){
	return getUsersCollection()
	.then(collection => collection.insertOne(user));
}

function deleteUser(userId){
	return getUsersCollection
	.then(collection => collection.deleteOne({ _id: ObjectID(id) }))
};

module.exports = {
	getAllUsers,
	getUser,
	insertUser,
	deleteUser,
	updateUser
};