import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from './SignOutButton';

const Header = () => (
    <header>
        <h1 className="title" style={{ fontFamily: 'cursive' }}>Taxi Booking App</h1>
        <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/dashboard">Dashboard</Link>
            <SignOutButton />
        </nav>
    </header>
);

export default Header;
