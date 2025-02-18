const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(console.log("mongodb connected successfully"))
  .catch((error) => console.log("Error connecting to mongodb", error));
