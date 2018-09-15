const mongoose = require("mongoose");

let User = mongoose.model('User', {
    login: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        trim: true
    }
});

module.exports = {
    User
};