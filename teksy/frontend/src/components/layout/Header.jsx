import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from './SignOutButton';
import logo from '../public/logo.png'; // Assuming logo is stored in public/logo.png

const Header = () => (
    <header className="header">
        <img src={logo} alt="Taxi Booking Logo" className="logo" />
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
