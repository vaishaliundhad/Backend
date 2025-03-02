import React from 'react'
import InnerBanner from '../helpers/InnerBanner'
import shop1 from '../assets/shop1.jpg'
import shop2 from '../assets/shop2.jpg'
import shop3 from '../assets/shop3.jpg'
import shop4 from '../assets/shop4.jpg'
import shop5 from '../assets/shop5.jpg'
import shop6 from '../assets/shop6.jpg'
import shop7 from '../assets/shop7.jpg'
import shop8 from '../assets/shop8.jpg'
import shop9 from '../assets/shop9.jpg'
import shop10 from '../assets/shop10.jpg'
import shop11 from '../assets/shop11.jpg'
import shop12 from '../assets/shop12.jpg'
import shop13 from '../assets/shop13.jpg'
import shop14 from '../assets/shop14.jpg'
import shop15 from '../assets/shop15.jpg'
import shop16 from '../assets/shop16.jpg'
import shop17 from '../assets/shop17.jpg'
import shop18 from '../assets/shop18.jpg'
import shop19 from '../assets/shop19.jpg'
import shop20 from '../assets/shop20.jpg'
import shop21 from '../assets/shop21.jpg'
import shop22 from '../assets/shop22.jpg'
import shop23 from '../assets/shop23.jpg'
import shop24 from '../assets/shop24.jpg'
import Footerwhite from '../components/footerwhite'
import { useState } from 'react'

const shop=[
  {image1:shop1 , image2:shop2 , title:"Ribbed Tank Top" , price:"$16.95" , colors:["#ffa500", "#000" , "#fff"]},
  {image1:shop3 , image2:shop4 , title:"Ribbed modal T-shirt" , price:"$16.95" ,colors:["#E9967A" , "#a748c2" , "#87c59a"]},
  {image1:shop5 , image2:shop6 , title:"Oversized Printed T-shirt" , price:"$16.95",colors:["#000" , "#fff" , "#ccc"]},
  {image1:shop7 , image2:shop8 , title:"Oversized Printed T-shirt" , price:"$16.95",colors:["#fff" , "#a748c2" , "#000"]},
  {image1:shop9 , image2:shop10 , title:"V-neck linen T-shirt" , price:"$16.95",colors:["#d2945d" , "#fff"]},
  {image1:shop11 , image2:shop12 , title:"Loose Fit Sweatshirt" , price:"$16.95",colors:["#87c59a" , "#000" , "#aecde1" , "#1335a9" , "#fff", "#dddfe3"]},
  {image1:shop13 , image2:shop14 , title:"Regular Fit Oxford Shirt" , price:"$16.95",colors:["#000" , "#1335a9" , "#f3d6bb" , "#a8c8dd" , "#fff"]},
  {image1:shop15 , image2:shop16 , title:"Loose Fit Hoodie" , price:"$16.95",colors:["#fff" , "#000" , "#aecde1"]},
  {image1:shop17 , image2:shop18 , title:"Patterned scarf" , price:"$16.95",colors:["#d2945d" , "#000"]},
  {image1:shop19 , image2:shop20 , title:"Slim Fit Fine-knit Turtleneck Sweater" , price:"$16.95",colors:["#000" , "#fff" ]},
  {image1:shop21 , image2:shop22 , title:"Slim Fit Fine-knit Turtleneck Sweater" , price:"$16.95",colors:["#ccc" , "#dba5c8" , "#d7c0d8"]},
  {image1:shop23 , image2:shop24 , title:"Slim Fit Fine-knit Turtleneck Sweater" , price:"$16.95",colors:[]},
]
const Shop = () => {
  
  return (

    <div>
      <div>
        <InnerBanner innerBannerTile="Shop" innerBannerBreadcrumbs="Shop" />
      </div>
    

       <div className="grid grid-cols-4 gap-6 p-8"> 
        {shop.map((item, index) => (
          <div key={index} className="">
            <div className="relative mt-8 ">
              <img src={item.image1} alt={item.title} className="w-52 h-72 object-cover rounded-lg" />
              <img src={item.image2} alt={item.title} className="absolute top-0 left-0 w-52 h-72 rounded-lg object-cover opacity-0  hover:opacity-100 transition duration-300" />
            </div>
            <div className="mt-4 text-left">
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-bold text-[14px] text-gray-700">Price: {item.price}</p>
            </div>
            <div className='flex space-x-2 mt-2  lext-left mb-6'>
              {item.colors.map((color,colorindex)=>(
                <div key={colorindex} style={{backgroundColor:color}} className='w-[14px] h-[14px] rounded-full border hover:p-[8px] cursor-pointer hover:scale-110 transition-transform duration-200 hover:ring-1  hover:ring-black-200'></div>
              ))}
            </div>
            {/* <div className="flex space-x-2 mt-2">
  {item.colors.map((color, colorindex) => (
    <div
      key={colorindex}
      style={{ backgroundColor: color }}
      className="w-6 h-6 rounded-full border border-gray-300 cursor-pointer"
    ></div>
  ))}
</div> */}

          </div>
        ))}
      </div>

     
       

       {/* footer section */}
      <Footerwhite/>
    </div>

  
  )
}

export default Shop

