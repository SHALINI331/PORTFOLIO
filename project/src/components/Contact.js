import React from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Get in Touch</h2>
      <div className="contact-flow">
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <p>9159136592</p>
        </div>
        <div className="line"></div>
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href="shalinikannan134@gmail.com">shalinikannan134@gmail.com</a>
          
        </div>
        <div className="line"></div>
        <div className="contact-item">
          <FaLinkedin className="contact-icon" />
          <a href="https://www.linkedin.com/in/shalini-k-458751299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            LinkedIn Profile
          </a>
        </div>
        <div className="line"></div>
        <div className="contact-item">
          <FaInstagram className="contact-icon" />
          <a href="https://www.instagram.com/shalini__kannan6/profilecard/?igsh=aTl1eWswazE0MDNo" target="_blank" rel="noopener noreferrer">
            Instagram Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
