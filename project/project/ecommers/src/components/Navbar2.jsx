import React from 'react';

import { NavLink, Outlet } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { RxPerson } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";
import { RiShoppingBag2Line } from "react-icons/ri";
import { IoListSharp } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

const Navbar2 = () => {
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
                       
                        <li>
                                <NavLink to="/contactus" className=' hover:bg-gray-100'>ContactUs</NavLink>
                        </li>
                            
                        <li><NavLink to="/payment" className=' py-2 hover:bg-gray-100'>Payment</NavLink></li>
                       
                        <li><NavLink to="/buynow" className='hover:text-gray-700'>Buy Now</NavLink></li>

                    </ul>
                </nav>
            </div>


            <div className='flex gap-3 text-2xl pr-5 mr-6'>
                <IoSearch className='hover:text-red-500 text-xl' />
                <NavLink to="/login" className=' max-md:hidden hover:text-red-500 text-xl'><RxPerson /></NavLink>
                {/* <RxPerson className='max-md:hidden hover:text-red-500 text-xl' /> */}
                <div className='relative mr-1'>
                    <FaRegHeart className='max-md:hidden hover:text-red-500 text-xl ' />

                    <div className='absolute text-xs text-white mt-[-26px] ml-[12px] border px-[5px] py-[-10px] bg-red-600 rounded-[50%]'>0</div>
                </div>
                <div className='relative'>
                    <RiShoppingBag2Line className='max-md:hidden hover:text-red-500 text-xl' />
                    <div className='absolute text-xs text-white mt-[-26px] ml-[12px] border px-[5px] py-[-10px] bg-red-600 rounded-[50%]'>0</div>
                </div>
            </div>

            <Outlet />
        </div>
    );
}

export default Navbar2;