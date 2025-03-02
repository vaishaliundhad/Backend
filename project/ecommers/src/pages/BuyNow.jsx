import React from 'react'
import InnerBanner from '../helpers/InnerBanner'
import asset12 from '../assets/asset12.jpg'
import asset13 from '../assets/asset13.jpg'
import asset14 from '../assets/asset14.jpg'
import asset15 from '../assets/asset15.jpg'
import Footerwhite from '../components/footerwhite'

const BuyNow = () => {
  return (
    <div>
      <div>
        <InnerBanner innerBannerTile="BuyNow" innerBannerBreadcrumbs="BuyNow" />
      </div>
      <div className='flex justify-center'>
        {/* Billing Details */}

        <div> <h1 className='ml-10 text-4xl mt-10'>CheckOut</h1>
          
          <div className='w-full mt-8'>
            <div class="mt-1 ml-10" >
              <label for="city" class="block text-gray-700 dark:text-black mb-1">Full Name*</label>
              <input type="city" id="city" class="w-full rounded border py-2 px-44 mt-1"></input>

            </div>
            <div class="mt-1 ml-10" >
              <label for="city" class="block text-gray-700 dark:text-black mb-1">Email*</label>
              <input type="city" id="city" class="w-full rounded border py-2 px-44 mt-1"></input>

            </div>
            <div class="mt-1 ml-10" >
              <label for="city" class="block text-gray-700 dark:text-black mb-1">Address*</label>
              <input type="city" id="city" class="w-full rounded border py-2 px-44 mt-1"></input>

            </div>
            <div class="mt-7 ml-10" >
              <label for="city" class="block text-gray-700 dark:text-black mb-1">Card Number*</label>
              <input type="city" id="city" class="w-full rounded border py-2 px-3mt-1 "></input>
            </div>
            <div class="mt-7 ml-10" >
              <label for="address" class="block text-gray-700 dark:text-black mb-1">CVV*</label>
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
