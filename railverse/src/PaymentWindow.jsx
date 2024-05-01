import React, { useState } from 'react';

function PaymentWindow() {
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [credentials, setCredentials] = useState({
    upiId: '',
    cardNumber: '',
    cardHolderName: '',
    expirationDate: '',
    cvv: '',
  });

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleCredentialsChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleStartPayment = () => {
    // Implement payment processing logic here
    console.log('Starting payment with method:', paymentMethod);
    console.log('Credentials:', credentials);
    // Add your payment processing code here
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-neutral-800 text-pink-500">
      <div className="flex flex-col gap-4 p-6 border border-white rounded-lg">
        <h2 className="text-center">Payment Information</h2>

        <select
          className="bg-gray-200 px-4 py-2 rounded-md"
          value={paymentMethod}
          onChange={handlePaymentMethodChange}
        >
          <option value="upi">UPI</option>
          <option value="credit-card">Credit Card</option>
          <option value="debit-card">Debit Card</option>
        </select>

        {paymentMethod === 'upi' && (
          <input
            type="text"
            name="upiId"
            value={credentials.upiId}
            onChange={handleCredentialsChange}
            placeholder="Enter UPI ID"
            className="bg-gray-200 px-4 py-2 rounded-md"
          />
        )}

        {paymentMethod !== 'upi' && (
          <>
            <input
              type="text"
              name="cardNumber"
              value={credentials.cardNumber}
              onChange={handleCredentialsChange}
              placeholder="Enter Card Number"
              className="bg-gray-200 px-4 py-2 rounded-md"
            />
            <input
              type="text"
              name="cardHolderName"
              value={credentials.cardHolderName}
              onChange={handleCredentialsChange}
              placeholder="Enter Card Holder Name"
              className="bg-gray-200 px-4 py-2 rounded-md"
            />
            <input
              type="text"
              name="expirationDate"
              value={credentials.expirationDate}
              onChange={handleCredentialsChange}
              placeholder="Enter Expiration Date (MM/YY)"
              className="bg-gray-200 px-4 py-2 rounded-md"
            />
            <input
              type="text"
              name="cvv"
              value={credentials.cvv}
              onChange={handleCredentialsChange}
              placeholder="Enter CVV"
              className="bg-gray-200 px-4 py-2 rounded-md"
            />
          </>
        )}

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md self-center"
          onClick={handleStartPayment}
        >
          Start Payment
        </button>
      </div>
    </div>
  );
}

export default PaymentWindow;
