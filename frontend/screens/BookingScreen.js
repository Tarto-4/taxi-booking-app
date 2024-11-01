// frontend/screens/BookingScreen.js
import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';
import { BookingContext } from '../context/BookingContext';

const BookingScreen = () => {
  const { bookSeat } = useContext(BookingContext);

  return (
    <View>
      <Text>Select your destination and book a seat</Text>
      <Button title="Book Seat" onPress={() => bookSeat('taxi123', 1)} />
    </View>
  );
};

export default BookingScreen;
