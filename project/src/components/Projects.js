import React from "react";
import "./Projects.css"; // Make sure you style the boxes with CSS

const Project = () => {
  return (
    <section className="projects">
     <h1>My Projects</h1>
      <div className="project-boxes">
        {/* Book My Stay Project */}
        <div className="project-box">
          <h2>Book My Stay</h2>
          <p>A hotel booking platform built with React.js, allowing users to search and book rooms.</p>
          <button className="view-btn">View Project</button>
        </div>

        {/* Stopwatch with Redux Project */}
        <div className="project-box">
          <h2>Stopwatch with Redux</h2>
          <p>A stopwatch app using Redux for state management, displaying timer functionality.</p>
          <button className="view-btn">View Project</button>
        </div>

        {/* E-commerce Project */}
        <div className="project-box">
          <h2>E-commerce</h2>
          <p>An e-commerce store built with React.js, featuring product browsing and purchase functionality.</p>
          <button className="view-btn">View Project</button>
        </div>

        <div className="project-box">
          <h2>Interactive Online Yoga Academy</h2>
          <p>Yoga Academy designed to provide users with live yoga sessions, personalized fitness plans, and video tutorials. </p>
          <button className="view-btn">View Project</button>
        </div>

      </div>
    </section>
  );
};

export default Project;
