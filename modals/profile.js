const mongoose = require('mongoose');
//const Schema = mongoose.Schema;

const profileSchema = new mongoose.Schema({
    username: {
        type: String,
        username: String,
        unique: true
    }, 
    pronouns: {
        type: String,
        pronouns: String
    },
    avatar: {
        // eslint-disable-next-line no-undef
        data: Buffer,
        contentType: String
    }, 
    //preference: {
    //  type: Schema.Type.ObjectId,
    //  ref: 'Preference'
    //}
})

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile