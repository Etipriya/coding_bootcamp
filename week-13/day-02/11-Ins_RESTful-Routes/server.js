const express = require("express");

const routes = require("./routes");
const sequelize = require("./config/connection");

const PORT = process.env.PORT || 3001;

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes (middleware)
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(`Server running on http://localhost:${PORT}`)
  );
});
