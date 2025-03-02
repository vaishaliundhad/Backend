import React from 'react'
import Home from './Home'
import Shop from './Shop'
import BuyNow from './BuyNow'
import Error from './Error'
import Login from './Login'
import Payment from './Payment'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar2 from '../components/Navbar2'


import ContactUs from './ContactUs'



/* <Sliderbar/> */
const Layout = () => {
  return (
    <BrowserRouter>

      {/* <Navbar/> */}
      <Navbar2 />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/buynow" element={<BuyNow />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      {/* <Marquee/> */}
    
    </BrowserRouter>

  )
}

export default Layout
