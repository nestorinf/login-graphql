'use strict'
const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const { ApolloServer } = require('apollo-server-express')
const PORT = process.env.PORT || 4100

const { loadSchemaBase } = require('./utils/loadScheme')
const schemeBase = loadSchemaBase() // load scheme base GraphQL


// const services = {
//     login:  require('./services/login/resolvers'),
//     signUp: require('./services/signup/resolvers')
// }

// let typeDefs = []

// for (const key in services) {
//    typeDefs = services.key
//    console.log(typeDefs)
// }

const { typeDefs: loginTypeDefs, resolvers: resolversLogin } = require('./services/login/resolvers')
const { typeDefs: signupDef, resolvers: signupResolvers }    = require('./services/signup/resolvers')
const server = new ApolloServer({
    typeDefs:[ schemeBase, loginTypeDefs, signupDef ],
   resolvers:[ resolversLogin , signupResolvers ]
})

server.applyMiddleware({ app })
const run = () => {
    app.listen(PORT,(req,res) => {
        console.log('Service Login GraphQL on PORT: '+PORT)
    })
}

run()