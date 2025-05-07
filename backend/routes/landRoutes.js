const express = require("express");
const router = express.Router();
const landController = require("../Controllers/landController");

router.get("/lands", landController.getAllLands);
router.post("/lands", landController.createLand);

module.exports = router;
