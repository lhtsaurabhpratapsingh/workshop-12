const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  mobile_no: String,
});

module.exports = mongoose.model("User", userSchema);
