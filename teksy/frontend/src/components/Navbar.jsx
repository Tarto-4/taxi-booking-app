import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
    <div className="flex items-center">
      <img src="/logo.png" alt="App Logo" className="h-12 w-auto mr-4" />
      <h1 className="text-2xl font-bold">TaxiGo</h1>
    </div>
    <div>
      <Link to="/" className="mx-4 hover:underline">Home</Link>
      <Link to="/dashboard" className="mx-4 hover:underline">Dashboard</Link>
      <Link to="/register" className="mx-4 bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-500">
        Register
      </Link>
    </div>
  </nav>
);

export default Navbar;
