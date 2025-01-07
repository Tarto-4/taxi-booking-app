import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from './SignOutButton';
import logo from './logo.png.webp'; // Assuming logo is stored in public/logo.png

const Header = () => (
    <header className="header">
        <div class="logo-container">
    <img src="path/to/logo.png" alt="Logo" class="logo">
</div>
        <h1 className="title">Taxi Booking App</h1>
        <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/dashboard">Dashboard</Link>
            <SignOutButton />
        </nav>
    </header>
);

export default Header;
