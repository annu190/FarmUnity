import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-container" id="about">
      <h1 className="about-title">
        About <span className="green-text">Us</span>
      </h1>

      <h2 className="mission-heading">Our Mission?</h2>

      <p className="about-mission">
        Transforming agriculture by addressing{" "}
        <span className="green-text">
          labour shortages, land leasing, and post-harvest management.
        </span>{" "}
        Empowering farmers with innovative solutions that enhance productivity,
        optimize land use, and reduce post-harvest losses, fostering a
        sustainable future for the industry.
      </p>

      <div className="about-features">
        <div className="feature-box">
          <img src={`${process.env.PUBLIC_URL}/images/icon1.png`} alt="Feature 1" />
          <p className="feature-text">
            <span className="arrow-icon">➜</span> Bridging the gap between
            farmers and skilled labor through a seamless platform.
          </p>
        </div>

        <div className="feature-box">
          <img src={`${process.env.PUBLIC_URL}/images/icon3.png`} alt="Feature 2" />
          <p className="feature-text">
            <span className="arrow-icon">➜</span> Offering smart post-harvest
            storage solutions to minimize wastage and ensure food security.
          </p>
        </div>

        <div className="feature-box">
          <img src={`${process.env.PUBLIC_URL}/images/icon2.png`} alt="Feature 3" />
          <p className="feature-text">
            <span className="arrow-icon">➜</span> Enabling landowners to
            register and lease fields temporarily for productive use.
          </p>
        </div>
      </div>

      <a href="#learn-more" className="learn-more-btn">
        Learn More
      </a>

      <div className="background-container">
        <img
          src={`${process.env.PUBLIC_URL}/images/bg.jpeg`}
          alt="Background"
          className="background-image"
        />
      </div>
    </div>
  );
}

export default AboutUs;
