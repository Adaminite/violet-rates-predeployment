const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('dotenv').config();
const LocationsRouter = require('./routes/locations');
const UsersRouter = require('./routes/users');
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

app.use('/api/locations', LocationsRouter);
app.use('/api/users', UsersRouter);
app.use('/api/reviews', ReviewsRouter);


app.listen(port, () => {
    console.log("Listening on port " + port);
});


