// backend/tests/booking.test.js
const request = require('supertest');
const app = require('../app');

describe('Booking API', () => {
  it('should create a booking', async () => {
    const res = await request(app).post('/api/bookings').send({
      userId: 'user123',
      taxiId: 'taxi123',
      seatNumber: 1
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('status', 'booked');
  });
});
