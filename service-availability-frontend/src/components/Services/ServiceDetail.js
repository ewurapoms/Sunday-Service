import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../utils/api';

const ServiceDetail = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);

    useEffect(() => {
        const fetchService = async () => {
            const response = await api.get(`/services/${id}`);
            setService(response.data);
        };
        fetchService();
    }, [id]);

    if (!service) return <div>Loading...</div>;

    return (
        <div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            {/* Add booking form or button here */}
        </div>
    );
};

export default ServiceDetail;
