const express = require('express')
const app = express()
const connect_with_db = require('./config/dbConnection')
const fileUpload = require('express-fileupload');
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}))
const connect_with_cloud = require('./config/cloudinaryConnection')
const router = require('./routes/userRoutes')
app.use(express.json())
app.use("/api",router)

connect_with_db()
connect_with_cloud.cloudinaryConnect()
app.listen(3500,()=>{
    console.log("server started at the port ")
})

