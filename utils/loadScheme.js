'use strict'
const path = require('path')
const { readFileSync } = require('fs')

const loadSchemaBase = () => {
    return readFileSync(path.join(__dirname,'scheme_base.graphql'),'utf-8')
}

module.exports = {
    loadSchemaBase
}