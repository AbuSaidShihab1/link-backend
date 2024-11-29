const mongoose=require("mongoose");

const Adminschema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const adminmodel=mongoose.model("Admin",Adminschema);

module.exports=adminmodel;