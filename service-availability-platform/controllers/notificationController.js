const { sendSMS, sendEmail } = require('../utils/notifications');

exports.notifyUser = async (req, res) => {
    const { type, to, subject, message } = req.body;
    try {
        if (type === 'sms') {
            await sendSMS(to, message);
        } else if (type === 'email') {
            await sendEmail(to, subject, message);
        } else {
            return res.status(400).json({ message: 'Invalid notification type' });
        }
        res.status(200).json({ message: 'Notification sent' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
