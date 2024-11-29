const mongoose=require("mongoose");
// 
function database(){
    mongoose.connect("mongodb+srv://faisalahmed7405:xpUDyp6jLMyJsZ1E@cluster0.hly9g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then((res)=>{
        console.log("Database connected....")
    }).catch((err)=>{
        console.log(err.message+"=>mongoodb connection")
    })
}
module.exports=database;