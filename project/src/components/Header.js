import React from 'react';
import { Link } from 'react-router-dom';
import './styles/styles.css';

function Header() {
  return (
    <nav className="header">
      <h1>My Portfolio</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
