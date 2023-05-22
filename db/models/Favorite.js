const mongoose = require("mongoose");

const FavoriteSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      min: 3,
      max: 60,
    },
    desc: {
      type: String,
      min: 3,
    },
    long: {
      type: String,
      required: true,
    },
    lat: {
      type: String,
      required: true,
    },
  },
);

module.exports = mongoose.model("Favorite", FavoriteSchema);
