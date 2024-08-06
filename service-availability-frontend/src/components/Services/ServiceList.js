import { useEffect, useState } from 'react';
import api from '../../utils/api';

const ServiceList = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            const response = await api.get('/services');
            setServices(response.data);
        };
        fetchServices();
    }, []);

    return (
        <div>
            {services.map((service) => (
                <div key={service._id}>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ServiceList;
