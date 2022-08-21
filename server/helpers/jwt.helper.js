const jwt = require('jsonwebtoken');
const {JWT_VERIFICATION_CODE,ACCESS_TOKEN_SECRET,REFRESH_TOKEN_SECRET} = require('../config/keys');

const generateAccountToken = (id) =>{
  return jwt.sign({ id },JWT_VERIFICATION_CODE, {
    expiresIn: '30d',
  })
}


const verifyAccountToken = (code) =>{
  return jwt.verify(code,JWT_VERIFICATION_CODE);
}


const createAccesToken = (payload) =>{
  return jwt.sign(payload,ACCESS_TOKEN_SECRET,{expiresIn:'2d'})
}

const createRefreshToken = (payload) =>{
  return jwt.sign(payload,REFRESH_TOKEN_SECRET,{expiresIn:'30d'})
}


const verifyRefreshToken = (payload) =>{
  return jwt.verify(payload,REFRESH_TOKEN_SECRET);
}


module.exports = {
	generateAccountToken,
  verifyAccountToken,
  createAccesToken,
  createRefreshToken,
  verifyRefreshToken
}