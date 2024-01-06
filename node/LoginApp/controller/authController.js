const express = require('express');
const bcrypt = require("bcryptjs")
const User = require("../model/userModel")
const jwt = require("jsonwebtoken")
const config = require("../config")
const router = express.Router()

router.post("/register", (req, res) => {
    //encrypt password
    let hashedPassword = bcrypt.hashSync(req.body.password, 8)
    console.log(hashedPassword)
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        phone: req.body.phone,
        role: req.body.role
    }, (err, data) => {
        if (err) return res.send("Error while registering user", err.message)
        res.send("Registration Successfully done")
    })
})


router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        console.log(user)
        if (err) return res.send({ auth: false, token: "Error while logging" })
        //validate user
        if (!user) return res.send({ auth: false, token: "Invalid credentials" })
        else {
            //password validation
            const passIsValid = bcrypt.compareSync(req.body.password, user.password)
            console.log(passIsValid)
            if (!passIsValid)
                return res.send({ auth: false, token: "Invalid credentials" })
            let token = jwt.sign({ id: user._id }, config.secret, {
                expiresIn: 86400 //24 hours  => in sec
            })
            res.send({ auth: true, token: token })
        }
    })
})

//get all user
router.get("/users", (req, res) => {
    User.find({}, (err, data) => {
        if (err) throw err
        res.send(data)
    })
})

//get particular user
router.get("/userInfo", (req, res) => {
    let token = req.headers["x-access-token"]
    console.log(token)
    if (!token) res.send({ auth: false, token: "No token Provided" })

    //jwt verify
    jwt.verify(token, config.secret, (err, user) => {
        console.log(user)
        if (err) res.send({ auth: false, token: 'Invalid Token' })
        User.findById(user.id, (err, result) => {
            res.send(result)
        })
    })

})

module.exports = router