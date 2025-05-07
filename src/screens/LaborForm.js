import { useState } from "react";

const LaborForm = () => {
  const [role, setRole] = useState("worker");
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    location: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === "farmer") {
      const existing = JSON.parse(localStorage.getItem("vacancies")) || [];
      existing.push(formData);
      localStorage.setItem("vacancies", JSON.stringify(existing));
      alert("✅ Vacancy Posted Successfully!");
    } else {
      const workers = JSON.parse(localStorage.getItem("workerApplications")) || [];
      workers.push(formData);
      localStorage.setItem("workerApplications", JSON.stringify(workers));
      alert("✅ Application Submitted!");
    }

    // Reset form
    setFormData({
      name: "",
      contact: "",
      location: "",
      details: "",
    });
  };

  return (
    <div className="form-container" style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        {role === "farmer" ? "Post a Job Vacancy" : "Apply for Labor Work"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="role-selection" style={{ marginBottom: "15px" }}>
          <label>
            <input
              type="radio"
              name="role"
              value="worker"
              checked={role === "worker"}
              onChange={(e) => setRole(e.target.value)}
            />{" "}
            Worker
          </label>{" "}
          &nbsp;&nbsp;
          <label>
            <input
              type="radio"
              name="role"
              value="farmer"
              checked={role === "farmer"}
              onChange={(e) => setRole(e.target.value)}
            />{" "}
            Farmer
          </label>
        </div>

        <div>
          <label>Name:</label>
          <input
            className="input-field"
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter your name"
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
        </div>

        <div>
          <label>Contact:</label>
          <input
            className="input-field"
            type="text"
            name="contact"
            value={formData.contact}
            placeholder="Email or phone"
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
        </div>

        <div>
          <label>Location:</label>
          <input
            className="input-field"
            type="text"
            name="location"
            value={formData.location}
            placeholder="Your village or district"
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
        </div>

        <div>
          <label>{role === "farmer" ? "Work Description:" : "Your Skills / Experience:"}</label>
          <textarea
            className="textarea-field"
            name="details"
            value={formData.details}
            placeholder="Write here..."
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "10px", height: "100px", marginBottom: "15px" }}
          />
        </div>

        <button
          type="submit"
          className="submit-btn"
          style={{
            padding: "12px 24px",
            backgroundColor: "#3d5a2a",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LaborForm;
