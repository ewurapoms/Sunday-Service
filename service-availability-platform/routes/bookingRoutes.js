const express = require('express');
const { createBooking, getBookings } = require('../controllers/bookingController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').post(protect, createBooking).get(protect, getBookings);

module.exports = router;
