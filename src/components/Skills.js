import React from "react";
import './Skills.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faHtml5, 
    faCss3Alt, 
    faReact, 
    faPython, 
    faJava, 
    faJsSquare 
} from "@fortawesome/free-brands-svg-icons"; // FontAwesome icons

const Skills = () => {
    const skills = [
        { name: "HTML5", icon: faHtml5 },
        { name: "CSS3", icon: faCss3Alt },
        { name: "React.js", icon: faReact },
        { name: "Python", icon: faPython },
        { name: "Java", icon: faJava },
        { name: "JavaScript", icon: faJsSquare },
    ];

    return (
        <div className="skills-container">
            <h2 className="section-title">My Skills</h2>
            <div className="skills-row">
                {skills.map((skill, index) => (
                    <div className="skill-box" key={index}>
                        <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                        <span className="skill-name">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
