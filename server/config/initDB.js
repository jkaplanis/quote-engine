const mongoose = require("mongoose");

const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/GADB";

const dbOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true
};

module.exports = () => {
  return mongoose
    .connect(mongoUri, dbOptions)
    .then(() => console.log("MongoDB Connected!"))
    .catch(err => console.log(err));
};
