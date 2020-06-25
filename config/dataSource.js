'use strict'

const Posts = require('../services/login/datasource/apiMongo')

const servicePath = require('./servicesPath.json')
let object = []
for (const key in servicePath) {
    if(servicePath[key].datasource) {
        const {constructor,name, baseURL,path} = servicePath[key].datasource[0]
        // const constructor = require(`../services/${path}`)
        // objectName(Obj)
        // let d = {
            let names = servicePath[key].datasource[0].name 
           object.push(
            require(`../services/${path}`)
           )
           
        // }
        // cont++;
    }
}
console.log( objectName(object) )

// const callDatasource = () => {
//     return {
//         postsAPI: new Posts()
//     }
// }

function objectName(object) {
    return object
}


// module.exports  = callDatasource