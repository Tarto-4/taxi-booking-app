import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useToast } from '@/components/ui/use-toast';

const Login = () => {
  const { login } = useAuth();
  const { showToast } = useToast();

  const handleLogin = () => {
    login();
    showToast('Logged in successfully!');
  };

  return (
    <div>
      <h1>Login</h1>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button onClick={handleLogin}>Login</Button>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
