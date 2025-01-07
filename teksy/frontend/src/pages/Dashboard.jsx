import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

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
      </div>
      <button onClick={handleSignOut} className="btn">
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
