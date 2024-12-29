import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./index.css"; // Include Tailwind or custom CSS
import "../tailwind.config.js";
import "../vite.config.js";
import "../index.html";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
