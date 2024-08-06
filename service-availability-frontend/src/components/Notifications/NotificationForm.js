import { useState } from 'react';
import api from '../../utils/api';

const NotificationForm = () => {
    const [type, setType] = useState('email');
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.post('/notifications/notify', { type, to, subject, message });
    };

    return (
        <form onSubmit={handleSubmit}>
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="email">Email</option>
                <option value="sms">SMS</option>
            </select>
            <input type="text" value={to} onChange={(e) => setTo(e.target.value)} placeholder="Recipient" />
            {type === 'email' && <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Subject" />}
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" />
            <button type="submit">Send Notification</button>
        </form>
    );
};

export default NotificationForm;
