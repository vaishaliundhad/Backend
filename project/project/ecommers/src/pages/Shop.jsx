import React from 'react'
// import {useSelector , useDispatch} from 'react-redux'
import InnerBanner from '../helpers/InnerBanner'
import Footerwhite from '../components/footerwhite'

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_TO_CART = 'REMOVE_TO_CART';



const shop = [
  { image1: "https://static.wixstatic.com/media/913019_9d2484fd33db4cfda70b95201764ab65~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_9d2484fd33db4cfda70b95201764ab65~mv2_d_3000_3000_s_4_2.jpg", title: "Corchet Cushion - Zen G Yellow  ", price: "$18.00", colors: ["#ffa500", "#000", "#fff"] },
  { image1: "https://static.wixstatic.com/media/913019_8fdf97c2ee884cdfab210193bfe6a061~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_8fdf97c2ee884cdfab210193bfe6a061~mv2_d_3000_3000_s_4_2.jpg", title: "Corchet Cushion - Light Blue", price: "$15.00", colors: ["#E9967A", "#a748c2", "#87c59a"] },
  { image1: "https://static.wixstatic.com/media/913019_94043d9cfcf94d259b0bbc92a8a7f504~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_94043d9cfcf94d259b0bbc92a8a7f504~mv2_d_3000_3000_s_4_2.jpg", title: "FLower Vase", price: "$10.00", colors: ["#000", "#fff", "#ccc"] },
  { image1: "https://static.wixstatic.com/media/913019_d23a943142c845cbadc6760a12992063~mv2_d_3006_3108_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_d23a943142c845cbadc6760a12992063~mv2_d_3006_3108_s_4_2.jpg", title: "Flower Pot", price: "$22.00", colors: ["#fff", "#a748c2", "#000"] },
  { image1: "https://static.wixstatic.com/media/913019_601928633053475aadbcaf4c6874ece2~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_601928633053475aadbcaf4c6874ece2~mv2_d_3000_3000_s_4_2.jpg", title: "Rug", price: "$40.00", colors: ["#d2945d", "#fff"] },
  { image1: "https://static.wixstatic.com/media/913019_e7baeebd9f2b4d528989d936baa642ab~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_e7baeebd9f2b4d528989d936baa642ab~mv2_d_3000_3000_s_4_2.jpg", title: "Circular Rug", price: "$35.00", colors: ["#87c59a", "#000", "#aecde1", "#1335a9", "#fff", "#dddfe3"] },
  { image1: "https://static.wixstatic.com/media/913019_391ea2622dff4984b12814e50d011de0~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_391ea2622dff4984b12814e50d011de0~mv2_d_3000_3000_s_4_2.jpg", title: "Decorative Vase", price: "$12.00", colors: ["#fff", "#000", "#aecde1"] },
  { image1: "https://static.wixstatic.com/media/913019_0634419729b545b7b69026271f58ed5f~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_0634419729b545b7b69026271f58ed5f~mv2_d_3000_3000_s_4_2.jpg", title: "FLower Vase", price: "$42.00", colors: ["#000", "#1335a9", "#f3d6bb", "#a8c8dd", "#fff"] },
  { image1: "https://static.wixstatic.com/media/913019_879ca0aec45f4dcea0dadb311182c26a~mv2_d_3160_2799_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_879ca0aec45f4dcea0dadb311182c26a~mv2_d_3160_2799_s_4_2.jpg", title: "Small Vase", price: "$12.00", colors: ["#d2945d", "#000"] },
  { image1: "https://static.wixstatic.com/media/913019_cf2931d690f74d15b7c4392ab1b3e418~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_cf2931d690f74d15b7c4392ab1b3e418~mv2_d_3000_3000_s_4_2.jpg", title: "Throws  Wool", price: "$25.00", colors: ["#000", "#fff"] },
  { image1: "https://static.wixstatic.com/media/913019_4406e0376dcb444ba3fc7c510e55727e~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_4406e0376dcb444ba3fc7c510e55727e~mv2_d_3000_3000_s_4_2.jpg", title: "Cotton Blanket", price: "$25.00", colors: ["#ccc", "#dba5c8", "#d7c0d8"] },
  { image1: "https://static.wixstatic.com/media/913019_b9363e3acc744adfaa4cffd16aa57214~mv2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_b9363e3acc744adfaa4cffd16aa57214~mv2.jpg", title: "Slim Fit Fine-knit Turtleneck Sweater", title: "Ceramic Vase Set", price: "$25.00", colors: ["#fff", "#a748c2", "#000"] },
]
const Shop = () => {
  // const dispatch=useDispatch()
  // const cart = useSelector(state => state.cart);
  // console.log(cart);


  // const handleAddtoCart=(item)=>{
  //   dispatch({type:ADD_TO_CART , payload:{...item , quantity:1}})
  // }

  // const handleQuantityChange = (item, action) => {
  //   if (action === 'increase') {
  //     dispatch({ type: ADD_TO_CART, payload: { ...item, quantity: item.quantity + 1 } });
  //   } else if (action === 'decrease' && item.quantity > 1) {
  //     dispatch({ type: ADD_TO_CART, payload: { ...item, quantity: item.quantity - 1 } });
  //   }
  // };


  // const handleRemoveFormCart=(item)=>{
  // dispatch({type:REMOVE_TO_CART , payload:item})
  // }
  return (

    <div>
      <div>

        <div className='overflow-hidden mt-[-110px]'>
          <div className='slider-container '>


            <div className='mainslider1 lg:margin-left:0px p-0 m-0 '>
              <div className='flex justify-center mt-4 ml-14 mr-14 '>
                <img src="https://static.wixstatic.com/media/913019_373d99ce12724e31bd47172bec66f8db~mv2_d_5746_3508_s_4_2.jpg/v1/fill/w_1655,h_630,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_373d99ce12724e31bd47172bec66f8db~mv2_d_5746_3508_s_4_2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-4 gap-4 ml-4 mr-4">
        {shop.map((item, index) => (
          <div key={index} className=" relative mt-8">
            <div className="mt-8 ">
              <img
                src={item.image1}
                alt={item.title}
                className="w-full  bottom-[-60px] object-cover transition duration-300 ease-in-out "
              />
              <div className="absolute mt-[-40px] w-full p-[0px] bg-gray-400 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button className="text-white py-2 w-full">
                  Quick View
                </button>
              </div>

            </div>

            {/* Quick view button */}


            <div className="mt-10 text-left">
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-bold text-[14px] text-gray-700">Price: {item.price}</p>
            </div>
            <div className='flex space-x-2 mt-2  lext-left mb-6'>
              {item.colors.map((color, colorindex) => (
                <div key={colorindex} style={{ backgroundColor: color }} className='w-[14px] h-[14px] rounded-full border hover:p-[8px] cursor-pointer hover:scale-110 transition-transform duration-200 hover:ring-1  hover:ring-black-200'></div>
              ))}
            </div>
            <div>
              <p className='p-[2px]  border border-black flex items-center cursor-pointer'>
                <span className='ml-2 text-xl' onClick={() => handleQuantityChange(item, 'decrease')}>-</span>
                <span className='mx-2 text-center w-full'>{item.quantity}</span>
                <span className='mr-2' onClick={() => handleQuantityChange(item, 'increase')}>+</span>
              </p>
            </div>

            <div>
              {/* <button className='p-2 mt-4 bg-blue-700 text-white w-full' onClick={()=>handleAddtoCart(item)}>Add to Cart</button> */}
              <button className='p-[2px] mt-4 bg-blue-700 text-white w-full'>Add to Cart</button>
            </div>



          </div>
        ))}
      </div>




      {/* footer section */}
      <Footerwhite />
    </div>


  )
}

export default Shop