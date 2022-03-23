const mongoose = require("mongoose");
// var Schema = mongoose.Schema;

const preferenceSchema = new mongoose.Schema({
  wakeuptime: {
    type: String,
    value: Number,
  },
  female: {
    type: String,
  },
  male: {
    type: String,
  },
  idk: {
    type: String,
  },
  other: {
    type: String,
  },
  // profile: { type: Schema.Types.ObjectId, ref: 'Profile' }
});

const Preference = mongoose.model("Preference", preferenceSchema);
module.exports = Preference;
