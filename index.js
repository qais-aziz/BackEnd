const express = require('express')
const app = express()
const port = 3000;

app.listen(
    port,
    () => console.log('I am listening')
)

app.use(express.static("public"))

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

const userRouter = require('./routes/users')
app.use('/users', userRouter)

