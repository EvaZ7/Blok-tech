const mongoose = require("mongoose");

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
});

const Breakfast = mongoose.model("Breakfast", breakfastSchema);
module.exports = Breakfast;