import Home from "./Home";
import Trainsection from "./Trainsection";



import {
  Routes , Route
} from "react-router-dom";

function App() {

  return (
    <>
   
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/trains" element={<Trainsection />} />
    </Routes>
     
     
    </>
  )
}

export default App
