const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/usersdubs")
  .then(() => {
    console.log("connect");
  })
  .catch((err) => {
    console.log("error");
  });

module.exports = mongoose.connection;

const userSchema = new mongoose.Schema({
  nameUser: { type: String },
  phone_number: { type: String },
  password: { type: String },
  date: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
