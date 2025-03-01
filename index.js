const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const connectDB = require("./api/config/db");
const redisClient = require("./api/config/redis");
dotenv.config();
const app = express();

connectDB();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
