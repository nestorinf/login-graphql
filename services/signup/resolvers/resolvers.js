'use strict'
const path = require('path')
const mutation = require('../mutation/mutation')
const {readFileSync} = require('fs')
const schema = readFileSync(path.join(__dirname,'../schemas','signup.graphql'),'utf-8')
module.exports = {
    typeDefs: schema,
    resolvers:{
        Mutation:mutation,
       
    }
}