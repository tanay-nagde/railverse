import Home from "./Home";
import Traincard from "./Traincard";
import Trainsection from "./Trainsection";
import Ticket from "./Ticket";



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

    </Routes>
     
     
    </>
  )
}

export default App
