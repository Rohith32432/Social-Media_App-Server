const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    name: String,
    description: String,
    Postpic:String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    likes: { type: Number, default: 0 },
    likedusers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    comment: {
        cmt:{ type: String}, 
        users: [
          { type: mongoose.Schema.Types.ObjectId,ref:'User'}], 
           date: { type: Date, default: Date.now() }
    },
    date: { type: Date, default: Date.now() }

});

const post = mongoose.model('post', postSchema);

module.exports = post;
