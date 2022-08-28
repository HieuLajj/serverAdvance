const router = require("express").Router();
const { isAuth } =require("../middlewares/auth")
const userController = require("../controllers/userController");
const { validateUserSignUp, userVlidation, validateUserSignIn } = require("../middlewares/user");
const Resume = require('../models/resume')
const resumeController = require("../controllers/resumeController")

const multer = require('multer');
const { resolvePlugin } = require("@babel/core");
const storage = multer.diskStorage({})
const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb('invalid image file!', false);
    }
};
const uploads = multer({ storage, fileFilter });

//ADD RESUME
router.post('/add_resume1',isAuth, uploads.single('profile'),resumeController.addResume1);
router.put('/add_resume2/:id',isAuth,resumeController.addResume2);
router.put('/update_image/:id',isAuth,uploads.single('profile'),resumeController.updateImage);
module.exports = router;