const Service = require('../models/Service');

exports.createService = async (req, res) => {
    const { name, description, availableSlots } = req.body;
    try {
        const service = await Service.create({
            name,
            description,
            provider: req.user._id,
            availableSlots,
        });
        res.status(201).json(service);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getServices = async (req, res) => {
    try {
        const services = await Service.find().populate('provider', 'name email');
        res.status(200).json(services);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
