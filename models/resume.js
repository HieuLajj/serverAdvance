const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const resumeSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    },
    ten:{
        type: String,
    },
    chieucao:{
        type: Number,
    },
    cannang:{
        type: Number,
    },
    kinhnghiem:{
        type: Array,
    },
    hocvan:{
        type: Array,
    },
    sohokhau:{
        type: String,
    },
    socccd:{
        type: String,
    },
    sothich:{
        type: String,
    },
    tinhcach:{
        type: String,
    },
    quequan:{
        type: String,
    },
    trinhdovanhoa:{
        type: String,
    },
    nguyenvong:{
        type: String,
    },
    nganhnghe:{
        type: String,
    },
    dieukiendacbiet:{
        type: String,
    },
    mucluong:{
        type: Number,
    },
    vung:{
        type: String,
    },
    tinh:{
        type: String,
    },
    diachihientai:{
        type: String,
    },
    anhchungchi:{
        type: String
    },
    anhdaidien:{
        type: String
    },
    mau:{
        type: String
    },
    anhbieumau:{
        type: String
    },
    phanloaibieumau:{
        type: String
    }
});
module.exports = mongoose.model('Resume',resumeSchema)