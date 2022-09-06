const router = require("express").Router();
const { isAuth } =require("../middlewares/auth")
const postController = require("../controllers/postController")
module.exports = router;