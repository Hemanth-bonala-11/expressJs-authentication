const User = require('../models/userModel')
const cloudinary = require('cloudinary')
const uploadFile = async (file, folder) =>{
    const options={
        folder
    }
    return  await cloudinary.uploader.upload(file.tempFilePath, options)

}

exports.modifyDetails = async (req, res)=>{
    const data = req.body;
    try{
    if(data["role"] === "admin"){
        if(data["name"]!==undefined && req.files){
                const profile_pic = req.files.profile;
              
                const response = await  uploadFile(profile_pic,"build-with-innovation-task");
                const profile_url=response.secure_url;
                user = await User.findOneAndUpdate({email:data["email"]},{name: data["name"],profileImageUrl:profile_url});
                if(!user){
                    return res.status(404).json({
                        "message": "account not found"
                    })
                }
                return res.status(200).json({
                    "message": "updated successfully"
                })
            }    
        
        else if(data["name"]!==undefined && (! req.files)){
            user = await User.findOneAndUpdate({email:data["email"]},{name: data["name"]});
            if(!user){
                return res.status(404).json({
                    "message": "account not found"
                })
            }
            return res.status(200).json({
                "message": "updated successfully"
            })
        }    
        
        else if(data["name"]===undefined && req.files){
            const profile_pic = req.files.profile;
                const response = await  uploadFile(profile_pic,"build-with-innovation-task");
                const profile_url=response.secure_url;
                user = await User.findOneAndUpdate({email:data["email"]},{profileImageUrl:profile_url});
                if(!user){
                    return res.status(404).json({
                        "message": "account not found"
                    })
                }
                return res.status(200).json({
                    "message": "updated successfully"
                })
            }    
        }    
    
    else{
        if(data["user_email"]===data["email"]){


            if(data["name"]!==undefined && req.files){

                profile_pic = req.files.profile;
                const response = await  uploadFile(profile_pic,"build-with-innovation-task");
                profile_url=response.secure_url;
                user = await User.findOneAndUpdate({email:data["email"]},{name: data["name"],profileImageUrl:profile_url});
                if(!user){
                    return res.status(404).json({
                        "message": "account not found"
                    })
                }
                return res.status(200).json({
                    "message": "updated successfully"
                })
            }    
        
        else if(data["name"]!==undefined && (! req.files)){
            user = await User.findOneAndUpdate({email:data["email"]},{name: data["name"]});
            if(!user){
                return res.status(404).json({
                    "message": "account not found"
                })
            }
            return res.status(200).json({
                "message": "updated successfully"
            })
        }    
        
        else if(data["name"]===undefined && req.files){
            profile_pic = req.files.profile;
            const response = await  uploadFile(profile_pic,"build-with-innovation-task");
            profile_url=response.secure_url;
            user = await User.findOneAndUpdate({email:data["email"]},{profileImageUrl:profile_url})
            if(!user){
                return res.status(404).json({
                    "message": "account not found"
                })
            }
            return res.status(200).json({
                "message": "updated successfully"
            })
        }    

        }
        else{
            res.status(400).json({
                "message":"cannot update other users data"
            })
        }
    }
   }catch(err){
    return res.status(400).json({
        "message": err.message
    })
   }
}

exports.deleteUser = async (req, res)=>{
    data = req.body;
    try{
        user_email = data["user_email"]
    if(data["role"] === 'admin'){
        user = await User.findOneAndDelete({email: data["email"]});
        if(!user){
            return res.status(404).json({
                "message": "account not found"
            })
        }
        return res.status(200).json({
            "message": "deleted successfully"
        })
    }
    else{
        if(data["email"]===user_email){
            user = await User.findOneAndDelete({email: data["email"]});
            if(!user){
                return res.status(404).json({
                    "message": "account not found"
                })
            }
            return res.status(200).json({
                "message": "deleted successfully"
            })
        }
        else{
            res.status(400).json({
                "message": "you cannot delete others account"
            })
        }
    }

    }catch(err){
        return res.status(400).json({
            "message": err.message
        })
    }
    

}