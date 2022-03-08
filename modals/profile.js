const mongoose = require('mongoose')

const proSchema = new mongoose.Schema({
    identifier: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true,
        lowercase: true
    },
    review: {
        type: String,
        required: true,
        lowercase: true
    }

})

const Profile = mongoose.model('Profile'. proSchema);