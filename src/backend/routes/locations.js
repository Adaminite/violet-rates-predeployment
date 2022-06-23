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





module.exports = router;