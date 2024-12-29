import React from 'react';

const Navbar = () => {
  return (
    <nav className="p-4 bg-blue-500 text-white">
      <div>
        <a href="/login" className="mr-4">Login</a>
        <a href="/dashboard">Dashboard</a>
      </div>
    </nav>
  );
};

export default Navbar;
