const cloudinary = require('cloudinary')
const fs = require('fs')
const {CLOUD_API_KEY,CLOUD_API_SECRET,CLOUD_NAME} = require('../config/keys')
cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: CLOUD_API_KEY,
    api_secret: CLOUD_API_SECRET
})



const uploadCtrl = {
    uploadAvatar: (req, res) => {
        try {
            const file = req.files.file;
            
            cloudinary.v2.uploader.upload(file.tempFilePath, {
                folder: 'avatar', width: 150, height: 150, crop: "fill"
            }, async(err, result) => {
                if(err) throw err;

                removeTmp(file.tempFilePath)

                res.json({url: result.secure_url})
            })
        
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }

}


const removeTmp = (path) => {
    fs.unlink(path, err => {
        if(err) throw err
    })
}

module.exports = uploadCtrl