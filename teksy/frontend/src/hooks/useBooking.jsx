// src/hooks/useBooking.jsx
import { useState } from "react";

export const useBooking = () => {
  const [bookingData, setBookingData] = useState(null);

  const bookSeat = (data) => {
    // Logic to handle seat booking (e.g., API call, form submission)
    setBookingData(data);
  };

  return {
    bookingData,
    bookSeat,
  };
};
