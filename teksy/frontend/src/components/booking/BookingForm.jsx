import React, { useState } from 'react';

const BookingForm = () => {
    const [pickUp, setPickUp] = useState('');
    const [destination, setDestination] = useState('');
    const [time, setTime] = useState('');

    const handleBooking = async () => {
        const token = localStorage.getItem('authToken');
        const response = await fetch('http://localhost:5000/api/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ pickUp, destination, time }),
        });

        if (response.ok) {
            alert('Booking successful!');
            window.location.reload();
        } else {
            alert('Booking failed');
        }
    };

    return (
        <div>
            <h3>Create a Booking</h3>
            <input placeholder="Pick Up" value={pickUp} onChange={e => setPickUp(e.target.value)} />
            <input placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} />
            <input type="time" value={time} onChange={e => setTime(e.target.value)} />
            <button onClick={handleBooking}>Book</button>
        </div>
    );
};

export default BookingForm;
