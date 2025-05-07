import React from "react";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <div className="contact-wrapper">
      <div className="section-title">
        <h1 className="main-heading">Contact Us</h1>
      </div>

      <div className="contact-container">
        <div className="contact-left">
          <h2>Connect With Us!</h2>
          <p>Have any questions? Feel free to reach out.</p>
          <form className="contact-form">
            <div className="input-row">
              <input type="text" placeholder="First name" className="input-field" />
              <input type="text" placeholder="Last name" className="input-field" />
            </div>
            <input type="email" placeholder="you@company.com" className="input-field" />
            <input type="tel" placeholder="US +1 (555) 000-0000" className="input-field" />
            <textarea placeholder="Message" className="textarea-field" />
            <button type="submit" className="submit-btn">Send message</button>
          </form>
        </div>

        <div className="contact-right">
          {/* You can style the background image using CSS only */}
        </div>
      </div>
    </div>
  );
}
