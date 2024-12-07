import './App.css';
import BookingDetails from './Components/BookingDetails/BookingDetails';
import DummyTickets from './Components/Dummy-Tickets/DummyTickets';
import Footer from './Components/Footer/Footer';
import Main from './Components/Main/Main';
import { Routes, Route } from 'react-router-dom';
import PaymentComponent from './Components/Payment/PaymentComponent';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';
import 'react-toastify/dist/ReactToastify.css';
import DownloadTicketPage from './Components/Payment/DownloadTicketPage';
import AdminMain from './Components/Admin/AdminMain';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/dummy-tickets" element={<DummyTickets />} />
        <Route path='/booking-details' element={<BookingDetails />} />
        <Route path='/payment-page' element={<PaymentComponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/downloadTicket" element={<DownloadTicketPage />} />
        <Route path="/admin" element={<AdminMain />} />
      </Routes>

    </div>
  );
}

export default App;
