import React from "react";
import "./About.css"; // Import the CSS file for styling
import myImage from "../images/myImage.jpg"; // Import your image (make sure the path is correct)

const About = () => {
  return (
    <div className="about">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
        Hello there! I’m Shalini, a Computer Science Engineering student with a passion for 
        technology and problem-solving. Currently honing my skills in languages like C++, C, Java,
        Python, React.js, HTML, and CSS, I’m always on the lookout for new challenges to conquer. 
        My journey involves not just coding but building creative and efficient solutions, whether it’s 
        through dynamic web apps or tackling complex algorithms.

         Beyond coding, I enjoy working on projects that combine both form and function,
         where I can create seamless user experiences. I’m also driven by collaboration 
         and networking, believing that great ideas come from the power of collective knowledge. 
         With a passion for continuous learning and innovation, I’m always eager to contribute to projects
        that make a real impact. Let’s connect and explore the endless possibilities together!

        </p>
      </div>
      <div className="about-image">
        <img src={myImage} alt="Shalini" />
      </div>
    </div>
  );
};

export default About;
