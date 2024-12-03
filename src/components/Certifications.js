import React from "react";
import "./Certifications.css";

const Certifications = () => {
  return (
    <section id="certifications" className="certifications-section">
      <h2 className="certifications-heading">Certifications</h2>
      <div className="certifications-container">
        <div className="certification-item">
          <h3>GENERATIVE AI</h3>
          <a href="/certificates/certificate1.pdf" download>
            <button className="download-btn">Download</button>
          </a>
        </div>
        <div className="certification-item">
          <h3>ADVANCE JAVA PROGRAMMING</h3>
          <a href="/certificates/certificate2.pdf" download>
            <button className="download-btn">Download</button>
          </a>
        </div>
        <div className="certification-item">
          <h3>OBJECT ORIENTED PROGRAMMING</h3>
          <a href="/certificates/certificate3.pdf" download>
            <button className="download-btn">Download</button>
          </a>               
        </div>
        <div className="certification-item">
          <h3>INTRODUCTION TO DEVEOPS</h3>
          <a href="/certificates/DEVOPS.pdf" download>
            <button className="download-btn">Download</button>
          </a>               
        </div>
        <div className="certification-item">
          <h3>USER INTERFACE AND USER EXPERIENCE</h3>
          <a href="/certificates/UIUX.pdf" download>
            <button className="download-btn">Download</button>
          </a>               
        </div>
      </div>
    </section>
  );
};

export default Certifications;
