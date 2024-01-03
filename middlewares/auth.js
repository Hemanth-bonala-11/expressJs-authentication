const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.checkRole = (req, res, next)=>{
    token = req.body["access_token"];
    if(token){
        try{
        const decode = jwt.verify(token, process.env.SECRET_KEY)
        console.log(decode)
        req.body["user_email"]=decode["email"]
        req.body["role"]=decode["role"];
        next();
        }catch(err){
            res.status(400).json({
                "message": "invalid token"
            })
        }
        
        
        
    }
    
}