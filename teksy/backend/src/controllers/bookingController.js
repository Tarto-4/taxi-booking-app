let bookings = require('../data/bookings.json');

exports.createBooking = (req, res) => {
    const { pickUp, destination, time } = req.body;
    const userId = req.user.id;

    const newBooking = {
        id: bookings.length + 1,
        userId,
        pickUp,
        destination,
        time,
    };
    bookings.push(newBooking);
    res.status(201).json(newBooking);
};

exports.getBookings = (req, res) => {
    const userId = req.user.id;
    const userBookings = bookings.filter(booking => booking.userId === userId);
    res.json(userBookings);
};
