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
    dienthoai:{
        type: String,
    },
    email:{
        type: String,
    },
    ngaysinh:{
        type: String,
    },
    tuoi:{
        type: Number,
    },
    linhvucchuyenmon:{
        type: Array,
    },
    chungchi:{
        type:Array,
    },
    kynang:{
        type: Array,
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
        type: Array,
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
    gioitinh:{
        type: String,
        default:""
    },
    ngonngucuamau:{
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