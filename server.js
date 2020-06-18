'use strict'
const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const {ApolloServer, gql} = require('apollo-server-express')
const PORT = process.env.PORT || 4100
const {typeDefs,resolvers} = require('./services/login/resolvers')
const graphqlSchema = ''

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.applyMiddleware({ app })
const run = () => {
    app.listen(PORT,(req,res) => {
        console.log('Service GraphQL on PORT: '+PORT)
    })
}

run()