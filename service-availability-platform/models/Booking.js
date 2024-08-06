const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    status: { type: String, default: 'Booked' },
});

module.exports = mongoose.model('Booking', BookingSchema);
