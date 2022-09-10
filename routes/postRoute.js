const router = require("express").Router();
const { isAuth } =require("../middlewares/auth")
const postController = require("../controllers/postController")
router.put('/add_post/:id', isAuth, postController.add_post);
router.put('/fetch_one/:id', isAuth, postController.fetch_one);
router.get('/fetch_all', isAuth, postController.fetch_all);
router.get('/find_age/:age', isAuth, postController.find_age);
router.get('/find_wage/:wage', isAuth, postController.find_wage);
router.get("/find_employer_career",isAuth, postController.find_employer_career);
module.exports = router;
