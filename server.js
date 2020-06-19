'use strict'
const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const { ApolloServer } = require('apollo-server-express')
const PORT = process.env.PORT || 4100
const fs = require('fs')
const { loadSchemaBase } = require('./utils/loadScheme')
const schemeBase = loadSchemaBase() // load scheme base GraphQL

const servicePath = require('./servicesPath.json')

let Objects    = []
let services   = []
let keyService = []
for (const key2 in servicePath) {
    const pathService = Object.values(servicePath[key2])
    
    if( pathService[0] ) {
        services = require(  pathService[0] )

        keyService = Object.keys(servicePath[key2])
        Objects[keyService] = services
    }

   
}

let typeDefsd  = []
let resolvers = []

for (const key in Objects) {
   typeDefsd  += Objects[key].typeDefs
   resolvers  = Objects[key].resolvers
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