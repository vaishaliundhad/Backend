export const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        console.log("Adding item to cart:", action.payload); // Debugging log
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      default:
        return state;
    }
  };
  