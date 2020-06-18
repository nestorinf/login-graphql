'use strict'
const path = require('path')
const queries = require('./queries')
const mutation = require('./mutation')
const {readFileSync} = require('fs')
const schema = readFileSync(path.join(__dirname,'scheme.graphql'),'utf-8')
module.exports = {
    typeDefs: schema,
    resolvers:{
        Query:queries,
        Mutation:mutation
    }
}