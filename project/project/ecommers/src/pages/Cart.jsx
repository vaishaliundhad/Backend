import React from "react";
import { useCart } from "../context/Cartcontext";

const Cart = () => {
  const { cart, dispatch } = useCart();
  const shop = [
    { id: 1, image1: "https://static.wixstatic.com/media/913019_9d2484fd33db4cfda70b95201764ab65~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_9d2484fd33db4cfda70b95201764ab65~mv2_d_3000_3000_s_4_2.jpg", title: "Corchet Cushion - Zen G Yellow  ", price: "$18.00", colors: ["#ffa500", "#000", "#fff"] },
    { id: 2, image1: "https://static.wixstatic.com/media/913019_8fdf97c2ee884cdfab210193bfe6a061~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_8fdf97c2ee884cdfab210193bfe6a061~mv2_d_3000_3000_s_4_2.jpg", title: "Corchet Cushion - Light Blue", price: "$15.00", colors: ["#E9967A", "#a748c2", "#87c59a"] },
    { id: 3, image1: "https://static.wixstatic.com/media/913019_94043d9cfcf94d259b0bbc92a8a7f504~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_94043d9cfcf94d259b0bbc92a8a7f504~mv2_d_3000_3000_s_4_2.jpg", title: "FLower Vase", price: "$10.00", colors: ["#000", "#fff", "#ccc"] },
    { id: 4, image1: "https://static.wixstatic.com/media/913019_d23a943142c845cbadc6760a12992063~mv2_d_3006_3108_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_d23a943142c845cbadc6760a12992063~mv2_d_3006_3108_s_4_2.jpg", title: "Flower Pot", price: "$22.00", colors: ["#fff", "#a748c2", "#000"] },
    { id: 5, image1: "https://static.wixstatic.com/media/913019_601928633053475aadbcaf4c6874ece2~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_601928633053475aadbcaf4c6874ece2~mv2_d_3000_3000_s_4_2.jpg", title: "Rug", price: "$40.00", colors: ["#d2945d", "#fff"] },
    { id: 6, image1: "https://static.wixstatic.com/media/913019_e7baeebd9f2b4d528989d936baa642ab~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_e7baeebd9f2b4d528989d936baa642ab~mv2_d_3000_3000_s_4_2.jpg", title: "Circular Rug", price: "$35.00", colors: ["#87c59a", "#000", "#aecde1", "#1335a9", "#fff", "#dddfe3"] },
    { id: 7, image1: "https://static.wixstatic.com/media/913019_391ea2622dff4984b12814e50d011de0~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_391ea2622dff4984b12814e50d011de0~mv2_d_3000_3000_s_4_2.jpg", title: "Decorative Vase", price: "$12.00", colors: ["#fff", "#000", "#aecde1"] },
    { id: 8, image1: "https://static.wixstatic.com/media/913019_0634419729b545b7b69026271f58ed5f~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_0634419729b545b7b69026271f58ed5f~mv2_d_3000_3000_s_4_2.jpg", title: "FLower Vase", price: "$42.00", colors: ["#000", "#1335a9", "#f3d6bb", "#a8c8dd", "#fff"] },
    { id: 9, image1: "https://static.wixstatic.com/media/913019_879ca0aec45f4dcea0dadb311182c26a~mv2_d_3160_2799_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_879ca0aec45f4dcea0dadb311182c26a~mv2_d_3160_2799_s_4_2.jpg", title: "Small Vase", price: "$12.00", colors: ["#d2945d", "#000"] },
    { id: 10, image1: "https://static.wixstatic.com/media/913019_cf2931d690f74d15b7c4392ab1b3e418~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_cf2931d690f74d15b7c4392ab1b3e418~mv2_d_3000_3000_s_4_2.jpg", title: "Throws  Wool", price: "$25.00", colors: ["#000", "#fff"] },
    { id: 11, image1: "https://static.wixstatic.com/media/913019_4406e0376dcb444ba3fc7c510e55727e~mv2_d_3000_3000_s_4_2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_4406e0376dcb444ba3fc7c510e55727e~mv2_d_3000_3000_s_4_2.jpg", title: "Cotton Blanket", price: "$25.00", colors: ["#ccc", "#dba5c8", "#d7c0d8"] },
    { id: 12, image1: "https://static.wixstatic.com/media/913019_b9363e3acc744adfaa4cffd16aa57214~mv2.jpg/v1/fill/w_453,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_b9363e3acc744adfaa4cffd16aa57214~mv2.jpg", title: "Slim Fit Fine-knit Turtleneck Sweater", title: "Ceramic Vase Set", price: "$25.00", colors: ["#fff", "#a748c2", "#000"] },
  ]
  console.log(shop);


  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-center bg-blue-800 text-white">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b pb-2 mb-2">
            <div>
              <img src={item.image1} alt="" className="h-14 w-14" />
            </div>
            <div className="flex gap-8 text-end p-8">
              <h4 className="text-lg font-semibold inline-block">{item.title}</h4>
              <p className="text-blue-700 inline-block ">{item.price}</p>
            </div>
            <div className="flex items-center">
              {/* <button
                className="px-2 py-1 bg-gray-300"
                onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item.id })}
              >
                -
              </button>
              <span className="mx-2">{item.quantity}</span>
              <button
                className="px-2 py-1 bg-gray-300"
                onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item.id })}
              >
                +
              </button>
              <button
                className="ml-4 px-2 py-1 bg-red-500 text-white"
                onClick={() => dispatch({ type: "REMOVE_TO_CART", payload: item.id })}
              >
                Remove
              </button> */}
              <div className="flex flex-col space-y-4">
                <div>
                  <h1 className="text-base font-semibold">Quantity:</h1>
                </div>
                <div className="flex items-center border border-black rounded-md">
                  <button
                    className="px-4 py-1 bg-gray-300"
                    onClick={() => dispatch({ type: "DECREASE_QUANTITY", payload: item.id })}
                  >
                    -
                  </button>
                  <span className="mx-2 px-4">{item.quantity}</span>
                  <button
                    className="px-4 py-1 bg-gray-300"
                    onClick={() => dispatch({ type: "INCREASE_QUANTITY", payload: item.id })}
                  >
                    +
                  </button>
                </div>
                <div>
                  <button
                    className="px-2 py-1 bg-red-500 text-white"
                    onClick={() => dispatch({ type: "REMOVE_TO_CART", payload: item.id })}
                  >
                    Remove
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
