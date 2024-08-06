import { useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../utils/api';

const BookingForm = () => {
    const { id } = useParams();
    const [date, setDate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.post('/bookings', { serviceId: id, date });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="datetime-local" value={date} onChange={(e) => setDate(e.target.value)} />
            <button type="submit">Book Service</button>
        </form>
    );
};

export default BookingForm;
