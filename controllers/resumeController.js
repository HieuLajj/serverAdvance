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
const mongoose = require("mongoose");
const nodeHtmlToImage = require('node-html-to-image');
//const { userInfo } = require('os');
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
        let userInfo;

        let anh = await Resume.findById(id);
        if(anh.anhbieumau!=null){
            fs.unlink(`.${anh.anhbieumau.slice(20)}`, (err) => {
                if (err) {
                console.error(err)
                return
            }else{
            }
            }) 
        }
        if(!user) return res
            .status(401)
            .json({success:false, message: 'unauthorized acesss'
                })
        try {  
            const {ten,chieucao,cannang,kinhnghiem,hocvan,email,
            sohokhau,socccd,sothich,tinhcach,quequan,trinhdovanhoa,
            nguyenvong,nganhnghe,dieukiendacbiet,mucluong,vung,tinh,
            diachihientai,anhchungchi,mau,phanloaibieumau,dienthoai,
            ngaysinh,tuoi,linhvucchuyenmon,kynang,chungchi
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
                    dienthoai,
                    anhchungchi,
                    email,
                    ngaysinh,
                    tuoi,
                    kynang,
                    mau,
                    linhvucchuyenmon,
                    chungchi,
                    anhbieumau: Xulyanhresume(anh, userInfo = req.body, userImage=anh.anhdaidien),
                    phanloaibieumau
                },
                { new: true, runValidators: true }
            )
            res.json({success: true,user:result})
        } catch (error) {
            console.log(error)
            res.status(500).json({
                success: false,
                message: error
            })
        }
    },
    updateImage: async(req,res)=>{
        const {id} = req?.params;
        const {user} = req;
        let userInfo;
        let anh = await Resume.findById(id);
        if(anh.anhbieumau!=null){
            console.log(anh.anhbieumau)
            fs.unlink(`.${anh.anhbieumau.slice(20)}`, (err) => {
                if (err) {
                console.error(err)
                return
            }else{
            }
            }) 
        }
        if(!user) return res
            .status(401)
            .json({success:false, message: 'unauthorized acesss'
            })
        try {
            console.log("dangchay")
            const result = await cloudinary.uploader.upload(req.file.path,{
                public_id: `${user._id}_profile`,
                width: 500,
                height:500,
                crop: 'fill'
              });
            let abc = result.url
            console.log(abc)
            console.log("----------------")
            const result2 = await Resume.findByIdAndUpdate(
                id,
                {  anhdaidien: result.url,
                   anhbieumau: Xulyanhresume(anh, userInfo ,userImage = abc),      
                },
                { new: true, runValidators: true })
              res.status(201).json({
                success: true,
                result2,
                message: 'Your Profile has updated'
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                success: false,
                message: error
            })
        }
    },  
    deleteResume: async(req,res)=>{
        const {id} = req?.params;
        try {
          const exp = await Resume.findByIdAndDelete(id);
          res.json({success: true, exp});
        } catch (error) {
          res.json(error);
        }
    },
    // fetch all resume
    fetch_all: async (req,res) => {
        try {
          const exp = await Resume.find();
          res.json(exp);
        } catch (error) {
          res.json(error);
        }
    },
    //resumeByPhanloaibieumau
    resumePhanloaibieumau: async (req,res) => {
        console.log(req.user._id)
        console.log("hello")
        try {
          const exp = await Resume.aggregate([              
            {$match: { 
              user: mongoose.Types.ObjectId(req.user._id)
            }},
            {$group:{
                _id:"$phanloaibieumau",
            }},                   
          ])     
          res.json(exp);
        } catch (error) {
          res.json(error);
        }
    },
    //resumetheophanloai
    resumeTypes: async (req,res) => {
        const {id} = req?.params;
        try {
          const exp = await Resume.aggregate([              
            {$match: { 
              user: mongoose.Types.ObjectId(req.user._id),
              phanloaibieumau: id
            }},                  
          ])     
          res.json(exp);
        } catch (error) {
          res.json(error);
        }
    },     
}
function Xulyanhresume(anh,userInfo,userImage){ 
    let bangmau =[]; 
    let trunggian = (userInfo?.mau)?userInfo?.mau:anh.mau
    console.log(trunggian)
    switch(trunggian){
        case "1_red":
            bangmau = ["rgb(252, 76, 0)","rgb(255, 196, 0)","rgb(119, 26, 0)","rgb(119, 26, 0)"]
            break
        case "1_blue":
            bangmau = ["rgb(183, 182, 255)","rgb(91, 88, 255)","rgb(12, 36, 58)","rgb(1, 0, 66)"]
            break
        case "1_green":
            bangmau = ["rgb(139, 247, 205)","rgb(183, 217, 255)","rgb(0, 119, 89)","rgb(0, 119, 89)"]
            break
        case "1_yellow":
            bangmau = ["rgb(200, 255, 2)","rgb(247, 251, 5)","rgb(255, 162, 2)","rgb(255, 162, 2)"]
            break  
        default:
            bangmau = ["rgb(252, 76, 0)","rgb(255, 196, 0)","rgb(119, 26, 0)","rgb(119, 26, 0)"]
            break 
    }
    let pathImage = `./images/image${Date.now()}toHieulajj.png`;
    let pathImageChange = `./images/image${Date.now()}toHieulajj1.png`
    nodeHtmlToImage({
        output: pathImage,
        html: blueResume(anh, userInfo, userImage, bangmau),
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
                }
                }) 
               } 
            );                   
        }
        ); 
    return`http:/localhost:8000${pathImageChange.slice(-(pathImageChange.length-1)) }`        
}
module.exports = resumeController;