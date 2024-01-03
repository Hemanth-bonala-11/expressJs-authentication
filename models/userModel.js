const mongoose=require('mongoose')
const User=new mongoose.Schema({
    name:{type:String,required:true},
    profileImageUrl:{
        type:String,
        required:true
    },
    email:{type:String,required:true},
    phoneNo:{type:String,required:true},
    password:{type:String,required:true},
    role:{type:String,required:true,
          enum:["user","admin"]}
})

const model=mongoose.model('UserData',User);

module.exports=model