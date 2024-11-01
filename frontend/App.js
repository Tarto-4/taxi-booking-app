// frontend/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './screens/MainNavigator';
import { BookingProvider } from './context/BookingContext';

export default function App() {
  return (
    <BookingProvider>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </BookingProvider>
  );
}
