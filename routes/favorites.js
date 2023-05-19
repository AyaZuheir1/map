const router = require("express").Router();
const Favorite = require("../models/Favorite");

//create a Favorite
router.post("/", async (req, res) => {
  const newFavorite = new Favorite(req.body);
  try {
    const savedFavorite = await newFavorite.save();
    res.status(200).json(savedFavorite);
  } catch (err) {
    res.status(200).send(  {code: 500,
      massege:"Internal server error",
      success: false});  }
});

//get all Favorites
router.get("/", async (req, res) => {
  try {
    const Favorites = await Favorite.find();
    res.status(200).  send({
      code: 200,
      success: true,
      data: Favorites,
    });
  } catch (err) {
    res.status(200).send(  {code: 500,
      massege:"Internal server error",
      success: false});
  }
});

module.exports = router;
 