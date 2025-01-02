import React, { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button'
import { MapContainer } from '@/components/map/MapContainer';


const Dashboard = () => {
  const { user } = useAuth();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch some data here
  }, []);

  return (
    <div>
      <h1>Welcome, {user.name}</h1>
      <MapContainer />
      <Card title="Your Data">
        {data.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </Card>
    </div>
  );
};

export default Dashboard;
