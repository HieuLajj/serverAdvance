const Post = require("../models/post")
const Recruit = require("../models/recruit")
const User = require("../models/user")
const mongoose = require("mongoose")
const postController = {

    add_post: async(req,res) => {
        const {id} = req?.params;
        const desc = await Recruit.findById(id)
        const {user} = req;
        if(!user) return res
        .status(401)
        .json({success:false, message: 'unauthorized acesss'
            })
        try {
            const result = await Post.create({
                user : req.user._id,
                luongcoban : desc.luongcoban,
                soluongtuyen : desc.soluongtuyen,
                gioitinh : desc.gioitinh,
                dotuoi : desc.dotuoi,
                trinhdongoaingu : desc.trinhdongoaingu,
                kinhnghiem : desc.kinhnghiem,
                yeucaukhac : desc.yeucaukhac,
                thongtinlienhe : desc.thongtinlienhe,
                nhatuyendung : desc.nhatuyendung,
                khuvuc : desc.khuvuc,
                diachilamviec : desc.diachilamviec,
                nganhnghe : desc.nganhnghe,
                anhtuyendung: desc.anhtuyendung,
            })
            res.json({success: true, result})
        } catch (error) {
            console.log(error)
            res.status(500).json({
                success: false,
                message: error
            })
        }
    },
    fetch_one: async(req,res) => {
       const {id} = req?.params;
       try {
        const exp = await Post.findById(id).populate('user');
        res.json(exp);
       } catch (error) {
        res.json(error);
       } 
    },
    fetch_all: async(req,res) => {
        try {
            const exp = await Post.find().populate('user');
            res.json(exp);
        } catch (error) {
            res.json(error);
        } 
    },
    //tim kiem theo ten nha tuyen dung hoac nganh nghe
    //khu vuc lam viec dia chi lam viec
    find_employer_career: async(req,res) => {

        const keyword = req.query.search
        ? {
          $or: [
            { nganhnghe: { $regex: req.query.search, $options: "i" } },
            { nhatuyendung: { $regex: req.query.search, $options: "i" } },
            { khuvuc: { $regex: req.query.search, $options: "i" } },
            { diachilamviec: { $regex: req.query.search, $options: "i" } },
          ],
          }
        : {};

        try {
         const exp = await Post.find(keyword).populate('user')
         res.json(exp);        
        } catch (error) {
         res.json(error);
        } 
    },
    //find theo tuoi di
    find_age: async(req,res) => {
        const {age} = req?.params;
        console.log(age)
        try {
         const exp = await Post.find({   
            $and : [
                { "dotuoi" :{$lte: Number(age)} },
                { "dotuoi" :{$gte: Number(age)} },  
            ]}).populate('user')
         res.json(exp);        
        } catch (error) {
         res.json(error);
        } 
    },
    //find theo luong
    find_wage: async(req,res) => {
        const {wage} = req?.params;
        try {
            const exp = await Post.find({"luongcoban" :{$gte: Number(wage)}}).populate('user')
            res.json(exp);        
        } catch (error) {
         res.json(error);
        } 
    },
    //save recruit 
    save_recruit: async(req,res) => {
        const {id} = req?.params;
        if(req.user._id !== id){
            try {
                const user = await User.findById(req.user._id);
                if(!user?.save.includes(id)){
                    console.log("chua co");
                    await user.updateOne({$push:{save: id}});
                    res.json({ success: true, log: "thanh cong"})
                }else{
                    console.log("co roi");
                    res.json({ success: false, log: "da luu tu truoc do"});
                }
            } catch (error) {
                console.log(error)
                res.status(403).json("co loi xay ra");
            }
        }
    }

}
module.exports = postController;