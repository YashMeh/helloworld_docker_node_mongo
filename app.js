const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const app=express();
const port=3000;
const user=require("./models/user.js");
mongoose
  .connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
app.use(bodyParser.urlencoded({extended:true}));  
app.use(bodyParser.json());
app.get("/",function(req,res){
    user.find().then(function(users){
        res.status(200).json(users);
    }).catch(function(err){
        console.log(err);
    })
})
app.post("/",function(req,res){
    
    var ob=req.body;
    console.log(ob);
    user.create(ob).then(function(user){
        res.status(201).json(user);
    }).catch(function(err){
        console.log(err);
    })
})
app.listen(port,function(err){
    if(err)
    console.log(err)
    console.log("Server running on port "+ port);
})

