const Land = require("../models/Land");

exports.getAllLands = async (req, res) => {
  try {
    const lands = await Land.find();
    res.json(lands);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createLand = async (req, res) => {
  const { title, location, area, description, contact } = req.body;
  try {
    const newLand = new Land({ title, location, area, description, contact });
    await newLand.save();
    res.status(201).json(newLand);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
