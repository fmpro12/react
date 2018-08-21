const express = require('express');
// let collection = require('./collection');
// const app = express();
const db = require('../db');
const router = express.Router();
const User = require('./UserModel');



//router.get('/', (req, res) => {
	// collection
	// .getAllUsers()
	// .then(data => res.send(data));
// });

router.post('/', (req, res) => {
	const user = new User(req.body);
	user.save();
	res.send(user.toJSON());
});

// router.get('/:userId', (req, res) => {
	// collection
	// .getUser(req.params.userId)
	// .then(data => res.send(data));
// });

// router.put('/:userId', (req, res) => {
	// collection
	// .updateUser(req.params.userId, req.body)
	// .then(data => res.send(date));
// });

// router.delete('/:userId', (req, res) => {
	// collection
	// .deleteUser(req.params.userId)
	// .then(data => res.send(data));
// });

module.exports = router;