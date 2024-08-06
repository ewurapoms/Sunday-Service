const twilio = require('twilio');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

exports.sendSMS = async (to, body) => {
    try {
        await client.messages.create({ body, from: '+1234567890', to });
    } catch (err) {
        throw new Error(err.message);
    }
};

exports.sendEmail = async (to, subject, html) => {
    try {
        const msg = {
            to,
            from: 'your-email@example.com',
            subject,
            html,
        };
        await sgMail.send(msg);
    } catch (err) {
        throw new Error(err.message);
    }
};
