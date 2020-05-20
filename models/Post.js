const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    author: {type: String, required: true},
    category : {type: Schema.Types.ObjectId, ref: 'categories' , required: true},
    slug : {type: String, required: true},
    image: {type: String, required: true},
    date: {type: Date, default: Date.now}
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;