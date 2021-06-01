const { Router } = require("express");
const bcrypt = require("bcrypt");

const User = require("../../models/User");

const router = Router();

const createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const newUser = {
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    };

    const userData = await User.create(newUser);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
};

router.post("/", createUser);

module.exports = router;
