const mongoose = require("mongoose");

const connectDB = () => {
  try {
    // eslint-disable-next-line no-undef
    mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB - connected");
  } catch (err) {
    console.log("error occured while trying to connect to db:", err);
  }
};

module.exports = connectDB;
