const router = require("express").Router();
const { isAuth } =require("../middlewares/auth")
const userController = require("../controllers/userController");
const { validateUserSignUp, userVlidation, validateUserSignIn } = require("../middlewares/user");
const User = require('../models/user')
const multer = require('multer');
const storage = multer.diskStorage({})
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb('invalid image file!', false);
    }
};
const uploads = multer({ storage, fileFilter });



// ADD USER
//router.post("/add_user",validateUserSignUp,userVlidation,userController.add_user);
router.post("/add_user",userController.add_user);
// SIGN IN
//router.post('/sign_in',validateUserSignIn,userVlidation,userController.userSignIn);
router.post('/sign_in',userController.userSignIn);
//SIGN BY TOKEN
router.post('/sign_in2/:token', isAuth, userController.userSignIn2)
//UPDATE PROFILE
router.post('/update',isAuth,userController.uploadProfileInformation);

//SIGN OUT
router.get('/sign_out',isAuth,userController.userSignOut);

//UPLOAD PROFILE IMAGE
router.post('/upload_profile',isAuth, uploads.single('profile'),userController.uploadProfile);

router.put('/fetch_one/:id', isAuth, userController.fetch_one);
router.get('/fetch_save', isAuth, userController.fetch_save);

//follow
router.put('/follow/:id',isAuth,userController.follow);
//unfollow
router.put('/unfollow/:id',isAuth,userController.unfollow);
module.exports = router;