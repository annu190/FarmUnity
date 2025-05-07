const mongoose = require("mongoose");

const landSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  area: { type: Number, required: true },
  description: { type: String },
  contact: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Land", landSchema);
