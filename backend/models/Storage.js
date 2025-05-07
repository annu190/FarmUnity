const mongoose = require("mongoose");

const storageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  capacity: { type: Number, required: true },
  description: { type: String },
  contact: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model("Storage", storageSchema);
