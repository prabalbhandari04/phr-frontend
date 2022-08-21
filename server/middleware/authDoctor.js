const jwt = require('jsonwebtoken')
const {ACCESS_TOKEN_SECRET} = require('../config/keys')

const authDoctor = (req, res, next) => {
    try {
        const token = req.header("Authorization")
        if(!token) return res.status(400).json({msg: "Invalid Authentication."})

        jwt.verify(token, ACCESS_TOKEN_SECRET, (err, doctor) => {
            if(err) return res.status(400).json({msg: "Invalid Authentication."})

            req.doctor = doctor
            next()
        })
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
}

module.exports = authDoctor