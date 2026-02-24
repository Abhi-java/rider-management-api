const express=require('express');
const app=express();
const db=require('./config/db');
app.use(express.json());
app.get('/',(req,res)=>res.send("API OK"));
app.listen(3000,()=>console.log("Running"));
