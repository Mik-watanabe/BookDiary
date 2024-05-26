require("dotenv").config();
const mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
}); 

export default mongoose.models.User || mongoose.model("User", userSchema);