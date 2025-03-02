import React from "react";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {
    const cart = useSelector(state => state.cart);  // Assuming cart is directly inside state
    const dispatch = useDispatch();

    // Handle removing item
    const handleRemove = (item) => {
        dispatch({ type: "REMOVE_TO_CART", payload: item });
    };

    // Handle quantity increase
    const handleIncreaseQuantity = (item) => {
        dispatch({ type: "ADD_TO_CART", payload: { ...item, quantity: item.quantity + 1 } });
    };

    // Handle quantity decrease
    const handleDecreaseQuantity = (item) => {
        if (item.quantity > 1) {
            dispatch({ type: "ADD_TO_CART", payload: { ...item, quantity: item.quantity - 1 } });
        }
    };

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                <ul>
                    {cart.map((item, index) => (
                        <li key={index} className="flex justify-between items-center border-b py-4">
                            <img src={item.image1} alt={item.title} className="w-16 h-16" />
                            <div>
                                <p className="font-semibold">{item.title}</p>
                                <p className="text-gray-600">{item.price}</p>
                                <p className="text-gray-600">Quantity: {item.quantity}</p>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    className="bg-blue-500 text-white px-4 py-1 rounded"
                                    onClick={() => handleIncreaseQuantity(item)}
                                >
                                    +
                                </button>
                                <button
                                    className="bg-yellow-500 text-white px-4 py-1 rounded"
                                    onClick={() => handleDecreaseQuantity(item)}
                                >
                                    -
                                </button>
                                <button
                                    className="bg-red-500 text-white px-4 py-1 rounded"
                                    onClick={() => handleRemove(item)}
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
