import React from 'react'
import Card from '../components/Card';
import Footer from '../components/Footer';;
import { useNavigate } from 'react-router-dom';



const Home = () => {
    const navigate = useNavigate()

    const shop = () => {
        navigate("/shop")
    }


    return (

        <>
            {/* slider */}

            <div className='overflow-hidden mt-[-110px]'>
                <div className='slider-container '>



                    <div className='mainslider1 lg:margin-left:0px p-0 m-0 '>
                        <div className='ml-8 mr-8 mt-14'>

                            <img src="https://static.wixstatic.com/media/913019_23505c37dcaa418c924829114d2d9ca0~mv2_d_2500_1224_s_2.jpg/v1/fill/w_1655,h_1020,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_23505c37dcaa418c924829114d2d9ca0~mv2_d_2500_1224_s_2.jpg" alt="" />
                        </div>
                        {/* <div className='slide1 flex flex-col items-center justify-center min-h-screen p-4'>

                            <h1 className='text-3xl md:text-5xl lg:text-6xl  sm:pt-4 text-center font-serif text-blue-800 sm:text-4xl'>Spring Cutlery<br />Collection</h1>
                            <button className='px-6 py-2 bg-white text-black font-thin mt-6 border transition' onClick={shop}>Shop Now</button>
                        </div> */}
                        <div className="slide1 flex flex-col items-start justify-start min-h-screen p-4">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-left font-serif text-blue-800 mt-0">
                                Spring Cutlery <br className="hidden sm:block" /> Collection
                            </h1>
                            {/* <button
                                className="px-6 py-2 bg-white text-black font-thin mt-4 border border-gray-400 hover:bg-gray-100 "
                                onClick={shop}
                            >
                                Shop Now
                            </button> */}
                            <button className='px-6 py-2 bg-white text-black font-thin mt-6 border ' onClick={shop}>Shop Now</button>
                        </div>




                    </div>




                </div>

            </div>

            <Card />

            <Footer />

        </>
    );
}



export default Home
