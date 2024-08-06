const express = require('express');
const { notifyUser } = require('../controllers/notificationController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/notify', protect, notifyUser);

module.exports = router;
