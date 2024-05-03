import React, { useState } from 'react';
import { Button, Form, Input, Radio } from 'antd';
import { useLocation } from 'react-router-dom';


const PassengerDetails = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  // Access the props from URL parameters
  const trainno = params.get('trainno');
  const trainname = params.get('trainname');
  const fromst = params.get('fromst');
  const tost = params.get('tost');
  const duration = params.get('duration');
  const email = params.get('email');
  const username = params.get('username');
  
  const handleClick = () =>{
    
  };

  return (
    <div className="flex flex-col justify-center inline-block items-center h-screen bg-neutral-800 text-pink-500">
    <div className="flex flex-col gap-4 p-20 border border-white rounded-lg">
    <form>
      <label className='m-10'>PassengerName:</label>
      <input className='m-5 rounded-md' type="text" placeholder="   Name" name="Pname1" id="Pname1" />
      <br />
      <label className='m-10' >PassengerAge:</label>
      <input className='m-5 rounded-md' type="text" placeholder="   Name" name="Pname2" id="Pname2" />
      <br />
      <button onClick={handleClick} className='m-5 bg-blue-500 text-white px-4 py-2 rounded-md self-center'>Submit</button>
    </form>
    </div>
    </div>  
  );
};
export default PassengerDetails;
