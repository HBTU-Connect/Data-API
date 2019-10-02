const mongoose = require('mongoose');

const Schema = mongoose.Schema

const studentsSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:{
        type: String
    },
    rollNumber:{
        type: Number,
        required: true
    },
    dob:{
        type: String,
        required: true
    },
    phone:{
        type: Number
    },
    branch:{
        type: String
    },
    year:{
        type: String
    },
    email : {
        type: String,
        required: true
    },
    sex:{
        type: String
    }
});


module.exports = mongoose.model('Students', studentsSchema );