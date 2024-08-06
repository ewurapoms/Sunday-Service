const { createPaymentIntent } = require('../utils/payment');

exports.handlePayment = async (req, res) => {
    const { amount } = req.body;
    try {
        const paymentIntent = await createPaymentIntent(amount);
        res.status(200).json({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
