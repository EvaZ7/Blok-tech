const mongoose = require("mongoose");
// var Schema = mongoose.Schema;

const breakfastSchema = new mongoose.Schema({
  coffee: {
    type: String,
    value: Number,
  },
  water: {
    type: String,
  },
  tea: {
    type: String,
  },
  juice: {
    type: String,
  },
  smoothie: {
    type: String,
  },
  croissant: {
    type: String,
  },
  toast: {
    type: String,
  },
  eggs: {
    type: String,
  },
  yoghurt: {
    type: String,
  },
  sandwich: {
    type: String,
  }
  // preferences: { type: Schema.Types.ObjectId, ref: 'Preference' },
  // breakfast: [{ type: Schema.Types.ObjectId, ref: 'profile' }],
});

const Breakfast = mongoose.model("Breakfast", breakfastSchema);
module.exports = Breakfast;
