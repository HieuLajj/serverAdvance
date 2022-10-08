const Post = require("../models/post")
const Recruit = require("../models/recruit")
const User = require("../models/user")
const Resume = require("../models/resume")
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
                //anhtuyendung: desc.anhtuyendung,
                motacongviec: desc.motacongviec,
                yeucauungvien: desc.yeucauungvien,
            })
            res.json({success: true, data: result})
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
            const user = await User.findById(req.user._id);
            const exp = await Post.find().populate('user');
            xemdaluuchua(exp, user, res);
        } catch (error) {
            res.json(error);
        } 
    },
    findbyResume: async(req,res) => {
        const {id} = req?.params;
        try {
            const user = await User.findById(req.user._id);
            const exp = await Resume.findById(id);
            const exp2 = await Post.find(
                {
                    $and:[
                        { nganhnghe: { $regex: exp?.nganhnghe, $options: "i" } },
                        { khuvuc: { $regex: exp?.diachihientai, $options: "i" } },
                        { luongcoban :{$gte: Number(exp?.mucluong)}}
                    ]
                }
            ).populate('user')
            xemdaluuchua(exp2, user, res);
        } catch (error) {
            console.log(error)
        } 
    },
    // tim tat ca cac bai post cua 1 user (cua nha tuyen dung dang len)
    fetch_all_1user : async (req,res)=>{
        try {
            const exp = await Post.find({"user" : req.user._id}).populate('user');
            res.json({success: true, data: exp});
        } catch (error){
            res.json(error);
        }
    },
    //tim kiem theo ten nha tuyen dung hoac nganh nghe
    //khu vuc lam viec dia chi lam viec
    find_employer_career: async(req,res) => {
        const user = await User.findById(req.user._id);
        const {follow} = req?.body ? req.body : "false"
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
            if(follow == "true"){
                let aaa=[];
                const currentUser = await User.findById(req.user._id);            
                await Promise.all(
                currentUser.followins.map(async(friendId) => {
                    const keyword2 = req.query.search
                    ? {
                        $and:[
                            {
                                $or: [
                                    { nganhnghe: { $regex: req.query.search, $options: "i" } },
                                    { nhatuyendung: { $regex: req.query.search, $options: "i" } },
                                    { khuvuc: { $regex: req.query.search, $options: "i" } },
                                    { diachilamviec: { $regex: req.query.search, $options: "i" } },
                                  ],
                            },
                            {"user":friendId},
                        ]
                      }
                    : {};
                    await Post.find(keyword2).populate('user').then((data)=>{
                        aaa = aaa.concat(data)
                    }); 
                }
                ))
                xemdaluuchua(aaa, user, res);
            }
            else{
                const exp = await Post.find(keyword).populate('user')
                xemdaluuchua(exp, user, res);  
            }      
        } catch (error) {
         res.json(error);
        } 
    },
    //find theo tuoi di
    find_age: async(req,res) => {
        const {age} = req.body
        const {follow} = req?.body ? req.body : "false"
        const user = await User.findById(req.user._id);
        try {
            if(follow == "true"){
                let aaa=[];
                const currentUser = await User.findById(req.user._id);            
                await Promise.all(
                currentUser.followins.map(async(friendId) => {
                    await Post.find({
                        $and:[
                            {"user":friendId},
                            { "dotuoi" :{$lte: Number(age)} },
                            { "dotuoi" :{$gte: Number(age)} },
                        ]}).populate('user').then((data)=>{
                        aaa = aaa.concat(data)
                    }); 
                }
                ))
                xemdaluuchua(aaa,user,res);   
            }
            else{
                const exp = await Post.find({   
                    $and : [
                        { "dotuoi" :{$lte: Number(age)} },
                        { "dotuoi" :{$gte: Number(age)} },  
                    ]}).populate('user')
                xemdaluuchua(exp,user,res);   
            }     
        } catch (error) {
         res.json(error);
         console.log(error)
        } 
    },
    //find theo luong
    find_wage: async(req,res) => {
        const user = await User.findById(req.user._id);
        const {wage} = req.body
        const {follow} = req?.body ? req.body : "false"
        try {
            if(follow == "true"){
                let aaa=[];
                const currentUser = await User.findById(req.user._id);            
                await Promise.all(
                currentUser.followins.map(async(friendId) => {
                    await Post.find({
                        $and:[
                            {"user":friendId},
                            {"luongcoban" :{$gte: Number(wage)}}
                        ]}).populate('user').then((data)=>{
                        aaa = aaa.concat(data)
                    }); 
                }
                ))
                xemdaluuchua(aaa, user, res);
            }else{
                const exp = await Post.find({"luongcoban" :{$gte: Number(wage)}}).populate('user')
                xemdaluuchua(exp, user, res);
            }
        } catch (error) {
            res.json(error)
        } 
    },
    //save recruit (post) => luu id cua bai post vao save cua user (mo model user)
    save_post: async(req,res) => {
        const {id} = req?.params;
        if(req.user._id !== id){
            try {
                const user = await User.findById(req.user._id);
                if(!user?.save.includes(id)){
                    console.log("chua co");
                    await user.updateOne({$push:{save: id}});
                    res.json({ success: true, message: "thanh cong"})
                }else{
                    console.log("co roi");
                    res.json({ success: false, message: "da luu tu truoc do"});
                }
            } catch (error) {
                console.log(error)
                res.status(403).json("co loi xay ra");
            }
        }
    },
    //pull post  xoa post
    pull_post: async(req,res) => {
        const {id} = req?.params;
        if(req.user._id !== id){
            try {
                const user = await User.findById(req.user._id);
                if(user?.save.includes(id)){
                    await user.updateOne({$pull:{save: id}});
                    res.json({ success: true, message: "xoa thanh cong"})
                }else{
                    res.json({ success: false, message: "ban chua luu post nay"});
                }
            } catch (error) {
                console.log(error)
                res.status(403).json("co loi xay ra");
            }
        }
    }, 
    //send recruitments => luu id cua resume (cua user) vao recruitments cua bai post
    send_recruitments: async(req,res) => {
        const {resumeId, postId} = req.body
        try {
            const post = await Post.findById(postId);
            const user = await User.findById(req.user._id);
            if(!post?.recruitments.includes(resumeId) && !user?.recruitments.includes(postId)){
                await post.updateOne({$push:{recruitments: resumeId}});
                await user.updateOne({$push:{recruitments: postId}});
                res.json({ success: true, message: "gui ho so thanh cong"})
            }else{
                res.json({ success: false, message: "da gui ho so truoc do"});
            }
        } catch (error) {
            console.log(error)
            res.status(403).json("co loi xay ra");
        }        
    },
    //delete recruitments =>xoa id cua resume (cua user) khoi recruitments cua bai post
    delete_recruitments: async(req,res) => {
        const {postId} = req?.params;
        // const {postId} = req.body
        const user = await User.findById(req.user._id);
        // const hh = Post.findById(postId).populate('recruitments')
        //     .exec(    
        //         (err, items)=>{
        //             let a = items.recruitments;
        //             a = a.filter(function(item){
        //                 return item.user == req.user._id.toString();
        //             })
        //             console.log(a[0]._id);
                  
        //     }      
        //     );
        try { 
            const hh = Post.findById(postId).populate('recruitments')
            .exec(    
                (err, items)=>{
                    let a = items.recruitments;
                    a = a.filter(function(item){
                        return item.user == req.user._id.toString();
                    })
                    if(a[0]?._id){
                        locid (postId, a[0]._id, res, user)
                    }else{
                        res.json({ success: false, message: "ban chua gui ho so nay"});
                    }
                }      
            );
            // const post = await Post.findById(postId);
            // if(post?.recruitments.includes(resumeId)){
            //     await post.updateOne({$pull:{recruitments: resumeId}});
            //     await user.updateOne({$pull:{recruitments: postId}});
            //     res.json({ success: true, log: "thu hoi ho so thanh cong"})
            // }else{
            //    res.json({ success: false, log: "ban chua gui ho so nay"});
           // }
        } catch (error) {
            console.log(error)
            res.status(403).json("co loi xay ra");
        }        
    },
    //fetch recruitments <= post
    //tim tat ca nhung bai resume duoc gui vao bai post nay
    fetch_recruitments : async (req,res) => {
        const {id} = req?.params;
        console.log(id)
        try {
            const exp = await Post.findById(id).populate('recruitments');
            res.json(exp.recruitments);
           } catch (error) {
            res.json(error);
        }  
    },

    //fetch_recruitment_one
    //tim tat ca nhung bai resume cua nguoi dung (1 nguoi, nguoi dang su dung) gui vao bai post nay
    fetch_recruitments_user : async (req,res) =>{
        const {id} = req?.params;
        console.log(id);
        try {
            //const exp = await Post.findById(id)
            const exp = await Post.findById(id)
            .populate('recruitments')
                .exec(
                
                (err, items)=>{
                    let a = items?.recruitments;
                    a = a?.filter(function(item){
                       // return item.user == "6317f42dd147faa99ca44be2"
                        return item.user == req.user._id.toString();
                    })
                    res.json({success: true, data: a});
                }
                );      
            //res.json(exp);  
        } catch (error) {
            console.log(error)
        }
    }
}
async function xemdaluuchua (exp, user, res){
    let bbb = []
         await Promise.all(
            exp.map(async(element)=>{
                let b = {
                    _id : element._id,
                    user : element.user,
                    luongcoban : element.luongcoban,
                    soluongtuyen: element.soluongtuyen,
                    gioitinh: element.gioitinh,
                    dotuoi: element.dotuoi,
                    trinhdongoaingu: element.trinhdongoaingu,
                    kinhnghiem: element.kinhnghiem,
                    yeucaukhac: element.yeucaukhac,
                    thongtinlienhe: element.thongtinlienhe,
                    nhatuyendung: element.nhatuyendung,
                    khuvuc: element.khuvuc,
                    diachilamviec: element.diachilamviec,
                    nganhnghe: element.nganhnghe,
                    anhtuyendung: element.anhtuyendung,
                    saves: element.saves,
                    recruitments: element.recruitments,
                    motacongviec: element.motacongviec,
                    yeucauungvien: element.yeucauungvien,
                    created: element.created,
                    xemdaluuchua: user.save.includes(element._id) ? "co" : "chua",
                    xemdaguichua: user.recruitments.includes(element._id)? "co" : "chua"
                }
                bbb = bbb.concat(b)
            })
        );
    res.json({success: true, data: bbb});
}

async function locid (postId, resumeId, res, user){
    const post = await Post.findById(postId);
        if(post?.recruitments.includes(resumeId)){
            await post.updateOne({$pull:{recruitments: resumeId}});
            await user.updateOne({$pull:{recruitments: postId}});
            res.json({ success: true, message: "thu hoi ho so thanh cong"})
        }else{
            res.json({ success: false, message: "ban chua gui ho so nay"});
        }
}
module.exports = postController;
