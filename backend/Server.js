const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const userRouter = require('./route/UserRoutes')

const port = 3001
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
    credentials: true
}))

app.use('/', userRouter)

const DB = 'mongodb://localhost:27017/login?readPreference=primary&ssl=false&directConnection=true';

mongoose.connect(DB).then(() => {
    console.log("Connection Successful")
}).catch((err) => {
    console.log(err)
})


app.listen(port, () => {
    console.log(`Server running on ${port}`)
} )