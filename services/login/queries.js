'use strict'
const { AuthenticationError  } = require('apollo-server-express')
const login = async (_,args, context ) => {
    console.log(context.payload)
    if(context.payload === -1) {
        throw new AuthenticationError("no esta autenticado")
    }

    let users = [{
        _id:'2',
        name:'nestor',
        username:'nestorinf',
        email:'ninfante@gmail.com',
        avatar:'·'
    }]
    return users
}

module.exports = {
    login
}