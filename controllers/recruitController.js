const Recruit = require("../models/recruit")
const sharp = require('sharp');
const fs = require('fs');
const mongoose = require("mongoose")
const defaultRecruit = require("../docs/default_recruit");
const nodeHtmlToImage = require('node-html-to-image');
const recruitController = {
    add_recruit: async(req,res)=>{
        const {luongcoban, soluongtuyen, gioitinh,
        dotuoi, trinhdongoaingu, kinhnghiem, yeucaukhac,
        thongtinlienhe, nhatuyendung, khuvuc, diachilamviec,
        mau,phanloai,nganhnghe
        } = req.body;

        const {user} = req;
        if(!user) return res
        .status(401)
        .json({success:false, message: 'unauthorized acesss'
            })
        try {
            
            const result = await Recruit.create({
                user: req.user._id,
                luongcoban,
                soluongtuyen,
                gioitinh,
                dotuoi,
                trinhdongoaingu,
                kinhnghiem,
                yeucaukhac,
                nganhnghe,
                thongtinlienhe,
                nhatuyendung,
                khuvuc,
                diachilamviec,
                phanloai,
                anhtuyendung: Xulyrecruit(
                    recruitUpdate = req.body
                ),
                mau
            });
            res.json({success: true, result})
        } catch (error) {
            console.log(error)
            res.status(500).json({
                success: false,
                message: error
            })
        }
    },
    update_recruit: async(req,res)=>{
        let recruitUpdate;
        const {id} = req?.params;
        const {user} = req;
        let recruitInfo = await Recruit.findById(id);
        if(recruitInfo.anhtuyendung!=null){
            fs.unlink(`.${recruitInfo.anhtuyendung.slice(20)}`, (err) => {
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
            const {luongcoban, soluongtuyen, gioitinh,
                dotuoi, trinhdongoaingu, kinhnghiem, yeucaukhac,
                thongtinlienhe, nhatuyendung, khuvuc, diachilamviec,
                mau,phanloai,nganhnghe
                } = req.body;
            const result = await Recruit.findByIdAndUpdate(
                id,
                {
                    luongcoban,
                    soluongtuyen, 
                    gioitinh,
                    nganhnghe,
                    dotuoi, 
                    trinhdongoaingu, 
                    kinhnghiem, 
                    yeucaukhac,
                    thongtinlienhe, 
                    nhatuyendung, 
                    khuvuc, 
                    diachilamviec,
                    mau,
                    phanloai,    
                    anhtuyendung: Xulyrecruit(recruitUpdate = req.body, recruitInfo),                   
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
    // fetch all resume
    fetch_all: async (req,res) => {
        try {
          const exp = await Recruit.find();
          res.json(exp);
        } catch (error) {
          res.json(error);
        }
    },
    fetch_one: async(req,res)=>{
        const {id} = req?.params;
        try {
            const exp = await Recruit.findById(id);
            res.json(exp);
          } catch (error) {
            res.json(error);
        }
    },
    deleteRecruit: async(req,res)=>{
        const {id} = req?.params;
        try {
          const exp = await Recruit.findByIdAndDelete(id);
          res.json({success: true, exp});
        } catch (error) {
          res.json(error);
        }
    },
    // recruitphanloai
    recruitPhanloai: async (req,res) => {
        console.log(req.user._id)
        console.log("hello")
        try {
          const exp = await Recruit.aggregate([              
            {$match: { 
              user: mongoose.Types.ObjectId(req.user._id)
            }},
            {$group:{
                _id:"$phanloai",
            }},                   
          ])     
          res.json(exp);
        } catch (error) {
          res.json(error);
        }
    },
    //recruittheophanloai
    recruitTypes: async (req,res) => {
        const {id} = req?.params;
        try {
          const exp = await Recruit.aggregate([              
            {$match: { 
              user: mongoose.Types.ObjectId(req.user._id),
              phanloai: id
            }},                  
          ])     
          res.json(exp);
        } catch (error) {
          res.json(error);
        }
    },  
}

function Xulyrecruit (recruitUpdate, recruitInfo){
    let bangmau =[]; 
    let trunggian = ( recruitUpdate?.mau)?recruitUpdate?.mau: recruitInfo.mau
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
    let pathImage = `./images2/image${Date.now()}toHieulajj.png`;
    let pathImageChange = `./images2/image${Date.now()}toHieulajj1.png`;
    nodeHtmlToImage({
        output: pathImage,
        html: defaultRecruit(recruitUpdate, recruitInfo, bangmau),
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
module.exports = recruitController;