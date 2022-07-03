const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('dotenv').config();
const path = require("path");
const LocationsRouter = require('./routes/locations');
const UsersRouter = require('./routes/users');
const ReviewsRouter = require('./routes/reviews');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const dbUri = process.env.MONGODB_URI;
mongoose.connect(dbUri, {
    useNewUrlParser: true,
});


app.get('/', (req, res) => {
    res.send("Works");
});

app.use('/api/locations', LocationsRouter);
app.use('/api/users', UsersRouter);
app.use('/api/reviews', ReviewsRouter);

app.use(express.static(path.join(__dirname, "client", "build")))

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


app.listen(port, () => {
    console.log("Listening on port " + port);
});



