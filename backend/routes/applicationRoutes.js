const express = require("express");
const router = express.Router();
const ctrl = require("../Controllers/applicationController");  // ✅ Corrected path

// Submit an application
router.post("/", ctrl.createApplication);

// List all applications
router.get("/", ctrl.getAllApplications);

module.exports = router;
