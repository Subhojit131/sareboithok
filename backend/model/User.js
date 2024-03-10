const mongoose = require('mongoose')
const {Schema } = mongoose

const User = new Schema ({
    username: String,
    email: String,
    password: String,
    confirmpassword: String
})

module.exports = mongoose.model('UserSchema', User)