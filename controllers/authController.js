const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary')

const uploadFile = async (file, folder) =>{
    const options={
        folder
    }
    return  await cloudinary.uploader.upload(file.tempFilePath, options)

}

exports.adminSignup = async (req,res)=>{
    try{

        const newUser=req.body;
        let profile_url = "https://res.cloudinary.com/diyvqgj54/image/upload/v1704013771/build-with-innvovation-task/profile_gjhqum.webp"
        
        const user=await User.findOne({
            email:newUser['email'],
            
        })
        if(user){ 
            res.status(400) .json({message:'account already available'})
        }
        else{
            const saltrounds=((newUser['pwd'].length)%5)+3;
            
            let hashed_password=""
            await bcrypt.hash(newUser['pwd'],saltrounds).then((result)=>{hashed_password=result}).catch((err)=>{
                console.log(err);
                res.status(400);
                res.json({status:"not ok",message:"error in hashing"})
            });
            
         
                profile_pic = req.files.profile;
                const response = await  uploadFile(profile_pic,"build-with-innovation-task");
                profile_url=response.secure_url;
                
                
            
                
            await User.create({
            name:newUser['fullname'],
            email:newUser['email'],
            phoneNo:newUser['phone'],
            password:hashed_password,
            role:"admin",
            profileImageUrl:profile_url
           
        })
        res.json({status:'ok',message:'account created'})
    
    }

    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}
exports.userSignup = async (req,res)=>{
    try{

        const newUser=req.body;
        let profile_url = "https://res.cloudinary.com/diyvqgj54/image/upload/v1704013771/build-with-innvovation-task/profile_gjhqum.webp"
        
        const user=await User.findOne({
            email:newUser['email'],
            
        })
        if(user){ 
            res.status(400) .json({message:'account already available'})
        }
        else{
            const saltrounds=((newUser['pwd'].length)%5)+3;
            
            let hashed_password=""
            await bcrypt.hash(newUser['pwd'],saltrounds).then((result)=>{hashed_password=result}).catch((err)=>{
                console.log(err);
                res.status(400);
                res.json({status:"not ok",message:"error in hashing"})
            });
            
         
                profile_pic = req.files.profile;
                const response = await  uploadFile(profile_pic,"build-with-innovation-task");
                profile_url=response.secure_url;
                
                
            
                
            await User.create({
            name:newUser['fullname'],
            email:newUser['email'],
            phoneNo:newUser['phone'],
            password:hashed_password,
            role:"user",
            profileImageUrl:profile_url
           
        })
        res.json({status:'ok',message:'account created'})
    
    }

    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}

exports.login = async (req,res)=>{

    try{

        const newUser=req.body;
    let user=""
    // if(newUser && newUser["email"]){
         user=await User.findOne({
            email:newUser['email']
        })
    // }
    // else if(newUser && newUser["phone"]){

    //      user=await User.findOne({
    //         phoneNo:newUser['phone']
    //     })
    // }
    
    if(user){
        const valid=await bcrypt.compare(newUser['pwd'],user.password);
        if(valid){
            let data = { 
                email: newUser['email'],
                role: user["role"]
            } 
            const secretKey=process.env.SECRET_KEY;
            const access_token=jwt.sign(data,secretKey,{expiresIn:'2d'});
            
            
        res.status(200);
        res.cookie("access_token",access_token)
        res.json({status:"ok",password:valid,message:'access granted',token:access_token})
        
        }
        
        else{
            console.log();
            res.status(404);
            res.json({status:"not valid",password:valid,message:'Enter valid credentials'})
        }    
    }
    else{
        // console.log(req.cookies());
        res.status(404)
        res.json({status:404,message:'enter valid credentials'})
    }

    }catch(err){
        res.status(400).json({
            message:err.message
        })

    }

}