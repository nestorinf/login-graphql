"use strict"
const { RESTDataSource } = require('apollo-datasource-rest')

class Posts extends RESTDataSource {
    constructor(baseURL) {
        super()
        this.baseURL = baseURL
    }

    async getPosts() {
        return await this.get('posts')
    }

}

module.exports = Posts
