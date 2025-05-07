import React, { useState, useEffect } from "react";
import "./LaborPortal.css";

const LaborPortal = () => {
  const [view, setView] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);
  const [vacancies, setVacancies] = useState([]);

  // Fetch existing job vacancies
  useEffect(() => {
    fetch("http://localhost:5000/api/jobs")
      .then((res) => res.json())
      .then((data) => setVacancies(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  const goBackToServices = () => {
    window.location.href = "/services";
  };

  // Handle publishing a new job
  const handlePublishSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newJob = {
      title: form.role.value,
      location: form.location.value,
      duration: form.duration.value,
      pay: form.pay.value,
      description: form.description.value,
      contact: form.contact.value,
    };

    fetch("http://localhost:5000/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((job) => {
        setVacancies([job, ...vacancies]);
        setView("");
      })
      .catch((err) => console.error("Error publishing job:", err));
  };

  // Handle applying for a selected job
  const handleApplySubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const application = {
      jobId: selectedJob._id,
      name: form.name.value,
      contact: form.contact.value,
      location: form.location.value,
      details: form.details.value,
    };

    fetch("http://localhost:5000/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(application),
    })
      .then((res) => res.json())
      .then(() => {
        alert("✅ Application Submitted!");
        setView("");
        setSelectedJob(null);
      })
      .catch((err) => console.error("Error submitting application:", err));
  };

  return (
    <div className="labor-portal-wrapper">
      <div className="content-wrapper">
        <div className="form-section">
          <h1 className="main-heading">Labor Opportunities Portal</h1>

          {!view && (
            <>
              <div className="vacancy-list">
                {vacancies.map((job) => (
                  <div key={job._id} className="job-card">
                    <h3 className="job-title">{job.title}</h3>
                    <p>
                      <strong>Location:</strong> {job.location}
                    </p>
                    <p>
                      <strong>Duration:</strong> {job.duration}
                    </p>
                    <p>
                      <strong>Pay:</strong> {job.pay}
                    </p>
                    <button
                      className="apply-btn"
                      onClick={() => {
                        setSelectedJob(job);
                        setView("apply");
                      }}
                    >
                      Apply
                    </button>
                  </div>
                ))}
              </div>

              <div className="action-buttons">
                <button
                  onClick={() => setView("apply")}
                  className="action-btn"
                >
                  Apply for an Opportunity
                </button>
                <button
                  onClick={() => setView("publish")}
                  className="action-btn"
                >
                  Publish a Job
                </button>
              </div>

              <div className="action-buttons">
                <button
                  onClick={goBackToServices}
                  className="action-btn"
                >
                  ← Back to Services
                </button>
              </div>
            </>
          )}

          {view === "apply" && (
            <>
              <h2 className="sub-heading">Apply for a Job</h2>

              {selectedJob && (
                <div className="selected-job-info">
                  <p>
                    You're applying for: <strong>{selectedJob.title}</strong>
                  </p>
                  <p>
                    <strong>Location:</strong> {selectedJob.location}
                  </p>
                </div>
              )}

              <form
                className="labor-form"
                onSubmit={handleApplySubmit}
              >
                <label>
                  Name:
                  <input name="name" type="text" placeholder="Enter your name" required />
                </label>

                <label>
                  Contact:
                  <input name="contact" type="text" placeholder="Email or phone" required />
                </label>

                <label>
                  Location:
                  <input name="location" type="text" placeholder="Your village or district" required />
                </label>

                <label>
                  Your Skills / Experience:
                  <textarea name="details" placeholder="Write here..." required />
                </label>

                <button type="submit" className="submit-btn">
                  Submit
                </button>
              </form>

              <div className="action-buttons">
                <button
                  onClick={() => {
                    setView("");
                    setSelectedJob(null);
                  }}
                  className="action-btn"
                >
                  ← Back to Opportunities
                </button>
                <button
                  onClick={goBackToServices}
                  className="action-btn"
                >
                  ← Back to Services
                </button>
              </div>
            </>
          )}

          {view === "publish" && (
            <>
              <h2 className="sub-heading">Publish a Job Opportunity</h2>
              <form
                className="labor-form"
                onSubmit={handlePublishSubmit}
              >
                <label>
                  Role:
                  <input name="role" type="text" placeholder="Enter the role…" required />
                </label>

                <label>
                  Job Description & Requirements:
                  <textarea name="description" placeholder="Describe the job…" required />
                </label>

                <label>
                  Duration:
                  <input name="duration" type="text" placeholder="e.g., 2 weeks" required />
                </label>

                <label>
                  Expected Salary:
                  <input name="pay" type="text" placeholder="e.g., ₹5000/month" required />
                </label>

                <label>
                  Location:
                  <input name="location" type="text" placeholder="Village or District" required />
                </label>

                <label>
                  Contact:
                  <input name="contact" type="text" placeholder="Phone or email" required />
                </label>

                <button type="submit" className="submit-btn">
                  Publish Job
                </button>
              </form>

              <div className="action-buttons">
                <button
                  onClick={() => {
                    setView("");
                    setSelectedJob(null);
                  }}
                  className="action-btn"
                >
                  ← Back to Opportunities
                </button>
              </div>
            </>
          )}
        </div>

        <div className="image-container">
          <div className="right-image" />
        </div>
      </div>
    </div>
  );
};

export default LaborPortal;