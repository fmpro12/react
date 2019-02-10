const mongoose = require('../db');

const messagesSchema = new mongoose.Schema ({
    body: String,
    name: String,
    tweet: String,
    postId: Number, 
    id: Number,
    img: { data: Buffer, contentType: String }
});

const Message = mongoose.model('Messages', messagesSchema);

module.exports = Message;