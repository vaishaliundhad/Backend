import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";
import { RiShoppingBag2Line } from "react-icons/ri";
import { IoListSharp } from "react-icons/io5";
import { useCart } from "../context/Cartcontext";

const Navbar2 = () => {
    const [showCart, setShowCart] = useState(false);  
    const { cart } = useCart();  

    const handleMouseEnter = () => {
        setShowCart(true);  
    };

    const handleMouseLeave = () => {
        setShowCart(false); 
    };

    const handleTouchStart = () => {
        setShowCart(true); 
    };

    const handleTouchEnd = () => {
        setShowCart(false);  
    };

    return (
        <div className='h-20 flex bg-white items-center justify-between sticky top-0 z-50 shadow-lg'>

            <div className='lg:hidden'>
                <IoListSharp className='text-3xl lg:mx-5' />
            </div>

            <div className='pl-10 logo'>
                <h1 className='text-4xl font-serif text-blue-900'>shop</h1>
            </div>

            <div>
                <nav className='max-md:hidden nav'>
                    <ul className='flex gap-6 pages'>
                        <li><NavLink to="/" className='hover:text-gray-700'>Home</NavLink></li>
                        <li><NavLink to="/shop" className='hover:text-gray-700'>Shop</NavLink></li>
                        {/* <li><NavLink to="/contactus" className=' hover:bg-gray-100'>ContactUs</NavLink></li> */}
                        <li><NavLink to="/payment" className=' py-2 hover:bg-gray-100'>Payment</NavLink></li>
                        <li><NavLink to="/buynow" className='hover:text-gray-700'>Buy Now</NavLink></li>
                    </ul>
                </nav>
            </div>

            <div className='flex gap-3 text-2xl pr-5 mr-6'>
                <IoSearch className='hover:text-red-500 text-xl' />
                <NavLink to="/login" className=' max-md:hidden hover:text-red-500 text-xl'><RxPerson /></NavLink>
                <div className='relative mr-1'>
                    <FaRegHeart className='max-md:hidden hover:text-red-500 text-xl ' />
                    <div className='absolute text-xs text-white mt-[-26px] ml-[12px] border px-[5px] py-[-10px] bg-red-600 rounded-[50%]'>0</div>
                </div>

               
                <div 
                    className='relative' 
                    onMouseEnter={handleMouseEnter} 
                    onMouseLeave={handleMouseLeave}  
                    onTouchStart={handleTouchStart}  
                    onTouchEnd={handleTouchEnd}  
                >
                    <NavLink to="/cart" className=' max-md:hidden hover:text-red-500 text-xl'>
                        <RiShoppingBag2Line />
                    </NavLink>
                    <div className='absolute text-xs text-white mt-[-26px] ml-[12px] border px-[5px] py-[-10px] bg-red-600 rounded-[50%]'>
                        {cart.length}
                    </div>

                   
                    {showCart && (
                        <div className='absolute bg-white shadow-lg border overflow-y-scroll rounded-lg w-64 mt-2 right-0 p-4 max-h-96 '>
                            <h3 className='font-bold mb-2 bg-blue-800  text-center text-white'>Cart Items</h3>
                            {cart.length === 0 ? (
                                <p>No items in cart</p>
                            ) : (
                                cart.map((item) => (
                                    <div key={item.id} className="flex justify-between items-center mb-2">
                                        <div className="flex items-center">
                                            <img src={item.image1} alt={item.title} className="h-14 w-14 mr-2" />
                                            <span className="text-sm">{item.title}</span>
                                        </div>
                                        <span className="text-sm">{item.price}</span>
                                    </div>
                                ))
                            )}
                        </div>
                    )}
                </div>
            </div>

            <Outlet />
        </div>
    );
};

export default Navbar2;
