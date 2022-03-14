const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema({
    username: {
        type: String,
        username: String
    }, 
    pronouns: {
        type: String,
        pronouns: String
    },
    avatar: {
     type: String,
     avatar: String   
    }
    //preference: {
    //  type: Schema.Type.ObjectId,
    //  ref: 'Preference'
    //}
})

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile