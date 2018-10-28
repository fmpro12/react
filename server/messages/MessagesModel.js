const mongoose = require('../db');

const messagesSchema = new mongoose.Schema ({
    body: String,
    name: String,
    email: String,
    postId: Number
});

const Message = mongoose.model('Messages', messagesSchema);

module.exports = Message;