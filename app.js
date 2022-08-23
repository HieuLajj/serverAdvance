const express = require('express');
const app = express();

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
    res.send('Hello');
})


app.listen(8000,()=>{
    console.log('port is listening')
})