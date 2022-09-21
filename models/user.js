const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    uuid: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
    },
    name:{
        type: String,
        //required: true,
     },
    typer:{
        type: String,
        // required: true,
    },
    phone:{
        type: String,
       //required: true,
    },
    password: {
        type:String,
        //required:true,
    },
    avatar:{
        type: String,
    },
    age:{
        type: String,
    },
    sex:{
        type: String,
    },
    passSendEmail:{
        type: String,
    },
    followers:{
        type: Array,
        ref: "User",
        default:[]
    },
    followins:{
        type: Array,
        ref:"User",
        default:[],
    },
    save:{
        type: Array,
        ref: 'Post',
        default:[]
    },
    recruitments :[{type: mongoose.Schema.Types.ObjectId, ref: "Post"}],
    tokens: [{type: Object}],   
});
// userSchema.pre('save', function (next) {
//     if (this.isModified('password')) {
//       bcrypt.hash(this.password, 8, (err, hash) => {
//         if (err) return next(err);
  
//         this.password = hash;
//         next();
//       });
//     }
// });

// userSchema.methods.comparePassword = async function (password) {
//     if (!password) throw new Error('Password is mission, can not compare!');
  
//     try {
//       const result = await bcrypt.compare(password, this.password);
//       return result;
//     } catch (error) {
//       console.log('Error while comparing password!', error.message);
//     }
// };

// userSchema.statics.isThisEmailInUse = async function(email){
//     if(!email) throw new Error('Invalid Email');
//     try {
//         const user = await this.findOne({email});
//         if(user) return false;
//         return true;
//     } catch (error) {
//         console.log('error inside isThisEmailUse method', error.message)
//         return false;
//     }    
// };
module.exports = mongoose.model('User',userSchema)