const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],

    },
    password: {
        type: String,
        required: [true, "Password is required"]
    }

})

const User = mongoose.model('User', UserSchema);

module.exports = { User }
