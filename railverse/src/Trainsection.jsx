import React from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './Navbar'
function Trainsection() {
const location = useLocation()
console.log(location.state);


  return (
    <div className=' h-screen w-screen bg-black'>Trainsection
    <Navbar/>
    
    </div>
  )
}

export default Trainsection