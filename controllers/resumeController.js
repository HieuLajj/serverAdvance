const jwt =  require('jsonwebtoken');
var reload = require('reload')
const User = require("../models/user");
const Resume = require("../models/resume");
const sharp = require('sharp');
const bcrypt = require('bcrypt');
const cloudinary = require('../utils/cloudinary');
const fs = require('fs');
//const cloudinary = require('../helper/imageUpload')
//const blueResume = require("./docs/blue-resume");
const blueResume = require("../docs/blue-resume");
const nodeHtmlToImage = require('node-html-to-image')
const resumeController = {
    addResume1: async(req,res)=>{
        const {user} = req;
        if(!user) return res
            .status(401)
            .json({success:false, message: 'unauthorized acesss'
                })
        try {
            const image = await cloudinary.uploader.upload(req.file.path,{
                public_id: `${user._id}_profile`,
                width: 500,
                height:500,
                crop: 'fill'
            });
            const result = await Resume.create({
                user: req.user._id,
                anhdaidien: image.url,
            });
            res.json({success: true,id:result.id})
        } catch (error) {
            console.log(error)
        res.status(500).json({
            success: false,
            message: error
        })
        }
    },
    addResume2: async(req,res)=>{
        const {id} = req?.params;
        const {user} = req;

        let anh = await Resume.findById(id);
        if(!user) return res
            .status(401)
            .json({success:false, message: 'unauthorized acesss'
                })
        try {
            


            const {ten,chieucao,cannang,kinhnghiem,hocvan,
            sohokhau,socccd,sothich,tinhcach,quequan,trinhdovanhoa,
            nguyenvong,nganhnghe,dieukiendacbiet,mucluong,vung,tinh,
            diachihientai,anhchungchi,mau,phanloaibieumau
            } = req.body
            const result = await Resume.findByIdAndUpdate(
                id,
                {
                    ten,
                    chieucao,
                    cannang,
                    kinhnghiem,
                    hocvan,
                    sohokhau,
                    socccd,
                    sothich,
                    tinhcach,
                    quequan,
                    trinhdovanhoa,
                    nguyenvong,
                    nganhnghe,
                    dieukiendacbiet,
                    mucluong,
                    vung,
                    tinh,
                    diachihientai,
                    anhchungchi,
                    mau,
                    anhbieumau: Xulyanhresume(userInfo = req.body, userImage=anh.anhdaidien),
                    phanloaibieumau
                },
                { new: true, runValidators: true }

            )
            console.log(anh.anhdaidien);
            console.log("bbbbbbbbbbbb")
            res.json({success: true,user:result})
        } catch (error) {
            console.log(error)
        res.status(500).json({
            success: false,
            message: error
        })
        }
    }
}
function Xulyanhresume(userInfo,userImage){  
    let pathImage = `./images/image${Date.now()}toHieulajj.png`;
    let pathImageChange = `./images/image${Date.now()}toHieulajj1.png`
    nodeHtmlToImage({
        output: pathImage,
        html: blueResume(userInfo,userImage),
        content: { name: 'you' }
    }).then(() => 
        {
            sharp(pathImage).extract({ width: 586, height: 755, left:0,top:0,right:169 }).toFile(pathImageChange).then(
               ()=>{
                fs.unlink(pathImage, (err) => {
                    if (err) {
                    console.error(err)
                    return
                }else{
                    console.log("xoa file cu thanh cong");
                }
                }) 
               } 
            );                   
        }
        ); 
    return`http:/localhost:8000${pathImageChange.slice(-(pathImageChange.length-1)) }`        
}
module.exports = resumeController;