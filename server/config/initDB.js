const mongoose = require("mongoose");

const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/GADB";

module.exports = () => {
  return mongoose
    .connect(mongoUri)
    .then(() => console.log("MongoDB Connected!"))
    .catch(err => console.log(err));
};
