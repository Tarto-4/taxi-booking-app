import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/login';
    } else {
      // Mock fetch user data
      const fetchUser = async () => {
        setUser({ name: 'Jane Doe' }); // Replace with actual API call if needed
      };
      fetchUser();
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {user ? (
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome, {user.name}!</h1>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
