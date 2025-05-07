const express = require("express");
const router = express.Router();
const storageController = require("../Controllers/storageController");

router.get("/storage", storageController.getAllStorage);
router.post("/storage", storageController.createStorage);

module.exports = router;
