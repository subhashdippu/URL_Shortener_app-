const redis = require("redis");

const redisClient = redis.createClient({
  url: process.env.REDIS_URI,
});

redisClient.on("error", (err) => console.error("Redis Error:", err));

redisClient.connect().then(() => console.log("Connected to Redis"));

module.exports = redisClient;
