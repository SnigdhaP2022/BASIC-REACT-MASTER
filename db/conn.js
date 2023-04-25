const mongoose=require('mongoose')
mongoose.set("strictQuery",false)
mongoose.connect("mongodb+srv://snigdhapatibandla:Mongoosedownload23@snigdhacluster.syfnunh.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser :true,
})

const conn=mongoose.connection;
//if connection is successfull
conn.on("connected", ()=>{
    console.log("database Connected sucessfully");
})
//if connection fails
conn.once("disconnected", ()=>{
    console.log("database disConnected sucessfully");
})
module.exports = conn;