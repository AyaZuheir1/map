const User = require("../db/models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");


//REGISTER
router.post("/register", async (req, res) => {
  try {
    //generate new password
    const salt = await bcrypt.genSalt(8);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    //create new user
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      mobile: req.body.mobile,
      country: req.body.country,
      password: hashedPassword,
    });

    //save user and respond
    res.status(201).send({
      code: 201,
      success: true,
      message: "The process done successfully",
      data: user,
    })

  } catch (err) {
    console.error(err)
    res.status(200).send({
      code: 401,
      success: false,
      message: err.message,
  
    })}
  }
);

// LOGIN
router.post("/login", async (req, res) => {
  try {
    // find user
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(200).send({
        code: 400,
        success: false,
        message: "Wrong username or password",
        data: user,
      })
    }

    // validate password
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(200).json("Wrong username or password");
    }

    // send response
    return res.status(201).send({
      code: 201,
      success: true,
      message: "The process done successfully",
      data: user,
    })
  } catch (err) {
    return res.status(200).json(err);
  }
});

router.get("/:username", async (req, res) => {
  try {
    const foundUser = await User.findOne({ username: req.params.username });
    if (foundUser) {
      res.status(200).json(foundUser);
    } else {
      res.status(200).send({
        code: 404,
        success: false,
        message: "user not found",
        data: user,
      })}
  } catch (err) {
    res.status(200).json({ message: err.message });
  }
});

module.exports = router;
