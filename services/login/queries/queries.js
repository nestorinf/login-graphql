'use strict'
const { AuthenticationError  } = require('apollo-server-express')

const login = async (_,args, context ) => {
    const {payload} = context
    if(payload === -1) {
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
const posts = async (_,args,context) =>  {
    const { dataSources } = context
    try {
        const result =  await dataSources.postsAPI.getPosts()
        return result
    } catch (error) {
        throw new Error(error.name)
    }
}

module.exports = {
    login,
    posts
}