import React, { useContext } from 'react'
import Navbar, { userDetail } from './Navbar'



function ticket() {
  const user = useContext(userDetail)
console.log(user);
  return (
    <>
    <Navbar/>
    <div className=' h-screen w-screen bg-black flex flex-col justify-center items-center text-pink-600'>
    </div> 
    </>
  )
}

export default ticket