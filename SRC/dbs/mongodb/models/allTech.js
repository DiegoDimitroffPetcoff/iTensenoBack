const mongoose = require("mongoose");

const TechSchema = new mongoose.Schema({
  name: { type: String, required: true },
  users: { type: Array, required: false },
});

module.exports = mongoose.model("tech", TechSchema);
