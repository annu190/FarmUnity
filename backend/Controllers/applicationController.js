// Controller/applicationController.js
const Application = require("../models/application");  // <-- fixed path

// POST /api/applications
exports.createApplication = async (req, res) => {
  try {
    const app = new Application(req.body);
    await app.save();
    res.status(201).json(app);
  } catch (err) {
    console.error("Error creating application:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// (Optional) GET /api/applications
exports.getAllApplications = async (req, res) => {
  try {
    const apps = await Application.find().sort({ createdAt: -1 });
    res.json(apps);
  } catch (err) {
    console.error("Error fetching applications:", err);
    res.status(500).json({ message: "Server error" });
  }
};
