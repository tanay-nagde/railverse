import React from 'react'
import Navbar from "./Navbar"
import Searchingsection from "./Searchingsection"
function Home() {
  return (
  <>
    <div className="  h-screen w-screen grid grid-cols-1 gap-28  bg-cover bg-[url('./assets/images/pexels-jakub-pabis-15969781.jpg')] ">
        <Navbar />
           <div className=" mx-10 text-white justify-self-center ">
               <span className="  px-2 py-1    font-black font-mono text-6xl z-10 bg-cyan-950/90 shadow-sm "> where do you want to travel</span><br />
               <span className="  px-2 py-1    font-black font-mono text-6xl z-10 shadow-xl  bg-cyan-950/95">this season </span>
           </div>
            <Searchingsection />
          

     </div>
  </>
  )
}

export default Home