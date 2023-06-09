const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const pinRoute = require("./routes/pins");
const favoriteRoute = require("./routes/favorites");

dotenv.config();

app.use(express.json());

require("./db/config");
app.use("/api/users/:id", userRoute);

app.use("/api/users", userRoute);
app.use("/api/pins", pinRoute);
app.use("/api/favorites", favoriteRoute);

module.exports = app;
