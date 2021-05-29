require("dotenv").config();
const express = require("express");

const connection = require("./config/connection");

const Book = require("./models/Book");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

const init = async () => {
  try {
    await connection.sync({ force: true });

    app.listen(PORT, () => console.log(`Navigate to http://localhost:${PORT}`));
  } catch (err) {
    console.log(`Connection to DB failed: ${err.message}`);
  }
};

init();
