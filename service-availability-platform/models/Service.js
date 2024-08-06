const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    availableSlots: [{ type: Date, required: true }],
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
});

module.exports = mongoose.model('Service', ServiceSchema);
