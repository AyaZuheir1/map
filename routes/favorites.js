const router = require("express").Router();
const Favorite = require("../models/Favorite");

//create a Favorite
router.post("/", async (req, res) => {
  const newFavorite = new Favorite(req.body);
  try {
    const savedFavorite = await newFavorite.save();
    res.status(200).json(savedFavorite);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get all Favorites
router.get("/", async (req, res) => {
  try {
    const Favorites = await Favorite.find();
    res.status(200).json(Favorites);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
 