var mongoose = require('mongoose');

var ReviewsSchema = new mongoose.Schema({
    body: String,
    author: String,
    review: String,
    upvotes: {type: Number, default: 0},
    post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'}
});

ReviewsSchema.methods.upvoteComment = function (cb) {
    this.upvotes += 1;
    this.save(cb);
};

module.exports = mongoose.model('Comment', ReviewsSchema);