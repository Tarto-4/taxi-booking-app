import React from 'react';

const Home = () => (
  <div className="container">
    <h1>Welcome to Teksy Taxi Booking</h1>
    <nav>
      <a href="/login">Login</a>
      <a href="/register">Register</a>
      <a href="/dashboard">Dashboard</a>
    </nav>
    <main>
      <p>Your one-stop solution for seamless taxi bookings. Login or register to get started!</p>
    </main>
  </div>
);

export default Home;
