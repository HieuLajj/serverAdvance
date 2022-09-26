const jwt =  require('jsonwebtoken');
var reload = require('reload')
const pdf = require('html-pdf');
const User = require("../models/user");
const Resume = require("../models/resume");
const sharp = require('sharp');
const bcrypt = require('bcrypt');
const cloudinary = require('../utils/cloudinary');
const fs = require('fs');
//const cloudinary = require('../helper/imageUpload')
//const blueResume = require("./docs/blue-resume");
const blueResume = require("../docs/blue-resume");
const resume1_en = require("../docs/resume1_en");
const resume1_vn = require("../docs/resume1_vn");
const resume2_en = require("../docs/resume2_en");
const resume2_vn = require("../docs/resume2_vn");
const resume3_en = require("../docs/resume3_en");
const resume3_vn = require("../docs/resume3_vn");
const resume4_en = require("../docs/resume4_en");
const resume4_vn = require("../docs/resume4_vn");
const mongoose = require("mongoose");
const nodeHtmlToImage = require('node-html-to-image');
const nodemailer = require("nodemailer");
//const { userInfo } = require('os');
const options = {
     //"height": "20.5in",        // allowed units: mm, cm, in, px
     //"width": "10in",   
    "width": "4.88in",
    "height": "6.288in",
     //allowed units: mm, cm, in, pxI
};
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
            res.json({success: true,data:result.id})
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
            ngaysinh,tuoi,linhvucchuyenmon,kynang,chungchi,ngonngucuamau,gioitinh
            } = req.body
            const result = await Resume.findByIdAndUpdate(
                id,
                {
                    ten,
                    chieucao,
                    gioitinh,
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
                    ngonngucuamau,
                    anhbieumau: Xulyanhresume(anh, userInfo = req.body, userImage=anh.anhdaidien),
                    phanloaibieumau
                },
                { new: true, runValidators: true }
            )
            res.json({success: true,data:result})
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
          res.json({success: true, data: exp});
        } catch (error) {
          res.json(error);
        }
    },
    // fetch all resume
    fetch_all: async (req,res) => {
        try {
          const exp = await Resume.find();
            res.json({success: true, data: exp});
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
            res.json({success: true, data: exp});
        } catch (error) {
          res.json(error);
        }
    },
    saveResume: async(req,res)=>{
        const {id} = req?.params;            
        try {
            await CreatePDF(id,(data)=>{
                res.download(String(data),()=>{
                    fs.unlink(String(data), (err) => {
                        if (err) {
                            console.error(err)
                            return
                        }else{
                            console.log("success")
                        }
                    }) 
                })
            })    
             
        } catch (error) {
            console.log(error)
            res.json(error);      
        }
    },

    // enable IMAP
    // 2 - Step ve
    //https://accounts.google.com/signin/v2/challenge/
    sendMail: async(req,res)=>{
        const {fromEmail, passwordFromEmail ,toEmail, subject, text, id, text2} = req.body;
        const fromEmailReal = fromEmail ? fromEmail: req.user.email;
        const passwordFromEmailReal = passwordFromEmail ? passwordFromEmail : req.user.passSendEmail;
        let transporter = nodemailer.createTransport({
            service: "gmail",
            auth:{
                user: `${fromEmailReal}`,
                pass: `${passwordFromEmailReal}`
            }
            //pass: 'tbwujuzzgnhbqbja'
        })

        await CreatePDF(id,(data)=>{
            transporter.sendMail({
                from: `${fromEmail}`,
                to: `${toEmail}`,
                subject: `${subject}`,
                text: `${text}`,
                html: `<b>${text2}</b>`,
                attachments:[
                    {filename:'cv.pdf', path: data}
                ] 
            },
            (err)=>{
                if(err){
                    return res.json({
                        message: "Loi",
                        err,
                    })
                }
                fs.unlink(String(data), (err) => {
                    if (err) {
                        console.error(err)
                        return
                    }else{
                        console.log("success")
                    }
                }) 
                return res.json({
                    message:"Da gui duoc tin nhan"
                })
            }
            )
        })
    }     
}

async function CreatePDF (id, mya){
    let resumeT;
    let anh = await Resume.findById(id);
    let mau = anh.mau
    let ngonngucuamau = anh.ngonngucuamau
    const userName = anh.nganhnghe;
    const lowercaseName = userName.toLowerCase();
    const noSpaceName = lowercaseName.replace(' ', '');
    const shortName = noSpaceName.slice(0, 10);
    const filename2 = "./pdf/" + shortName +""+Date.now()+"-resume.pdf";      
    try {
        switch(mau){
            case "resume1":
                if(ngonngucuamau == "en"){
                    resumeT = resume1_en
                }else{
                    resumeT = resume1_vn
                }
                break;
            case "resume2":
                if(ngonngucuamau == "en"){
                    resumeT = resume2_en
                }else{
                    resumeT = resume2_vn
                }
                break;
            case "resume3":
                if(ngonngucuamau == "en"){
                    resumeT = resume3_en
                }else{
                    resumeT = resume3_vn
                }
                break;
            case "resume4":
                if(ngonngucuamau == "en"){
                    resumeT = resume4_en
                }else{
                    resumeT = resume4_vn
                }
            break;
            default:
                break;
        }
        pdf.create( resumeT(anh, userInfo = null, userImage = null), options).toFile(filename2, (error, response) => {
            if (error){
                console.log(error)
                console.log("ok")
            }else{
                console.log("taoxong")
            mya(filename2);
            }
    }); 
    } catch (error) {
        console.log(error)
        res.json(error);      
    }
}
function Xulyanhresume(anh,userInfo,userImage){ 
    let resumeT;
    let mau = (userInfo?.mau) ? userInfo?.mau : anh.mau
    let ngonngucuamau = (userInfo?.ngonngucuamau) ? userInfo?.ngonngucuamau : anh.ngonngucuamau
    switch(mau){
        case "resume1":
            if(ngonngucuamau == "en"){
                resumeT = resume1_en
            }else{
                resumeT = resume1_vn
            }
            break;
        case "resume2":
            if(ngonngucuamau == "en"){
                resumeT = resume2_en
            }else{
                resumeT = resume2_vn
            }
            break;
        case "resume3":
            if(ngonngucuamau == "en"){
                resumeT = resume3_en
                console.log("resume3");
            }else{
                resumeT = resume3_vn
            }
            break;
        case "resume4":
            if(ngonngucuamau == "en"){
                resumeT = resume4_en
            }else{
                resumeT = resume4_vn
            }
        break;
        default:
            break;
    }
    // let bangmau =[]; 
    // let trunggian = (userInfo?.mau)?userInfo?.mau:anh.mau
    // switch(trunggian){
    //     case "1_red":
    //         bangmau = ["rgb(252, 76, 0)","rgb(255, 196, 0)","rgb(119, 26, 0)","rgb(119, 26, 0)"]
    //         break
    //     case "1_blue":
    //         bangmau = ["rgb(183, 182, 255)","rgb(91, 88, 255)","rgb(12, 36, 58)","rgb(1, 0, 66)"]
    //         break
    //     case "1_green":
    //         bangmau = ["rgb(139, 247, 205)","rgb(183, 217, 255)","rgb(0, 119, 89)","rgb(0, 119, 89)"]
    //         break
    //     case "1_yellow":
    //         bangmau = ["rgb(200, 255, 2)","rgb(247, 251, 5)","rgb(255, 162, 2)","rgb(255, 162, 2)"]
    //         break  
    //     default:
    //         bangmau = ["rgb(252, 76, 0)","rgb(255, 196, 0)","rgb(119, 26, 0)","rgb(119, 26, 0)"]
    //         break 
    // }
    let pathImage = `./images/image${Date.now()}toHieulajj.png`;
    let pathImageChange = `./images/image${Date.now()}toHieulajj1.png`
    nodeHtmlToImage({
        output: pathImage,
        html: resumeT(anh, userInfo, userImage),
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
