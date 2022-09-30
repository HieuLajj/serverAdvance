const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const postSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    luongcoban:{
        type: Number,
    },
    soluongtuyen:{
        type: Number,
    },
    gioitinh:{
        type: Array,
    },
    dotuoi:{
        type: Array,
    },
    trinhdongoaingu:{
        type: String,
    },
    kinhnghiem:{
        type: String,
    },
    yeucaukhac:{
        type: String,
    },
    thongtinlienhe:{
        type: String,
    },
    nhatuyendung:{
        type: String,
    },
    khuvuc:{
        type: String,
    },
    diachilamviec:{
        type: String,
    },
    nganhnghe:{
        type: String
    },
    anhtuyendung:{
        type: String,
    },
    motacongviec:{
        type: String,
    },
    yeucauungvien:{
        type: String,
    },
    saves : [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],    
    recruitments : [{type: mongoose.Schema.Types.ObjectId, ref: "Resume"}],
    created: {
        type: Date,
        default: Date.now
    },
});
module.exports = mongoose.model('Post', postSchema)