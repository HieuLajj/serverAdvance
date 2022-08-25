const jwt =  require('jsonwebtoken');
const User = require("../models/user");
const sharp = require('sharp');
const bcrypt = require('bcrypt');
const cloudinary = require('../utils/cloudinary');
//const cloudinary = require('../helper/imageUpload')
const userController = {
    //ADD USER
    add_user: async(req,res)=>{
        const {name,email,password,phone,typer} = req.body
        const isNewUser = await User.isThisEmailInUse(email);
        if (!isNewUser){
            return res.json({
                success: false,
                message: 'This email is already in use, try sign-in',
            });}
        else{
            const user = await User.create({
               name,
               email,
               password,
               phone,
               typer
            });
            //await user.save();
            res.json(user);
        }
    },

    //SIGN IN
    userSignIn: async(req,res)=>{
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user)
            return res.json({
                success: false,
                message: 'user not found, with the given email!',
            });
      
        const isMatch = await user.comparePassword(password);
        if (!isMatch)
            return res.json({
                success: false,
                message: 'email / password does not match!',
            });
        const token =  jwt.sign({userId: user._id}, process.env.JWT_SECRET, {expiresIn:'1d'});
        let oldTokens = user.tokens || [];

        if (oldTokens.length) {
            oldTokens = oldTokens.filter(t => {
            const timeDiff = (Date.now() - parseInt(t.signedAt)) / 1000;
                if (timeDiff < 86400) {
                    return t;
                }
            });
        }
        await User.findByIdAndUpdate(user._id, {tokens:[...oldTokens, {token, signedAt: Date.now().toString()}]})       
        const userInfo = {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            typer: user.typer,
            age: user.age,
            sex: user.sex,
            followers: user.followers,
            followins: user.followins,
            save: user.save,
            avatar: user.avatar ? user.avatar : '',
        }
        res.json({success: true,user:userInfo, token})
    },

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
                message: 'Your Profile has updateed'
            })
        } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error,try after some time'
        })
            console.log('Eroor while uploading profile imge',error.message)
        }
    }, 
}
module.exports = userController;