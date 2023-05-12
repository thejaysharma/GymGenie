const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB
module.exports = async () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
   await mongoose.connect(process.env.DB, connectionParams);
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
    console.log("Could not connect to database");
  }
};
