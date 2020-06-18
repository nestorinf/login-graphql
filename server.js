'use strict'
const express = require('express')
const app = express()
const bodyParse = require('body-parser')
const {graphqlExpress} = require('apollo-server-express')
const PORT = process.env.PORT || 4100

const graphqlSchema = ''

app.use('/graphql', bodyParse.json(), graphqlExpress({schema: graphqlSchema}))
const run = () => {
    app.listen(PORT,(req,res) => {
        console.log('Service GraphQL on PORT: '+PORT)
    })
}

run()