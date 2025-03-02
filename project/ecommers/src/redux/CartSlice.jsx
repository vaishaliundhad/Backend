// import { createSlice } from "@reduxjs/toolkit";

// const CartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         items: [],
//     },
//     reducer: {
//         addToCart: (state, action) => {
//             console.log("Adding product:", action.payload);
//             const existingItem = state.items.find((item) => item.id === action.payload.id);

//             if (existingItem) {
//                 existingItem.quantity += 1;
//             } else {
//                 state.items.push({ ...action.payload, quantity: 1 });
//             }
//         },
//         removeToCart: (state, action) => {
//             state.items = state.items.filter((item) => item.id !== action.payload)
//         },

//         emptyCart: (state) => {
//             state.items = [];
//         },
//     }
// })

// export const {addToCart , removeToCart , emptyCart}=createSlice.action

// export default CartSlice.reducer