const express = require('express');
const router = express.Router();

const Locations = require('../models/Location.model');


router.get('/', (req, res) => {
    Locations.find({}, (error, data) => {
        if(error){
            res.sendStatus(500);
        }
        else{
            res.send(data);
        }
    });
});

router.post('/add', (req, res) => {
    let locations;
    Locations.exists({
        name: req.name.toLowerCase(),
        address: req.address.toLowerCase()
    }, (error, data) => {
        if(error){
            console.log("Error: Unable to add location");
        }
        else if(data != null){
            console.log("Error: Already exists");
        }
        else{
            Locations.create({
                name: req.name.toLowerCase(),
                address: req.address.toLowerCase()
            }, (error, data) => {
                if(error){
                    res.send(error);
                }
                else{
                    res.send("Successfully added");
                }
            });
        }
    });
});


module.exports = router;