import { useState } from 'react';
import api from '../../utils/api';
import { useParams } from 'react-router-dom';

const PaymentForm = () => {
    const { id } = useParams();
    const [amount, setAmount] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await api.post('/payments/create-payment-intent', { amount });
        const { clientSecret } = response.data;

        // Here you would integrate with Stripe.js or Stripe Elements to handle payment
        // ...
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount" />
            <button type="submit">Pay</button>
        </form>
    );
};

export default PaymentForm;
