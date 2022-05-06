const express = require('express')
const router = express.Router()

router.get('/', (req, res) =>{
    res.send({
        user1: 'Arslan',
        user2: 'Qais',
        user3: 'Ayan'
    })
})

router.post('/', (req, res) =>{
    console.log(req.body.firstName)
    res.send("New User Created Successfully!")
})

router.get('/new', (req, res) =>{
  res.render("users/new", {firstName: "Test"})
})

module.exports = router