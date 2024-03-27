const mongoose = require("mongoose");
const { type } = require("os");

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
  admin: { type: Boolean },
});

const categoryShema = new mongoose.Schema([
  {
    id:{type:String},
    name: { type: String },
    url: { type: String },
    subitems:{type: [Object]}
  }
]);

const User = mongoose.model("User", userSchema);
module.exports = User;

const Category = mongoose.model("Category", categoryShema);
// async function getUsers (){
//   const users = await User.find()
//   console.log(users);
// }
// getUsers()

async function getCategory (){
  const category = await Category.find()
  console.log(category);
}

getCategory()
