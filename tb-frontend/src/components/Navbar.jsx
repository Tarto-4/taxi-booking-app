import React from 'react';

const Navbar = () => (
	<nav className="bg-gray-800 p-4 text-white">
	<div clssName="container mx-auto flex justify-between">
	<a href="/" className="text-xl font-bold">Taxi Booking App</a>
	<div>
	<a href="/login" className="mr-4">Login</a>
	<a href="/dashboard">Dashboard</a>
	</div>
	</div>
	</nav>
);

export default Navbar;
