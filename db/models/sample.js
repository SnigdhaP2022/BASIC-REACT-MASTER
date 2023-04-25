const mongoose=require('mongoose');


const Sampleschema = new mongoose.Schema({ 
    id:{
        type:Number,
    },   //defining structure of a document 
    first_name:{
        type:String,
        trim:true
    },
    last_name:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true
    } ,
    gender: {
        type:String,
        trim:true
    },
    income:{
        type:String
    },
    city:{ 
        type:String
    },
    car:{type:String},
    quote:{type:String},
    phone_price:{type:String},
    
},
{ timestamps: true },
{
    versionKey: false,
})

const Sampledata=new mongoose.model("Sampledata",Sampleschema);

module.exports=Sampledata; 