const mongoose = require("mongoose");

const UsersSchema = new mongoose.Schema({
  firstName: { type: String, required: true, max: 100 },
  lastName: { type: String, required: true, max: 100 },
  socialNet: { type: String, required: true, max: 100 },
  phonenumber: { type: Number, required: false },
  email: { type: String, required: true, max: 100 },
  username: { type: String, required: true, max: 100 },
  password: { type: String, required: true, max: 100 },
  points: {type: Object, required: true}
});

module.exports = mongoose.model("users", UsersSchema);
