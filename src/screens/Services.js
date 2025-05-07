import React from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Labor Portal",
    description:
      "Connect with skilled agricultural workers to fill labor gaps, increase efficiency, and ensure timely operations on the field.",
    icon: "/images/icon1.png",
    route: "/LaborPortal",
  },
  {
    title: "Land Leasing",
    description:
      "Allow landowners to lease their unused land to farmers securely and transparently, promoting better land utilization.",
    icon: "/images/icon2.png",
    route: "/land-options", // Updated route for Land Leasing
  },
  {
    title: "Post-Harvest Management",
    description:
      "Smart storage and logistics solutions to reduce post-harvest losses and improve profitability across the supply chain.",
    icon: "/images/icon3.png",
    route: "/post-harvest-options", // New route for Post-Harvest Management
  },
];

function Services() {
  const navigate = useNavigate();

  return (
    <div
      className="services-container"
      style={{
        backgroundImage: `url("/images/download.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img
              src={service.icon}
              alt={service.title}
              className="service-icon"
            />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            {service.route ? (
              <button
                className="get-started-btn"
                onClick={() => navigate(service.route)}
              >
                Get Started →
              </button>
            ) : (
              <button className="get-started-btn" disabled>
                Get Started →
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
