const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    description: String,
    password:String,
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    pic:{type:String}
    
});

const User = mongoose.model('User', userSchema);

module.exports = User;
