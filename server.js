'use strict'
const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const { ApolloServer } = require('apollo-server-express')
const PORT = process.env.PORT || 4100

const { loadSchemaBase } = require('./utils/loadScheme')
const schemeBase = loadSchemaBase() // load scheme base GraphQL

const servicePath = require('./servicesPath.json')

// let 

// for (const key2 in servicePath) {
//     const pathService = Object.values(servicePath[key2])
//     let keys = require(  pathService )
//     console.log(keys)
// }

const services = {
    login:  require('./services/login/resolvers'),
    signUp: require('./services/signup/resolvers')
}

let typeDefsd  = []
let resolvers = []

for (const key in services) {
   typeDefsd  += services[key].typeDefs
   resolvers  = services[key].resolvers
}

const server = new ApolloServer({
    typeDefs:[schemeBase,typeDefsd],
   resolvers
})

server.applyMiddleware({ app })
const run = () => {
    app.listen(PORT,(req,res) => {
        console.log('Service Login GraphQL on PORT: '+PORT)
    })
}

run()