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
import Cart from './Cart'
import Wishlist from './Wishlist'
import SignUp from './SignUp'
import ProtectedRoute from '../components/ProtectedRoute'



/* <Sliderbar/> */
const Layout = () => {
  return (
    <BrowserRouter>

      {/* <Navbar/> */}
      <Navbar2 />

      <Routes>
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}></Route>
        {/* <Route path="/shop" element={<ProtectedRoute><Shop/></ProtectedRoute>}></Route> */}
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path="/buynow" element={ <ProtectedRoute><BuyNow/></ProtectedRoute>}></Route>
        <Route path="/payment" element={<ProtectedRoute><Payment/></ProtectedRoute>}></Route>
        <Route path="/contactus" element={<ContactUs/>}></Route>
        {/* <Route path="/contactus" element={<ProtectedRoute><ContactUs/></ProtectedRoute>}></Route> */}
        <Route path="/wishlist" element={<ProtectedRoute><Wishlist/></ProtectedRoute>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        {/* <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      {/* <Marquee/> */}

    </BrowserRouter>

  )
}

export default Layout
