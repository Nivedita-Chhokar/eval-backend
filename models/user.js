const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"This field is required"]
    },
    email: {
        type: String,
        required: true,
    },
    password: { 
        type: String,
        required: true,
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;