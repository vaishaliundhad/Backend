import React from 'react'
import Footerwhite from '../components/footerwhite'

const BuyNow = () => {
  return (
    <div>

      <div className='mainslider1 lg:margin-left:0px p-0 m-0 '>
        <div className='flex justify-center mt-4'>

          <img src="https://static.wixstatic.com/media/913019_b222e029b459459680c043ccb9b42b72~mv2.jpg/v1/fill/w_1296,h_314,fp_0.50_0.50,q_85,enc_avif,quality_auto/913019_b222e029b459459680c043ccb9b42b72~mv2.jpg" alt="" />
        </div>


      </div>

      <div className='flex justify-center'>


        <div> <h1 className='ml-10 text-4xl mt-10 text-center'>CheckOut</h1>

          <div className='w-full mt-8'>
            <div class="mt-1 ml-10" >
              <label for="city" class="block text-gray-700 dark:text-black mb-1 font-serif">Full Name*</label>
              <input type="city" id="city" class="w-full rounded border py-2 px-44 mt-1"></input>

            </div>
            <div class="mt-1 ml-10" >
              <label for="city" class="block text-gray-700 dark:text-black mb-1 font-serif">Email*</label>
              <input type="city" id="city" class="w-full rounded border py-2 px-44 mt-1"></input>

            </div>
            <div class="mt-1 ml-10" >
              <label for="city" class="block text-gray-700 dark:text-black mb-1 font-serif">Address*</label>
              <input type="city" id="city" class="w-full rounded border py-2 px-44 mt-1"></input>

            </div>
            <div class="mt-7 ml-10" > 
              <label for="city" class="block text-gray-700 dark:text-black mb-1 font-serif">Card Number*</label>
              <input type="city" id="city" class="w-full rounded border py-2 px-3mt-1 "></input>
            </div>
            <div class="mt-7 ml-10" >
              <label for="address" class="block text-gray-700 dark:text-black mb-1 font-serif">CVV*</label>
              <input type="text" id="address" class="w-full rounded border py-2 px-3 mt-1 "></input>
            </div>

            <div class="mt-7 ml-10" >

              <button className='px-[154px] mt-10 text-xs py-3 bg-black text-white ml-10 rounded-sm mr-18  btn btnDark'>Place  order</button>
            </div>



          </div>

        </div>


      </div>
      {/* footer section */}
      <Footerwhite />
    </div>
  )
}

export default BuyNow
