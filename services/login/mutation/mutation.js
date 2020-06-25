
'use strict'
const { loginIn } = require('../../../utils/auth')

const login = async (_,{email, password},context) => {
    const  dataLogin = await loginIn(email,password)
    return dataLogin
}

module.exports = {
    login
}