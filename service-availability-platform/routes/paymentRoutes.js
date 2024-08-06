const express = require('express');
const { handlePayment } = require('../controllers/paymentController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/create-payment-intent', protect, handlePayment);

module.exports = router;
