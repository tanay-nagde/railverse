import React, { createContext } from 'react'
import logo from './assets/images/logo.png'
import { Button } from 'antd'
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'; 

const userDetail = createContext();
function Navbar() {

  
  
  const { loginWithRedirect , user , isAuthenticated , isLoading , logout} = useAuth0();
  console.log(isAuthenticated);
  if(isAuthenticated){console.log(user);}
  return (
    <>
    <userDetail.Provider value = {{user,isAuthenticated}} >

    
    <div className=' z-10 bg-white/5  flex justify-between text-black  px-3 items-center h-14'>
        
        <div className='flex justify-evenly items-center gap-3'>
            <img src={logo} alt="logo" className=' h-16 w-16' />
            <h3> railverse </h3>
        </div>

            <ul className='flex justify-evenly items-center gap-3'>
                <li> Home </li>
                <li> About </li>
                <li> Services </li>
                <Link to="/ticket">ticket</Link>
            </ul>
 {
isAuthenticated ?
(  <Button type="primary" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Button> ) :
( <Button type="primary" onClick={() => loginWithRedirect()}> Login </Button>)

 }
               
              
        

    </div>
      </userDetail.Provider >

    </>
  )
}

export default Navbar

export {userDetail}