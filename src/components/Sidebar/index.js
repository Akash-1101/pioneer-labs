import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="header">
        <h2>Carbon cell</h2>
      </div>
      <ul className="nav">
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
      </ul>
    </div>
  );
}

export default Sidebar;