const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
    name: {String, required: true},
    email: {String, required: true},
    password: {String, required: true},
});