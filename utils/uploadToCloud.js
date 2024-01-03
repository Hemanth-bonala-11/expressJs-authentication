const cloudinary = require('cloudinary')

exports.uploadFile = async (file, folder) =>{
    const options={
        folder
    }
    return await cloudinary.uploader.upload(file.tempFilePath, options)

}