import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './context/AuthContext';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ServiceList from './components/Services/ServiceList';
import ServiceDetail from './components/Services/ServiceDetail';
import ServiceForm from './components/Services/ServiceForm';
import BookingList from './components/Bookings/BookingList';
import BookingForm from './components/Bookings/BookingForm';
import PaymentForm from './components/Payments/PaymentForm';
import NotificationForm from './components/Notifications/NotificationForm';

const App = () => {
    const { user } = useContext(AuthContext);

    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/services" exact component={ServiceList} />
                <Route path="/services/:id" component={ServiceDetail} />
                <Route path="/bookings" component={BookingList} />
                <Route path="/book/:id" component={BookingForm} />
                <Route path="/pay/:id" component={PaymentForm} />
                <Route path="/notify" component={NotificationForm} />
                {user && user.isServiceProvider && <Route path="/create-service" component={ServiceForm} />}
            </Switch>
        </Router>
    );
};

export default App;
