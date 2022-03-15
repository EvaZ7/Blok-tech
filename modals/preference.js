const mongoose = require("mongoose");

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
});

const Preference = mongoose.model("Preference", preferenceSchema);
module.exports = Preference;
