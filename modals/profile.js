const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    username: {
        type: String
    }, 
    pronouns: {
        type: String
    }

})

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile