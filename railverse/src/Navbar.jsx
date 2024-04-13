import React from 'react'
import logo from './assets/images/logo.png'
import { Button } from 'antd'

function Navbar() {
  return (
    <div className=' z-10 bg-white/10  flex justify-between text-black  px-10 items-center h-14'>
        
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
            <Button type="primary"> login / sign up</Button>
        

    </div>
  )
}

export default Navbar