import { useState, createContext, useContext } from 'react';

// Create an AuthContext to share authentication state across components
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

// AuthProvider component to wrap your application
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // State to hold authenticated user info
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State for auth status

  // Mock login function
  const login = (email, password) => {
    // In a real-world app, replace this with an API call to authenticate
    if (email === 'test@example.com' && password === 'password123') {
      const userData = { id: 1, name: 'John Doe', email };
      setUser(userData);
      setIsAuthenticated(true);
      return true; // Login success
    } else {
      return false; // Login failed
    }
  };

  // Mock logout function
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  // AuthContext value
  const value = {
    user,
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
