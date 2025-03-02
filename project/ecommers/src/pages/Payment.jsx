import React, { useState } from "react";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayment = () => {
    alert("Payment Successful!");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-blue-600 text-white p-4">
          <h2 className="text-lg font-semibold">Payment Information</h2>
        </div>
        <div className="p-4">
          <label className="block text-sm font-medium">Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring ring-blue-400"
            placeholder="1234 5678 9012 3456"
          />

          <label className="block mt-4 text-sm font-medium">Expiry Date</label>
          <input
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring ring-blue-400"
            placeholder="MM/YY"
          />

          <label className="block mt-4 text-sm font-medium">CVV</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring ring-blue-400"
            placeholder="123"
          />

          <button
            onClick={handlePayment}
            className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded-lg p-2 mt-4"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
