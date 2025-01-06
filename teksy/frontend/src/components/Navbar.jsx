import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
    <div className="flex items-center">
      <img src="/logo.png" alt="App Logo" className="h-10 mr-4" />
      <h1 className="text-2xl font-bold">Taxi Booking App</h1>
    </div>
    <div>
      <Link to="/" className="mx-2">Home</Link>
      <Link to="/dashboard" className="mx-2">Dashboard</Link>
    </div>
  </nav>
);

export default Navbar;
