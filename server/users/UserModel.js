const mongoose = require('../db');

const userSchema = new mongoose.Schema ({
    name: String,
    lastName: String,
    email: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;