import Home from "./Home";
import Traincard from "./Traincard";
import Trainsection from "./Trainsection";
import Ticket from "./Ticket";
import TicketInfoPage from './TicketInfoPage';
import PaymentWindow from './PaymentWindow';
import PassengerDetails from './PassengerDetails';


import {
  Routes , Route
} from "react-router-dom";

function App() {

  return (
    <>
   
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/trains" element={<Trainsection />} />
      <Route path="/Trainscard" element={<Traincard />} />
      <Route path="/ticket" element={<Ticket/>} />
      <Route path="/ticket-info" element={<TicketInfoPage/>} />
      <Route path="/payment-window" element={<PaymentWindow/>} />
      <Route path="/add-passenger" element={<PassengerDetails/>} />
      

    </Routes>
     
     
    </>
  )
}

export default App
