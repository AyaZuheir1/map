const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on("connected", () => {
  console.log("MongoDB has connected succesfully");
});

mongoose.connection.on("reconnected", () => {
  console.log("MongoDB has reconnected");
});

mongoose.connection.on("error", (error) => {
  console.log("MongoDB connection has an error", error);
  mongoose.disconnect();
});

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB connection is disconnected");
});
