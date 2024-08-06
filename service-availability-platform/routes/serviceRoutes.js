const express = require('express');
const { createService, getServices } = require('../controllers/serviceController');
const { protect } = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').post(protect, createService).get(getServices);

module.exports = router;
