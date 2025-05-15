import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios'
// import { Link } from 'react-scroll'
import Footerwhite from '../components/footerwhite'
import { useCart } from '../context/Cartcontext'
import { useWishlist } from '../context/WishlistContext';
import { FaRegHeart, FaHeart } from "react-icons/fa";

const shop = [
  { id: 1, productImage: "https://static.wixstatic.com/media/913019_9d2484fd33db4cfda70b95201764ab65~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_9d2484fd33db4cfda70b95201764ab65~mv2_d_3000_3000_s_4_2.jpg", productName: "Corchet-Cushion  ",productPrice: "$18.00", colors: ["#ffa500", "#000", "#fff"] , productDescription:"Handcrafted crochet cushion in yellow and green."},
  { id: 2, productImage: "https://static.wixstatic.com/media/913019_8fdf97c2ee884cdfab210193bfe6a061~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_8fdf97c2ee884cdfab210193bfe6a061~mv2_d_3000_3000_s_4_2.jpg", productName: "Corchet-Cushion ", productPrice: "$15.00", colors: ["#E9967A", "#a748c2", "#87c59a"] , productDescription:"Knitted cushion in pink, purple, green; soft and chic." },
  { id: 3, productImage: "https://static.wixstatic.com/media/913019_94043d9cfcf94d259b0bbc92a8a7f504~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_94043d9cfcf94d259b0bbc92a8a7f504~mv2_d_3000_3000_s_4_2.jpg", productName: "FLower-Vase",      productPrice: "$10.00", colors: ["#000", "#fff", "#ccc"] , productDescription:"Blue glass vase in black, white; sleek and modern."},
  { id: 4, productImage: "https://static.wixstatic.com/media/913019_d23a943142c845cbadc6760a12992063~mv2_d_3006_3108_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_d23a943142c845cbadc6760a12992063~mv2_d_3006_3108_s_4_2.jpg", productName: "Flower-Pot",       productPrice: "$22.00", colors: ["#fff", "#a748c2", "#000"] , productDescription:"Ceramic pot with stand in purple, black; contemporary and elegant."},
  { id: 5, productImage: "https://static.wixstatic.com/media/913019_601928633053475aadbcaf4c6874ece2~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_601928633053475aadbcaf4c6874ece2~mv2_d_3000_3000_s_4_2.jpg", productName: "Rug",              productPrice: "$40.00", colors: ["#d2945d", "#fff"] , productDescription:"Woven rectangular rug in beige, brown; rustic and cozy." },
  { id: 6, productImage: "https://static.wixstatic.com/media/913019_e7baeebd9f2b4d528989d936baa642ab~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_e7baeebd9f2b4d528989d936baa642ab~mv2_d_3000_3000_s_4_2.jpg", productName: "Circular-Rug",     productPrice: "$35.00", colors: ["#87c59a", "#000", "#aecde1", "#1335a9", "#fff", "#dddfe3"] , productDescription:"Round woven rug in beige, green, blue; textured and chic." },
  { id: 7, productImage: "https://static.wixstatic.com/media/913019_391ea2622dff4984b12814e50d011de0~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_391ea2622dff4984b12814e50d011de0~mv2_d_3000_3000_s_4_2.jpg", productName: "Decorative Vase",  productPrice: "$12.00", colors: ["#fff", "#000", "#aecde1"] , productDescription:"Clear glass vase in white, black; minimalist and sleek." },
  { id: 8, productImage: "https://static.wixstatic.com/media/913019_0634419729b545b7b69026271f58ed5f~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_0634419729b545b7b69026271f58ed5f~mv2_d_3000_3000_s_4_2.jpg", productName: "FLower-Vase",      productPrice: "$42.00", colors: ["#000", "#1335a9", "#f3d6bb", "#a8c8dd", "#fff"] , productDescription:"Glass dome vase in black, blue; elegant and modern." },
  { id: 9, productImage: "https://static.wixstatic.com/media/913019_879ca0aec45f4dcea0dadb311182c26a~mv2_d_3160_2799_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_879ca0aec45f4dcea0dadb311182c26a~mv2_d_3160_2799_s_4_2.jpg", productName: "Small-Vase",       productPrice: "$12.00", colors: ["#d2945d", "#000"] , productDescription:"clear glass with plant, brown." },
  { id: 10,productImage: "https://static.wixstatic.com/media/913019_cf2931d690f74d15b7c4392ab1b3e418~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_cf2931d690f74d15b7c4392ab1b3e418~mv2_d_3000_3000_s_4_2.jpg",productName: "Throws-Wool",      productPrice: "$25.00", colors: ["#000", "#fff"] , productDescription:"gray wool throw with tassels, black/white."},
  { id: 11,productImage: "https://static.wixstatic.com/media/913019_4406e0376dcb444ba3fc7c510e55727e~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_4406e0376dcb444ba3fc7c510e55727e~mv2_d_3000_3000_s_4_2.jpg",productName: "Cotton-Blanket",   productPrice: "$25.00", colors: ["#ccc", "#dba5c8", "#d7c0d8"] , productDescription:"gray/white checkered, gray/pink colors." },
  { id: 12,productImage: "https://static.wixstatic.com/media/913019_b9363e3acc744adfaa4cffd16aa57214~mv2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_b9363e3acc744adfaa4cffd16aa57214~mv2.jpg",                      productName: "Slim Fit Fine-knit Turtleneck ", productPrice: "$25.00", colors: ["#fff", "#a748c2", "#000"] , productDescription:"two ceramic vases with book, white." },
]

const Shop = () => {
  const { dispatch } = useCart();
  const [products, setProducts] = useState([]);
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlist();

  useEffect(()=>{
    const fetchProduct = async ()=>{
      const token = localStorage.getItem("token");
      try{
        const response = await axios.get("http://127.0.0.1:8888/product" , {
          headers:{
            'x-auth-token':token,
          }
        });
        setProducts(response.data.data)
      }
      catch(err){
        console.error('Error fetching product',err)
      }
    }
  fetchProduct();
   
  } , [])

  const handleWishlistToggle = (item) => {
    if (wishlist.some((wishItem) => wishItem.id === item.id)) {
      removeFromWishlist(item.id);
    } else {
      addToWishlist({ ...item, id: item.id });
    }
  };

  const handleAddtoCart = (item) => {
    console.log("Adding item:", item);
    dispatch({ type: "ADD_TO_CART", payload: { ...item,  productQuantity: 1 } });
  };

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
                src={item.productImage}
                alt={item.title}
                className="w-full  bottom-[-60px] object-cover transition duration-300 ease-in-out "
              />
              <div className="absolute mt-[-37px] w-full p-[0px] bg-gray-400 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <button className="text-white text-sm py-2 w-full" smooth={true} duration={500}>
                  Quick View
                </button>
                {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <button className="text-white text-sm py-2 w-full">Quick View</button>
                </div> */}
              </div>

            </div>

            {/* Quick view button */}


            <div className="mt-10 text-left">
              <h4 className="text-lg font-semibold">{item.productName}</h4>
              <p className="text-bold text-[14px] text-blue-900">Price: {item.productPrice}</p>
              {/* show user name if available */}
              {item.user && item.user.name && (
                <p>{item.user.name}</p>
              )}
              <p>{item.productDescription}</p>
            </div>
            <div className='flex space-x-2 mt-2  lext-left mb-6'>
              {item.colors.map((color, colorindex) => (
                <div key={colorindex} style={{ backgroundColor: color }} className='w-[14px] h-[14px] rounded-full border hover:p-[8px] cursor-pointer hover:scale-110 transition-transform duration-200 hover:ring-1  hover:ring-black-200'></div>
              ))}
            </div>

            <div className="flex items-center mt-2 border p-2 justify-between">
              {/* const productQuantity = cart.find((p) => p.id === item.id)?.quantity || 0; */}
              <button
                className="px-2 py-1 bg-gray-300"
                onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item.id })}
              >
                -
              </button>
              <span className="mx-2">{item.productQuantity || 1}</span>
              <button
                className="px-2 py-1 bg-gray-300"
                onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item.id })}
              >
                +
              </button>

            </div>

            <div>
              {/* <button className='p-2 mt-4 bg-blue-700 text-white w-full' onClick={()=>handleAddtoCart(item)}>Add to Cart</button> */}
              <button className='p-[2px] mt-4 bg-blue-700 text-white w-full' onClick={() => handleAddtoCart(item)}>Add to Cart</button>
            </div>
            {/* <button
              className={`p-2 mt-4 ${wishlist.some(w => w.id === item.id)
                ? 'bg-red-500'
                : 'bg-green-500'} text-white w-full`}
              onClick={() => handleWishlistToggle(item)}
            >
              {wishlist.some(w => w.id === item.id)
                ? 'Remove from Wishlist'
                : 'Add to Wishlist'}
            </button> */}
            {/* <button className='m-2 text-xl' onClick={() => toggleWishlist(item.id)}>
            {wishlist.includes(item.id) ? <FaHeart className="text-red-600" /> : <FaRegHeart/>}
            </button> */}
            <button
              className="absolute top-10 right-2 text-2xl"
              onClick={() => handleWishlistToggle(item)}
            >
              {wishlist.some(w => w.id === item.id)
                ? <FaHeart className="text-red-600" />
                : <FaRegHeart />}
            </button>



          </div>
        ))}
      </div>




      {/* footer section */}
      <Footerwhite />
    </div>


  )
}

export default Shop