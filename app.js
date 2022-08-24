const express = require('express');
const app = express();
const sharp = require('sharp');
const fs = require('fs');

const nodeHtmlToImage = require('node-html-to-image')
const cloudinary = require("./utils/cloudinary");

app.use(express.static("./public"));
app.use("/images", express.static('images'));
app.set("view engine","ejs");
app.set("views","./views");


const blueResume = require("./docs/blue-resume");

require('dotenv').config();

//ket noi mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI,(e)=>{
    if(e){
        console.log("ket noi khong thanh cong"+e);
    }else{
        console.log("ket noi thanh cong")
    }
});

app.get('/',(req,res)=>{
    res.render("trangchu")
})
app.get('/preViewResume',async(req,res)=>{  
    // try {
    //     console.log("ok");
    //     const result = await cloudinary.uploader.upload("./images/image.png");
    //     res.json(result);
    //     console.log("xong");       
    // } catch (error) {
    //     console.log("loi")
    //     console.log(error)
    // }


    // let pathImage = `./images/image${Date.now()}toHieulajj.png`;
    // nodeHtmlToImage({
    //     output: pathImage,
    //     html: blueResume(),
    //     content: { name: 'you' }
    //   })
    //     .then(() => 
    //     {
    //         //console.log(`http:/localhost:8000${pathImage.slice(-(pathImage.length-1)) }`)
           
    //     }
    //     );     
    let pathImage = `./images/image${Date.now()}toHieulajj.png`;
    let pathImageChange = `./images/image${Date.now()}toHieulajj1.png`
    nodeHtmlToImage({
        output: pathImage,
         html: blueResume(),
         content: { name: 'you' }
    }).then(() => 
        {
            console.log("thanh cong buoc 1");
            sharp(pathImage).extract({ width: 586, height: 755, left:0,top:0,right:169 }).toFile(pathImageChange).then(
               ()=>{
                fs.unlink(pathImage, (err) => {
                    if (err) {
                    console.error(err)
                    return
                }else{
                    console.log("xoa file cu thanh cong");
                }
                }) 
               } 
            );                   
        }
        );           
});


app.listen(8000,()=>{
    console.log('port is listening')
})