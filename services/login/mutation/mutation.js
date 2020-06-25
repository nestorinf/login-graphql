
'use strict'
const { sign } = require('../../../utils/auth')
const {UserInputError } = require('apollo-server-express')
const moment = require('moment')
const loginIn = (_,{email, password},context) => {
   
    if(!email && !password){
        throw new UserInputError('Ingrese su usuario y clave')
    }
    try {
        const payload = {
            sub: email,
            createdAt: moment().unix()
        }
        const token = sign(payload)
        const path = '/home'
        
        return {
            email,
            token,
            path
        }
    } catch (error) {
        throw new Error(error.name)
    }
}

module.exports = {
    loginIn
}