const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    username: {
        type: String,
        username: String
    }, 
    pronouns: {
        type: String,
        pronouns: String
    }
})

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile