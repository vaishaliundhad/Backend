import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import asset1 from '../assets/asset1.jpg'
// import asset2 from '../assets/asset2.jpg'
// import asset3 from '../assets/asset3.jpg'
// import Shopbycategory from '../components/Shopbycategory';
// import { MdKeyboardArrowRight } from "react-icons/md";
// import Scrollsection from '../components/Scrollsection';
// import Discount from '../components/Discount';
import Card from '../components/Card'
// import ShopCollection from '../components/ShopCollection';
// import Trending from '../components/Trending'
// import HappyClient from '../components/HappyClient';
import Footer from '../components/Footer';
// import Blogpost from '../components/Blogpost';
// import Payment from '../components/Payment';
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const navigate= useNavigate()

    const shop =()=>{
       navigate("/shop")
    }


    return (

        <>
            {/* slider */}

            <div className='overflow-hidden mt-[-110px]'>
                <div className='slider-container '>



                    <div className='mainslider1 lg:margin-left:0px p-0 m-0 '>
                        <div className='ml-8 mr-8 mt-14'>

                        <img src="https://static.wixstatic.com/media/913019_23505c37dcaa418c924829114d2d9ca0~mv2_d_2500_1224_s_2.jpg/v1/fill/w_1655,h_1020,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_23505c37dcaa418c924829114d2d9ca0~mv2_d_2500_1224_s_2.jpg"  alt="" />
                        </div>
                        <div className='slide1 '>

                            <h1 className='text-6xl pt-10 font-serif text-blue-800 '>Spring Cutlery<br />Collection</h1>
                            <button className='px-4 p-2 bg-white text-black font-thin mt-4' onClick={shop}>Shop Now</button>
                        </div>

                    </div>

                 


                </div>

            </div>
             {/* <Scrollsection /> */}
{/* <Shopbycategory /> */}
{/* <Discount/> */}
<Card/>
{/* <ShopCollection/> */}
{/* <Trending/> */}
{/* <HappyClient/>  */}
            {/* <MainBlogs/> */}
            {/* <Blogpost/>
<Payment/> */}
            <Footer />

        </>
    );
}



export default Home
