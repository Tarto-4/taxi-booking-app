import axios from 'axios';
import { BASE_URL } from './config';

export const getBookings = async (token) => {
	return axios.get(`${BASE_URL}/bookings`, {
		headers: { Authorization: `Bearer ${token}` },
	});
};

export const createBooking = async (bookingData, token) => {
	return axios.post(`${BASE_URL}/bookings`, bookingData, {
		headers: { Authorization: `Bearer ${token}` },
	});
};

export const createBooking = async (bookingData, token) => {
	return axios.post(`${BASE_URL}/bookings`, bookingData, {
		headers: { Authorization: `Bearer ${token}` },
	});
};

