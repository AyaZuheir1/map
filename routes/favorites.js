const router = require("express").Router();
const Favorite = require("../db/models/Favorite");

//create a Favorite
router.post("/", async (req, res) => {
  try {
      const favorite = await Favorite.create({
        username: req.body.username,
        title: req.body.title,
        desc: req.body.desc,
        lat: req.body.lat,
        long: req.body.long,
      });
  
      res.status(200).send({
        code: 200,
        success: true,
        message: "The place add to favorite successfully",
        data: favorite,
      })
  
  
  } catch (err) {
    console.log(err);
    res
      .status(200)
      .send({ code: 500, massege: err.title, success: false });
  }
});

//get all Favorites
router.get("/", async (req, res) => {
  try {
    const Favorites = await Favorite.find();
    res.status(200).send({
      code: 200,
      success: true,
      data: Favorites,
    });
  } catch (err) {
    res
      .status(200)
      .send({ code: 500, massege: "Internal server error", success: false });
  }
});

module.exports = router;
