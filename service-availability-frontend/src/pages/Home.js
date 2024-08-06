import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Welcome to Service Availability Platform</h1>
            <Link to="/services">View Services</Link>
            <Link to="/create-service">Create Service</Link>
            <Link to="/bookings">My Bookings</Link>
        </div>
    );
};

export default Home;
