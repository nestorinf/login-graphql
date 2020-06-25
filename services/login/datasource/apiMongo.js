"use strict"
const { RESTDataSource } = require('apollo-datasource-rest')
const baseURL = 'https://jsonplaceholder.typicode.com'

class Posts extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = baseURL
    }

    async getPosts() {
        return await this.get('posts')
    }

}

module.exports = Posts
