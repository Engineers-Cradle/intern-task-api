const mongoose = require("mongoose");
require("dotenv").config();

const db = mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("Connected to MongoDB 🍀");
    return mongoose.connection.getClient();
  })
  .catch((e) => {
    console.log(e);
  });

module.exports = db;
