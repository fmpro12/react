const mongoose = require('../db');
var mongoosePaginate = require('mongoose-paginate');

const postSchema = new mongoose.Schema ({
    title: String,
    body: String,    
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    
});

const Post = mongoose.model('Post', postSchema);

postSchema.plugin(mongoosePaginate);

module.exports = Post;