const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const postSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    desc: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recruit',
        require: true
    },
    saves : [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],    
    recruitments : [{type: mongoose.Schema.Types.ObjectId, ref: "Resume"}],
    created: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('Post', postSchema)