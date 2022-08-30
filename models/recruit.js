const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const recruitSchema = new mongoose.Schema({
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
        type: String,
    },
    dotuoi:{
        type: Number,
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
});
module.exports = mongoose.model('Recruit',recruitSchema)