import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/logo.png'; // Public folder reference

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <h1 className="title">Taxi Booking App</h1>
    <nav>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/dashboard">Dashboard</Link>
    </nav>
  </header>
);

export default Header;
