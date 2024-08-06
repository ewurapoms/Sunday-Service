const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.createPaymentIntent = async (amount) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
        });
        return paymentIntent;
    } catch (err) {
        throw new Error(err.message);
    }
};