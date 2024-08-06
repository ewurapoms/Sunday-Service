import { useState, useContext } from 'react';
import api from '../../utils/api';
import AuthContext from '../../context/AuthContext';

const ServiceForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [availableSlots, setAvailableSlots] = useState('');
    const { user } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const slots = availableSlots.split(',').map(slot => new Date(slot));
        await api.post('/services', { name, description, availableSlots: slots });
    };

    if (!user || !user.isServiceProvider) return <div>You must be a service provider to create a service</div>;

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
            <input type="text" value={availableSlots} onChange={(e) => setAvailableSlots(e.target.value)} placeholder="Available Slots (comma separated)" />
            <button type="submit">Create Service</button>
        </form>
    );
};

export default ServiceForm;
