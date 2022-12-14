const jwt =  require('jsonwebtoken');
const User = require("../models/user");
const sharp = require('sharp');
const bcrypt = require('bcrypt');
const cloudinary = require('../utils/cloudinary');
//const cloudinary = require('../helper/imageUpload')
const userController = {
    //ADD USER
    add_user: async(req,res)=>{
        // su dung uuid services
        const {uuid,typer,email,name} =  req.body;
        try {
            const user = await User.create({
                uuid,
                typer,   
                email,
                name,   
            });
            res.json({success: true, data: user});
        } catch (error) {
            console.log(error);
            res.json(error)
        }
    },
        // khong su dung uuid services

        // const {name,email,password,phone,typer} = req.body
        // const isNewUser = await User.isThisEmailInUse(email);
        // if (!isNewUser){
        //     return res.json({
        //         success: false,
        //         message: 'This email is already in use, try sign-in',
        //     });}
        // else{
        //     const user = await User.create({
        //        name,
        //        email,
        //        password,
        //        phone,
        //        typer
        //     });
        //     //await user.save();
        //     res.json(user);
        // }
    //},

    //SIGN IN
    userSignIn: async(req,res)=>{
    
        // dang nhap su dung uuid
        const {uuid} = req.body;
        try {
            const user = await User.findOne({uuid});
            const token =  jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn:'1y'});
            res.json({success: true,data: user, token})
        } catch (error) {
            res.json({success: false})
        }

        // khong su dung uuid

        // const { email, password } = req.body;
        // const user = await User.findOne({ email });
        // if (!user)
        //     return res.json({
        //         success: false,
        //         message: 'user not found, with the given email!',
        //     });
      
        // const isMatch = await user.comparePassword(password);
        // if (!isMatch)
        //     return res.json({
        //         success: false,
        //         message: 'email / password does not match!',
        //     });
        // const token =  jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn:'1y'});
        // let oldTokens = user.tokens || [];

        // if (oldTokens.length) {
        //     oldTokens = oldTokens.filter(t => {
        //     const timeDiff = (Date.now() - parseInt(t.signedAt)) / 1000;
        //         if (timeDiff < 86400) {
        //             return t;
        //         }
        //     });
        // }
        // await User.findByIdAndUpdate(user._id, {tokens:[...oldTokens, {token, signedAt: Date.now().toString()}]})       
        // const userInfo = {
        //     id: user.id,
        //     name: user.name,
        //     email: user.email,
        //     phone: user.phone,
        //     typer: user.typer,
        //     age: user.age,
        //     sex: user.sex,
        //     followers: user.followers,
        //     followins: user.followins,
        //     save: user.save,
        //     avatar: user.avatar ? user.avatar : '',
        // }
        // res.json({success: true,user:userInfo, token})
    },

    //UPDATE IMAGE PROFILE
    uploadProfile : async (req,res)=>{
        const {user} = req;
        if(!user) return res
            .status(401)
            .json({success:false, message: 'unauthorized acesss'
                })
        try {
            const result = await cloudinary.uploader.upload(req.file.path,{
                public_id: `${user._id}_profile`,
                width: 500,
                height:500,
                crop: 'fill'
            });
            await User.findByIdAndUpdate(user._id,{avatar: result.url})
            res.status(201).json({
                success: true,
                message: 'Your Profile has updateed',
                data: result.url
            })
        } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error,try after some time'
        })
            console.log('Eroor while uploading profile imge',error.message)
        }
    },
    
    //UPDATE anh bang cap
    uploadAnhbangcap : async (req,res)=>{
        const {user} = req;
        if(!user) return res
            .status(401)
            .json({success:false, message: 'unauthorized acesss'
                })
        try {
            const result = await cloudinary.uploader.upload(req.file.path,{
                public_id: `${user._id}_profile`,
                width: 500,
                height:500,
                crop: 'fill'
            });
            await User.findByIdAndUpdate(user._id,{anhbangcap: result.url})
            res.status(201).json({
                success: true,
                message: 'Your Profile has updateed',
                data: result.url
            })
        } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error,try after some time'
        })
            console.log('Eroor while uploading profile imge',error.message)
        }
    },
    //SIGN IN 2 BY TOKEN
    userSignIn2: async (req,res) =>{
        console.log("siginIn2")
        const {token} = req?.params;
        if(!req.user){
            return res.json({success: false, message: 'phien da het han!'});}
            const userInfo = {
                id: req.user.id,
                name: req.user.name,
                email: req.user.email,
                phone: req.user.phone,
                avg: req.user.avg,
                // password: user.password,
                avatar: req.user.avatar ? req.user.avatar : '',
            }
            res.json({success: true,user:userInfo,token})
    },
    //SIGN OUT
    userSignOut: async (req,res) =>{
        if (req.headers && req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            if (!token) {
                return res
                    .status(401)
                    .json({ success: false, message: 'Authorization fail!' });
            }      
            tokens = req.user.tokens;
            const newTokens = tokens.filter(t => t.token !== token);
      
            await User.findByIdAndUpdate(req.user._id, { tokens: newTokens });
            res.json({ success: true, message: 'Sign out successfully!' });
        }
    },
    //UPLOAD PROFILE
    uploadProfileInformation: async (req,res) => {
        const { name, email, phone, passSendEmail, age, sex, nganhnghe, diachihientai} = req.body;
        try {
            const exp = await User.findByIdAndUpdate(
                req.user._id,
                {
                    name,
                    email,
                    phone,
                    age,
                    sex,
                    passSendEmail,
                    nganhnghe,
                    diachihientai
                },
                { new: true, runValidators: true }
            )
            res.json({success: true, data: exp});
        } catch (error) {
            res.json(error)
        }

        // const {id} = req?.params;
        // if(req.body.password!=null){
            
        //     bcrypt.hash(req.body.password, 8, async (err, hash) => {
        //         if (err) return next(err);
        //         req.body.password = hash;
        //         const { name, email, phone, password, passSendEmail} = req.body;
        //         console.log(password)
        //         try {
        //             console.log("------------------------")
        //             const exp = await User.findByIdAndUpdate(
        //             id,
        //             {
        //                 name,
        //                 email,
        //                 phone,
        //                 password,
        //                 age,
        //                 sex,
        //                 passSendEmail,
        //             },
        //             { new: true, runValidators: true }
        //             )
        //             res.json({success: true, exp});
        //         } catch (error) {
        //             res.json(error)
        //         }
        //     })
        // }else{
        //     const { name, email, phone, password, age, sex, passSendEmail} = req.body;
        //     try {
        //         const exp = await User.findByIdAndUpdate(
        //             id,
        //             {
        //                 name,
        //                 email,
        //                 phone,
        //                 password,
        //                 age,
        //                 sex,
        //                 passSendEmail
        //             },
        //             { new: true, runValidators: true }
        //         )
        //         res.json({success: true, exp});
        //     } catch (error) {
        //         res.json(error)
        //     }
        // }
    }, 
    fetch_one : async(req,res) => {
        const {id} = req?.params;
        try {
         const exp = await User.findById(id).populate('save');
            res.json({success: true, data: exp});
        } catch (error) {
         res.json(error);
        } 
    },
    
    // truy van nhung ban luu tu truoc do
    fetch_save : async(req,res) => {
        const user = await User.findById(req.user._id);
        try {
            const exp = await User.findById(req.user._id).populate('save');
            xemdaluuchua(exp.save, user, res);
            //res.json(exp.save);
        } catch (error) {
            res.json(error);
        }  
    },

    // truy van nhung ban gui ho so truoc do
    fetch_recruitments: async(req,res) => {
        try{
            const exp = await User.findById(req.user._id).populate('recruitments');
            res.json({success: true, data: exp.recruitments});
        }catch(error){
            res.json(error);
        }
    },
    //follow a user
    follow : async(req,res) => {
        const {id} = req?.params;
        try {
            if(req.user._id.toString() != id){
                const userfollow = await User.findById(id);
                const currentUser = await User.findById(req.user._id);
                if(!userfollow.followers.includes(req.user._id)){
                    await userfollow.updateOne({$push:{followers: req.user._id}});
                    await currentUser.updateOne({$push: {followins: id }});
                    res.status(200).json("user has been follwed");
                }else{
                    res.status(403).json("you allready follow this user")
                }
            }else{
                res.status(403).json("you cant unfollow yourself")
            }
        } catch (error) {
            
        }
    },

    //unfollow a user
    unfollow : async(req,res) => {
        const {id} = req?.params;
        try {
            if(req.user._id.toString() != id){
                const userfollow = await User.findById(id);
                const currentUser = await User.findById(req.user._id);
                if(userfollow.followers.includes(req.user._id)){
                    await userfollow.updateOne({$pull:{followers: req.user._id}});
                    await currentUser.updateOne({$pull: {followins: id }});
                    res.status(200).json("user has been unfollwed");
                }else{
                    res.status(403).json("you dont follow this user")
                }
            }else{
                res.status(403).json("you cant unfollow yourself")
            }
        } catch (error) {
            
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
                    luongcoban : element.luoncoban,
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
module.exports = userController;
