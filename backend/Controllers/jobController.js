const Job = require("../models/Job");

// GET /api/jobs
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (err) {
    console.error("Error fetching jobs:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// POST /api/jobs
exports.createJob = async (req, res) => {
  const { title, location, duration, pay, description, contact } = req.body;
  try {
    const newJob = new Job({ title, location, duration, pay, description, contact });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    console.error("Error creating job:", err);
    res.status(500).json({ message: "Server error" });
  }
};
