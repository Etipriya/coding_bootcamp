const { Router } = require("express");
const bcrypt = require("bcrypt");

const User = require("../../models/User");

const router = Router();

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      res.json({ success: true, message: user.greet() });
    } else {
      res.status(401).json({ error: "User not authorised" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

router.post("/", loginUser);

module.exports = router;
