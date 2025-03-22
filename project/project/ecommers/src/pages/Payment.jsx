import React, { useState } from 'react';
import InnerBanner from '../helpers/InnerBanner'

const PaymentPage = () => {
  const [paymentInfo, setPaymentInfo] = useState({
    cardType: 'credit',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: '',
  });

  const handleChange = (e) => {
    setPaymentInfo({
      ...paymentInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment successful with ${paymentInfo.cardType} card`);
  };

  return (
    <>
      <div>
        <InnerBanner innerBannerTile="payment" innerBannerBreadcrumbs="payment" />
      </div>
      <div className="max-w-md sm:max-w-sm mx-auto p-6  rounded-lg shadow-lg shadow-gray-500 overflow-hidden mt-6 bg-white sm:text-xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-900">Payment Information</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-lg">
            <label className="block text-black font-serif ">Select Card Type*</label>
            <div className="flex space-x-4 ">
              <button
                type="button"
                onClick={() => setPaymentInfo({ ...paymentInfo, cardType: 'credit' })}
                className={`px-4 py-2 border rounded-lg mt-2 ${paymentInfo.cardType === 'credit' ? 'bg-blue-800 text-white' : 'bg-gray-200'}`}
              >
                Credit Card
              </button>
              <button
                type="button"
                onClick={() => setPaymentInfo({ ...paymentInfo, cardType: 'debit' })}
                className={`px-4 py-2 border rounded-lg mt-2 ${paymentInfo.cardType === 'debit' ? 'bg-blue-800 text-white' : 'bg-gray-200'}`}
              >
                Debit Card
              </button>
            </div>
          </div>

          <div className="mb-4 text-lg">
            <label className="block text-black font-serif ">Card Number*</label>
            <input
              type="text"
              name="cardNumber"
              value={paymentInfo.cardNumber}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500"
              placeholder="1234 5678 9876 5432"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4 text-lg">
            <div>
              <label className="block text-black font-serif text-lg">Expiry Date*</label>
              <input
                type="text"
                name="expiryDate"
                value={paymentInfo.expiryDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500"
                placeholder="MM/YY"
                required
              />
            </div>

            <div className=''>
              <label className="block text-black font-serif text-lg">CVV*</label>
              <input
                type="text"
                name="cvv"
                value={paymentInfo.cvv}
                onChange={handleChange}
                className="w-full p-3 border  border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500"
                placeholder="123"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-black font-serif ">Billing Address*</label>
            <input
              type="text"
              name="billingAddress"
              value={paymentInfo.billingAddress}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-blue-500"
              placeholder="123 Street, City, Country"
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-800 text-white py-3 rounded-lg">
            Pay Now
          </button>
        </form>
      </div>




    </>
  );
};

export default PaymentPage;
