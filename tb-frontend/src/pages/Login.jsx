import React, { useState } from 'react';
import { login } from '../api/auth';

const Login = () => {
	const [credentials, setCredentials] = useState({ username: '', password: '' });
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await login(credentials);
			localStorage.setItem('token', response.data.token);
			alert('Login successful');
			window.location.href = '/dashboard';
		} catch (error) {
			console.error('Login failed, try again', error);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="container mx-auto p-4">
		<h2 className="text-xl font-bold">Login</h2>
		<input
		type="texy"
		placeholder="Username"
		value={credentials.username}
		onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
		className="block p-2 border mt-2"
		/>
		<input
		type="password"
		placeholder="password"
		value={credentials.password}
		onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
		className="block p-2 border mt-2"
		/>
		<button type="submit" className="mt-4 p-2 bg-blue-500 text-white">Login</button>
		</form>
	);
};

export default Login;

