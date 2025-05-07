const Storage = require("../models/Storage");

exports.getAllStorage = async (req, res) => {
  try {
    const storage = await Storage.find();
    res.json(storage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createStorage = async (req, res) => {
  const { title, location, capacity, description, contact } = req.body;
  try {
    const newStorage = new Storage({ title, location, capacity, description, contact });
    await newStorage.save();
    res.status(201).json(newStorage);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
