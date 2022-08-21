'use strict';
const File = require('../models/fileModel');
const path = require('path');
const fs = require('fs');
const User = require('../models/userModel');
const sendMail = require('../utils/sendMail')
const {CLIENT_URL} = require('../config/keys');

const myFiles = async(req,res) =>{
	try {
		const {id} = req.params;
		const files = await File.find({user:id,parent:false}).sort('-createdAt');
		res.json(files);
	} catch(err) {
		return res.status(500).json({msg:err.message});
	}
} 

const addFiles = async(req,res) =>{
	try {
		if(!req.file) return res.status(400).json({msg:'No Files selected'});
		const {id} = req.params;
		const fileURL = `${CLIENT_URL}/files/${req.file.filename}`;
		const folderId = req.body.folderId;
		const newFile = await File.create({
			user:id,
			fileurl:fileURL,
			filename : req.file.filename,
			fileSize:req.file.size,
			parent:folderId ? true : false,
			folderid:folderId
		});
		
		res.json(newFile);
		console.log(newFile);
	} catch(err) {
		return res.status(500).json({msg:err.message});
	}
}

const removeFile = async(req,res) =>{
	try {
		const {id} = req.params;
		const exists = await File.findById(id);
		if(!exists) return res.status(400).json({msg:'File Not Found!'});
		const filename = exists.fileurl.split('files/')[1];
		const pathinfo = path.join(__dirname,`../../uploads/files/${filename}`);
		if(fs.existsSync(pathinfo)){
			fs.unlink(pathinfo,(err)=>{
				if(err) console.log(err);
			})
		}
		await File.findByIdAndDelete(id);
		res.json({
			msg:'File Deleted!'
		})
	} catch(err) {
		return res.status(500).json({msg:err.message});
	}
}

const shareFile = async(req,res) =>{
	try {
		const {email,url} = req.body;
		if(!email || !url) return res.status(400).json({msg:'Please Provide necessary fields!'});
		const filename = url.split('files/')[1];

		sendMail(email, url, "Here is the file")
		res.status(200).json({msg:'File Shared Successfully!'});
	} catch(err) {
		return res.status(500).json({msg:err.message});
	}
}



const singleFileUpload = async (req, res, next) => {
    try{
        const file = new SingleFile({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2) // 0.00
        });
        await file.save();
        console.log(file);
        res.status(201).send('File Uploaded Successfully');
    }catch(error) {
        res.status(400).send(error.message);
    }
}
const multipleFileUpload = async (req, res, next) => {
    try{
        let filesArray = [];
        req.files.forEach(element => {
            const file = {
                fileName: element.originalname,
                filePath: element.path,
                fileType: element.mimetype,
                fileSize: fileSizeFormatter(element.size, 2)
            }
            filesArray.push(file);
        });
        const multipleFiles = new MultipleFile({
            title: req.body.title,
            files: filesArray 
        });
        await multipleFiles.save();
        res.status(201).send('Files Uploaded Successfully');
    }catch(error) {
        res.status(400).send(error.message);
    }
}

const getallSingleFiles = async (req, res, next) => {
    try{
        const files = await SingleFile.find();
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }
}
const getallMultipleFiles = async (req, res, next) => {
    try{
        const files = await MultipleFile.find();
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }
}

const fileSizeFormatter = (bytes, decimal) => {
    if(bytes === 0){
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}


module.exports = {
	myFiles,
	addFiles,
	removeFile,
	shareFile,
	singleFileUpload,
  multipleFileUpload,
  getallSingleFiles,
  getallMultipleFiles
}


