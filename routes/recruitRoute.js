const router = require("express").Router();
const { isAuth } =require("../middlewares/auth")
const recruitController = require("../controllers/recruitController")
router.post('/add_recruit',isAuth,recruitController.add_recruit);
router.put('/update_recruit/:id',isAuth,recruitController.update_recruit);
router.get('/fetch_all',isAuth,recruitController.fetch_all);
router.put('/fetch_one/:id',isAuth,recruitController.fetch_one);
router.delete('/delete/:id',isAuth,recruitController.deleteRecruit);
router.get('/phanloai',isAuth,recruitController.recruitPhanloai);
router.get('/recruittype/:id',isAuth,recruitController.recruitTypes);
module.exports = router;