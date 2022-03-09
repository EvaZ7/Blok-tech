const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    identifier: {
        type: File,
        required: true
    },
    content: {
        type: Image,
        required: true,
        //lowercase: true
    },
    review: {
        type: Image,
        required: true,
        //lowercase: true
    }

})

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile