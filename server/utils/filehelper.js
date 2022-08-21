const multer = require('multer');

const  storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads/files');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});

const filestorage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './uploads/files');
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname);
    }
});


const upload = multer({storage});
const uploadfile = multer({storage:filestorage});

module.exports = {
	upload,
    uploadfile
}