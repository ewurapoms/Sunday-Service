const Booking = require('../models/Booking');
const Service = require('../models/Service');


exports.createBooking = async (req, res) => {
    const { serviceId, date } = req.body;
    try {
        const service = await Service.findById(serviceId);
        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }

        const booking = await Booking.create({
            service: serviceId,
            user: req.user._id,
            date,
        });

        res.status(201).json(booking);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user._id }).populate('service');
        res.status(200).json(bookings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
