import React from 'react';

const Dashboard = () => {
  return (
    <div className="container">
      <h1>Welcome to Your Dashboard</h1>
      <p>Here you can manage your bookings and view updates.</p>
      <div className="dashboard">
        <div className="dashboard-card">
          <h3>Your Bookings</h3>
          <p>Manage your upcoming and past bookings.</p>
        </div>
        <div className="dashboard-card">
          <h3>Profile Settings</h3>
          <p>Update your personal and contact information.</p>
        </div>
        <div className="dashboard-card">
          <h3>Support</h3>
          <p>Need help? Contact our support team.</p>
        </div>
        <button onClick={handleSignOut} className="btn">
        Sign Out
      </button>
      </div>
    </div>
  );
};

export default Dashboard;
