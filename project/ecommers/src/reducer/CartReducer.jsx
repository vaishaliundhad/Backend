import { createStore } from "redux";


const initalstate={
    cart:[],
}

const ADD_TO_CART="Add_TO_CART";
const REMOVE_TO_CART="REMOVE TO CART"


const cartReducer=(state=[] , action)=>{
  switch(action.type)
  {
    case ADD_TO_CART:
      // Check if the item is already in the cart
      const itemIndex = state.findIndex(item => item.title === action.payload.title);
      if (itemIndex >= 0) {
        // Update quantity if item already exists
        const updatedCart = [...state];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      }
      // Add item to the cart
      return [...state, action.payload];

    case REMOVE_TO_CART:
      return state.filter(item => item.title !== action.payload.title); // Remove the item from the cart
      
    default:
      return state;     
  }
}

const store=createStore(cartReducer)
export default store;
