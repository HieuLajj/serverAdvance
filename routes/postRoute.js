const router = require("express").Router();
const { isAuth } =require("../middlewares/auth")
const postController = require("../controllers/postController")
router.put('/add_post/:id', isAuth, postController.add_post);
router.put('/fetch_one/:id', isAuth, postController.fetch_one);
router.get('/test', isAuth, postController.find_age);
module.exports = router;
