const mongoose = require("mongoose");

//Create schema for CRUD operations
const userSchema = new mongoose.Schema({
  event: {
    type: String,
    required: [true, "Please discuss the Event name"]
  },
  date: {
    type: String,
    required:  [true, "Please set the date"]
  },
  time: {
    type: String,
    required:  [true, "Please set the time"]
  }
});

//craete model
const User = mongoose.model("User", userSchema);

//export User
module.exports = User;
