const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.success) {
        localStorage.setItem('token', data.token); // Save user token
        alert('Login successful!');
        navigate('/dashboard'); // Redirect to the dashboard
    } else {
        alert(data.message);
    }
};
