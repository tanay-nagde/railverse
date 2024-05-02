import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation from React Router

function TicketInfoPage() {
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

  const jumpToPayment = () => {
    // Open the payment window when the button is clicked
    window.location.href = '/payment-window';
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-neutral-800 text-pink-500">
      <div className="flex flex-col gap-4 p-20 border border-white rounded-lg">
        <h2 className="text-center md:font-bold">Ticket Information</h2>
        <p>Train Number: {trainno}</p>
        <p>Train Name: {trainname}</p>
        <p>From Station: {fromst}</p>
        <p>To Station: {tost}</p>
        <p>Duration: {duration}</p>
        <p>Email: {email}</p>
        <p>Username: {username}</p>
        {/* Other ticket information goes here */}

        <button onClick={jumpToPayment} className="bg-blue-500 text-white px-4 py-2 rounded-md self-center">Confirm Details</button>
      </div>
    </div>
  );
}

export default TicketInfoPage;
