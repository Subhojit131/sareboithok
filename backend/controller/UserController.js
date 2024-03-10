const User = require('../model/User')
const bcrypt = require('bcrypt')

const UserSignUp = async(req, res) => {
    const {username, email, password, confirmpassword} = req.body

    if (!username) {
        throw Error("Please fill username field");
    }

    if (!email) {
        throw Error("Please fill email field");
    }

    if (!password) {
        throw Error("Please fill password field");
    }

    if (!confirmpassword) {
        throw Error("Please fill confirm password field");
    }

    User.findOne({email: email}).then(
        async user => {
            if(user) {
                return res.status(400).json({error: "This user already exists"})
            } else {
                const user = new User({
                    username: username,
                    email: email,
                    password: password,
                    confirmpassword: confirmpassword
                })
                const salt = await bcrypt.genSalt(10)
                user.password  = await bcrypt.hash(password, salt)

                user.save().then(
                    response => {
                        res.status(200).json({
                            success: true,
                            result: response
                        })
                    }
                ).catch(err => {
                    res.status(500).json({
                        error: err
                    })
                })
            }
        }).catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

const UserLogin = (req, res) => {
    const {email, password} = req.body

    if (!email) {
        throw Error("Please fill email field")
    }

    if (!password) {
        throw Error("Please fill password field")
    }

    User.findOne({email: email}).then(
        user=> {
            if (!user) {
                return res.status(404).json({error: "User not found"})
            }
            else {
                bcrypt.compare(password, user.password, (err, data) => {
                    if (err) {
                        throw err
                    }

                    if (data) {
                        return res.status(200).json({msg: "Login Success"})
                    } else {
                        return res.status(401).json({msg: "Invalid Credential"})
                    }
                })
            }
        }).catch(err => {
            res.status(500).json({error: err})
        })
    }

    module.exports = {UserSignUp, UserLogin}