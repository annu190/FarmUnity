const express = require("express");
const router = express.Router();
const jobController = require("../Controllers/jobController");

// Get all jobs
router.get("/", jobController.getAllJobs);

// Create a job
router.post("/", jobController.createJob);

module.exports = router;
