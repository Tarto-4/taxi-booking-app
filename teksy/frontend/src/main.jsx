import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from React DOM
import App from './App';
import { AuthProvider } from './hooks/useAuth';
import './styles/styles.css';

// Get the root element from the HTML
const rootElement = document.getElementById('root');

// Create a React root
const root = createRoot(rootElement);

// Render the application
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
