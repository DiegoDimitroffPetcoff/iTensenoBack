const mongoose = require("mongoose");

const TechSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false },
});

module.exports = mongoose.model("tech", TechSchema);
