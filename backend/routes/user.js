const express = require("express");
const User = require("../models/user");
const router = express.Router();



router.post("/signup", function (req, res) {
    var user = new User({ firstName: req.body.firstName, lastname: req.body.lastname, email: req.body.email, password: req.body.password })
    user.save().then(function (user) {
        if (user) {
            res.send(user)
        } else {
            res.status(500).send("something went wrong while signup")
        }


    })


})

router.post("/login", function (req, res) {
    console.log(req.body)
    User.find({ email: req.body.email }), function (err, user) {
        if (err) {
            res.send(err);
        }
        console.log(user)


        if (!user) {
            res.send("user not found")

        }
        else {
            if (user.password === req.body.password) {
                res.send({ data: user })
            } else {
                res.send("email/password wrong")
            }
        }
    }


    









})

        module.exports = router;