const mongoose = require("mongoose");
//const Preference = require('./preference');
//const Schema = mongoose.Schema;
// const preferenceSchema = new mongoose.Schema({
//     wakeuptime: {
//         type: String,
//         value: Number,

//     },
//     female: {
//         type: String
//     },
//     male: {
//         type: String
//     },
//     idk: {
//         type: String
//     },
//     other: {
//         type: String
//     }
// })

const profileSchema = new mongoose.Schema({
  username: {
    type: String,
    username: String,
  },
  pronouns: {
    type: String,
    pronouns: String,
  },
  avatar: {
    type: String,
    avatar: String,
  }
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;

// const Preference = mongoose.model('Preference', preferenceSchema);
// module.exports = Preference
