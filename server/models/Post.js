const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: String,
}, { timestamps: true });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
