import { useEffect, useState, useContext } from 'react';
import api from '../../utils/api';
import AuthContext from '../../context/AuthContext';

const BookingList = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const fetchBookings = async () => {
            const response = await api.get('/bookings');
            setBookings(response.data);
        };
        fetchBookings();
    }, []);

    if (!user) return <div>You must be logged in to see your bookings</div>;

    return (
        <div>
            {bookings.map((booking) => (
                <div key={booking._id}>
                    <h3>{booking.service.name}</h3>
                    <p>{new Date(booking.date).toLocaleString()}</p>
                </div>
            ))}
        </div>
    );
};

export default BookingList;
