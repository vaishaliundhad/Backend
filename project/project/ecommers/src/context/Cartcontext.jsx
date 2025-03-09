import { createContext, useReducer, useContext } from "react";
import { cartReducer } from "../Reducer/cartReducer";

const CartContext = createContext();


const initialState = {
  cart: [],
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cart: cartState.cart,  dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
