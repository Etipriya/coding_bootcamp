const { Router } = require("express");

const User = require("../../models/User");

const router = Router();

const isValid = ({ body }) => {
  const validKeys = ["username", "email", "password"];

  return Object.keys(body).every((keyFromReq) => {
    return validKeys.includes(keyFromReq);
  });
};

const getUsers = async (req, res) => {
  try {
    const userData = await User.findAll();
    res.json(userData);
  } catch (err) {
    console.log(`[ERROR]: ${err.message}`);
    res.status(500).json({
      error: "Failed to get users",
    });
  }
};

const createUser = async (req, res) => {
  try {
    if (isValid(req)) {
      const userData = await User.create(req.body);
      res.status(200).json(userData);
    } else {
      console.log(`[INVALID_KEYS]: Invalid request body`);
      res.status(400).json({
        error: "Invalid request",
      });
    }
  } catch (err) {
    console.log(`[ERROR]: ${err.message}`);
    res.status(500).json({
      error: "Failed to create user",
    });
  }
};

router.get("/", getUsers);

router.post("/", createUser);

module.exports = router;
