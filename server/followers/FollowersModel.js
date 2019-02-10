const mongoose = require('../db');

const followerSchema = new mongoose.Schema ({
    name: String,
    id: Number,
    img: { data: Buffer, contentType: String }
});

const Follower = mongoose.model('Follower', followerSchema);

module.exports = Follower;