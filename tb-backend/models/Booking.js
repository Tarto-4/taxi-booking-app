import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	taxiId: { type: String, required: true },
	date: { type: Date, required: true },
	seats: { type: Number, required: true },
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;
