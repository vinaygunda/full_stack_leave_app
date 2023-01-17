const express =require("express");
const mongoose =require("mongoose");
const bodyParser =require("body-parser");
const cors =require("cors");


const userRoutes = require("./routes/user")


const app=express();
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/leave_app")

var jsonParser =bodyParser.json()

//app.use(bodyParser.json());



app.get("/",function(req,res){
    res.send("leave app server running")
})



app.use("/user",jsonParser,userRoutes);

app.listen("5000",function(){
    console.log("server running on 5000")




})