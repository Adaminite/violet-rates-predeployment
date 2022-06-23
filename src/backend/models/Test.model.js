const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        favoriteFood:{
            type: String,
            trim: true,
            required: true
        }
    }
);

const TestModel = mongoose.model('Test', testSchema);

module.exports = TestModel;