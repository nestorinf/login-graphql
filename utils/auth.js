"use strict"
const jwt = require('jsonwebtoken')
const moment = require('moment')
const { AuthenticationError  } = require('apollo-server-express')
const secretKey = 'KeySecret1'
const sign = (payload) => {
    return jwt.sign(payload,secretKey,{expiresIn:'1m'})
}

const verify = (token) => {
    return jwt.verify(token,secretKey)
}

const isAuth = (context,next) => {
   
    const authorization  = context.headers.authorization
    
    if(!authorization) {
        throw new Error('Failed Authentication')
    }
    
    try {
        const token   = authorization.split(" ")[1]
        const payload = verify(token)
        return payload
    } catch (err) {
        throw new Error('Not authenticated')
    }
    
}

const refreshToken = (token) => {}

const getUser =  (token) =>{

    try {
        if(token){
            return jwt.verify(token,secretKey)
        }
        return -1
    } catch (error) {
        throw new AuthenticationError('token invalido')
    }
}
module.exports = {
    sign,
    isAuth,
    getUser
}