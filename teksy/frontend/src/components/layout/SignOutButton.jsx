import React from 'react';

const SignOutButton = () => {
    const handleSignOut = () => {
        localStorage.removeItem('authToken');
        window.location.href = '/login';
    };

    return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOutButton;
