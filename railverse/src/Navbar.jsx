import React from 'react'
import logo from './assets/images/logo.png'
import { Button } from 'antd'
import { useAuth0 } from "@auth0/auth0-react"; 

function Navbar() {
  const { loginWithRedirect , user , isAuthenticated , isLoading , logout} = useAuth0();
  if(isAuthenticated){console.log(user);}
  return (
    <div className=' z-10 bg-white/5  flex justify-between text-black  px-3 items-center h-14'>
        
        <div className='flex justify-evenly items-center gap-3'>
            <img src={logo} alt="logo" className=' h-16 w-16' />
            <h3> railverse </h3>
        </div>

            <ul className='flex justify-evenly items-center gap-3'>
                <li> Home </li>
                <li> About </li>
                <li> Services </li>
                <li> Contact </li>
            </ul>

               <Button type="primary" onClick={() => loginWithRedirect()}> login / sign up</Button>
              
        

    </div>
  )
}

export default Navbar