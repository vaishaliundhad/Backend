import React from 'react'
import Footerwhite from '../components/footerwhite'

const BuyNow = () => {
  return (
    // <div className='sm:overflow-hidden w-screen'>

    //   <div className='mainslider1 lg:margin-left:0px p-0 m-0 '>
    //     <div className='flex justify-center mt-4'>

    //       <img src="https://static.wixstatic.com/media/913019_b222e029b459459680c043ccb9b42b72~mv2.jpg/v1/fill/w_1296,h_314,fp_0.50_0.50,q_85,enc_avif,quality_auto/913019_b222e029b459459680c043ccb9b42b72~mv2.jpg" className='w-full max-w-4xl' alt="" />
    //     </div>


    //   </div>

    //   <div className='flex justify-center px-4'>


    //     <div className='w-full max-w-lg p-6 bg-white shadow-lg rounded'> 
    //       <h1 className='text-4xl mt-10 text-center'>CheckOut</h1>

    //       <div className='w-full mt-8'>
    //         <div class="mt-1 ml-10" >
    //           <label for="city" class="block text-gray-700 dark:text-black mb-1 font-serif">Full Name*</label>
    //           <input type="city" id="city" class="w-full rounded border py-2 px-3 mt-1"></input>

    //         </div>
    //         <div class="mt-1 ml-10" >
    //           <label for="city" class="block text-gray-700 dark:text-black mb-1 font-serif">Email*</label>
    //           <input type="city" id="city" class="w-full rounded border py-2 px-3 mt-1"></input>

    //         </div>
    //         <div class="mt-1 ml-10" >
    //           <label for="city" class="block text-gray-700 dark:text-black mb-1 font-serif">Address*</label>
    //           <input type="city" id="city" class="w-full rounded border py-2 px-3 mt-1"></input>

    //         </div>
    //         <div class="mt-7 ml-10" > 
    //           <label for="city" class="block text-gray-700 dark:text-black mb-1 font-serif">Card Number*</label>
    //           <input type="city" id="city" class="w-full rounded border py-2 px-3 mt-1 "></input>
    //         </div>
    //         <div class="mt-7 ml-10" >
    //           <label for="address" class="block text-gray-700 dark:text-black mb-1 font-serif">CVV*</label>
    //           <input type="text" id="address" class="w-full rounded border py-2 px-3 mt-1 "></input>
    //         </div>

    //         <div class="text-center" >

    //           <button className='w-full  text-xs py-3 bg-black text-white  rounded-sm   btn btnDark'>Place  order</button>
    //         </div>



    //       </div>

    //     </div>


    //   </div>
    //   {/* footer section */}
    //   <Footerwhite />
    // </div>
    <div className="w-full max-w-screen overflow-x-hidden relative">
      {/* Slider Section */}
      <div className="mainslider1 lg:ml-0 p-0 m-0">
        <div className="flex justify-center mt-4 w-full">
          <img
            src="https://static.wixstatic.com/media/913019_b222e029b459459680c043ccb9b42b72~mv2.jpg/v1/fill/w_1296,h_314,fp_0.50_0.50,q_85,enc_avif,quality_auto/913019_b222e029b459459680c043ccb9b42b72~mv2.jpg"
            className=" w-full h-auto max-w-4xl"
            alt=""
          />
        </div>
      </div>

      {/* Checkout Section */}
      <div className="flex justify-center w-full px-4 mt-6">
        <div className="w-full max-w-lg p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>

          {/* Checkout Form */}
          <div className="w-full space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 dark:text-black mb-1 font-serif">Full Name*</label>
              <input type="text" className="w-full rounded border py-2 px-3" />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 dark:text-black mb-1 font-serif">Email*</label>
              <input type="email" className="w-full rounded border py-2 px-3" />
            </div>

            {/* Address */}
            <div>
              <label className="block text-gray-700 dark:text-black mb-1 font-serif">Address*</label>
              <input type="text" className="w-full rounded border py-2 px-3" />
            </div>

            {/* Card Number */}
            <div>
              <label className="block text-gray-700 dark:text-black mb-1 font-serif">Card Number*</label>
              <input type="text" className="w-full rounded border py-2 px-3" />
            </div>

            {/* CVV */}
            <div>
              <label className="block text-gray-700 dark:text-black mb-1 font-serif">CVV*</label>
              <input type="text" className="w-full rounded border py-2 px-3" />
            </div>

            {/* Place Order Button */}
            <div className="text-center">
              <button className="w-full py-3 flex justify-center bg-black text-white rounded-sm hover:bg-gray-900  btn btnDark">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footerwhite />
    </div>

  )
}

export default BuyNow
