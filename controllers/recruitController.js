const Recruit = require("../models/recruit")
const sharp = require('sharp');
const fs = require('fs');
const mongoose = require("mongoose")
const defaultRecruit = require("../docs/recruit");
const nodeHtmlToImage = require('node-html-to-image');
const recruitController = {
    add_recruit: async(req,res)=>{
        const {luongcoban, soluongtuyen, gioitinh,
        dotuoi, trinhdongoaingu, kinhnghiem, yeucaukhac,
        thongtinlienhe, nhatuyendung, khuvuc, diachilamviec,
        mau,phanloai,nganhnghe, motacongviec, yeucauungvien
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
                motacongviec,
                yeucauungvien,
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
                mau,phanloai,nganhnghe,motacongviec,yeucauungvien,
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
                    motacongviec,
                    yeucauungvien,
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
            res.json({success: true, data: exp});
        } catch (error) {
          res.json(error);
        }
    },
    fetch_one: async(req,res)=>{
        const {id} = req?.params;
        try {
            const exp = await Recruit.findById(id);
            res.json({success: true, data: exp});
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
    let pathImage = `./images2/image${Date.now()}toHieulajj.png`;
    let pathImageChange = `./images2/image${Date.now()}toHieulajj1.png`;
    nodeHtmlToImage({
        output: pathImage,
        html: defaultRecruit(recruitUpdate, recruitInfo),
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
