const Post = require("../models/post")
const Recruit = require("../models/recruit")
const mongoose = require("mongoose")
const postController = {

    add_post: async(req,res) => {
        const {id} = req?.params;
       // const desc = await Recruit.findById(id)
        const {user} = req;
        if(!user) return res
        .status(401)
        .json({success:false, message: 'unauthorized acesss'
            })
        try {
            const result = await Post.create({
                user : req.user._id,
                desc : id
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
        const exp = await Post.findById(id).populate('user').populate('desc');
        res.json(exp);
       } catch (error) {
        res.json(error);
       } 
    },
    //find theo tuoi di =======> test
    find_age: async(req,res) => {
        try {
         const exp = await Post.find().populate('desc').exec(function(err, result) {
            result = result.filter(function(x) {
                console.log(x.desc?.luongcoban)
              return x.desc?.luongcoban == 4000; // return only users with email matching 'type: "Gmail"' query
            });

            res.json(result);
          });
        
        } catch (error) {
         res.json(error);
        } 
    }
}
module.exports = postController;