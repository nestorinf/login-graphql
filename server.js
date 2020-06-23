'use strict'
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { ApolloServer } = require('apollo-server-express')
const PORT = process.env.PORT || 4100
const {getUser} = require('./utils/auth')
const { typeDefsResolvers,loadSchemaBase } = require('./config/loadScheme')
const { objectTypeDefs, objectResolvers } =  typeDefsResolvers()
const schemeBase = loadSchemaBase()

const server = new ApolloServer({
   typeDefs:[schemeBase,objectTypeDefs],
    resolvers:objectResolvers,
    context: ({ req }) => {
        const authorization = req.headers["authorization"] || ""
        const token = authorization.split(" ")[1]
        const payload = getUser(token)
        return {
            payload
        }
    }
})

server.applyMiddleware({ app })
const run = () => {
    app.listen(PORT,(req,res) => {
        console.log('Service Login GraphQL on PORT: '+PORT)
    })
}

run()