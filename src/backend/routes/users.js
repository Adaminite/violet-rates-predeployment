const express = require('express');
const { useState } = require('react');
const router = express.Router();

const Users = require('../models/User.model');

router.post('/add', (req, res) => {
    console.log(req);
    const query = req.body;
    let username = query.username;
    let password = query.password;
    let email = query.email;

    Users.exists({username: username}, (error, data) => {
        if(error){
            res.send("Cannot register at this time");
        }
        else if(data != null){
            res.send("Username already exists");
        }
        else{

            Users.exists({email: email}, (error, data) => {
                if(error){
                    res.send("Cannot register at this time");
                }
                else if(data != null){
                    res.send("Email already taken");
                }
                else{
                    Users.create({
                        username: username,
                        password: password,
                        email: email
                    }, (error, data) => {
                        if(error){
                            res.send("Unable to register. Please try again later");
                        }
                        else{
                            res.send("Success");
                        }
                    })
                }
            })
        }
    }
);

}

)

module.exports = router;