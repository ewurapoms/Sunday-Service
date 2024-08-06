import { useState, useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isServiceProvider, setIsServiceProvider] = useState(false);
    const { register } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await register(name, email, password, isServiceProvider);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <label>
                Service Provider
                <input type="checkbox" checked={isServiceProvider} onChange={(e) => setIsServiceProvider(e.target.checked)} />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
