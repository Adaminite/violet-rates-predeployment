const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('dotenv').config();

const TestModel = require('./models/Test.model.js');
const ReviewsRouter = require('./routes/reviews');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const dbUri = process.env.DB_URL;
mongoose.connect(dbUri, {
    useNewUrlParser: true,
});


app.get('/', (req, res) => {
    res.send("Works");
});

app.use('/reviews', ReviewsRouter);

app.post('/test', (req, res) => {
    
    const body = req.body;

    TestModel.create({
        name: body.name,
        age: body.age,
        favoriteFood: body.favoriteFood
    }).then( (response) => {
        res.send("Successfully uploaded to DB");
    }).catch( (err) => {
        console.log(err);
    }); 
    
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});



