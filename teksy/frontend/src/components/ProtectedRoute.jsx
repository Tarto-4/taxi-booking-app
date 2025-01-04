import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Access authenticated user
  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
