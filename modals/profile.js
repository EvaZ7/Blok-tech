const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    profilePic: {
        type: Image,
        required: true
    },
    username: {
        type: String
    }

})

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile