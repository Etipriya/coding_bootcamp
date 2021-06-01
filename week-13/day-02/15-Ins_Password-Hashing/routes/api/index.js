const { Router } = require("express");

const userRoutes = require("./userRoutes");
const loginRoutes = require("./loginRoutes");

const router = Router();

router.use("/users", userRoutes);
router.use("/login", loginRoutes);

module.exports = router;
