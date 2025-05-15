// export const cartReducer = (state, action) => {
//     switch (action.type) {
//         case "ADD_TO_CART":
//             console.log("Adding item to cart:", action.payload);
//             return {
//                 ...state,
//                 cart: [...state.cart, action.payload],
//             };


//         // case "REMOVE_TO_CART":
//         //     console.log("Item IDs in Cart:", state.cart.map(item => item.id));
//         //     console.log("Item ID to Remove:", action.payload);

//         //     return {
//         //         ...state,
//         //         cart: state.cart.filter(item => String(item.id) !== String(action.payload)),

//         //     };
//         case "REMOVE_TO_CART":
//             console.log("Item IDs in Cart:", state.cart.map(item => item.id));
//             console.log("Item ID to Remove:", action.payload);

//             return {
//                 ...state,
//                 cart: state.cart.filter(item => item.id !== action.payload),
//             };


//         case "INCREASE_QUANTITY":
//             return {
//                 ...state,
//                 cart: state.cart.map(item =>
//                     item.id === action.payload ? { ...item, quantity: (item.quantity || 1) + 1 } : item
//                 ),
//             };

//         case "DECREASE_QUANTITY":
//             return {
//                 ...state,
//                 cart: state.cart.map(item =>
//                     item.id === action.payload ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) } : item
//                 ),
//             };




//         default:
//             return state;
//     }
// };

export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log("Adding item to cart:", action.payload);
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }],  // Ensure quantity starts at 1
            };

        case "REMOVE_TO_CART":
            console.log("Item IDs in Cart:", state.cart.map(item => item.id));
            console.log("Item ID to Remove:", action.payload);

            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };

        case "INCREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload 
                    ? { ...item, quantity: (item.quantity || 1) + 1 }  // Safely increase quantity
                    : item
                ),
            };

        case "DECREASE_QUANTITY":
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload 
                    ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) }  // Prevent quantity from going below 1
                    : item
                ),
            };

        default:
            return state;
    }
};
