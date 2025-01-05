import React, { useState, useEffect } from 'react';
import BookingForm from './BookingForm';

const Dashboard = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const token = localStorage.getItem('authToken');
            const response = await fetch('http://localhost:5000/api/bookings', {
                headers: { Authorization: `Bearer ${token}` },
            });
            const data = await response.json();
            setBookings(data);
        };

        fetchBookings();
    }, []);

    return (
        <div>
            <h2>Dashboard</h2>
            <BookingForm />
            <h3>Your Bookings:</h3>
            <ul>
                {bookings.map(booking => (
                    <li key={booking.id}>
                        From {booking.pickUp} to {booking.destination} at {booking.time}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;
