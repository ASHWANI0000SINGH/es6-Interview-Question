const express=require("express");
const app=express();

app.get("/",(req,res)=>{
    res.send("send");
}).listen(4300)