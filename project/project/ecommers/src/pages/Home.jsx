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
                        <div className='slide1 '>

                            <h1 className='text-6xl pt-10 font-serif text-blue-800 '>Spring Cutlery<br />Collection</h1>
                            <button className='px-4 p-2 bg-white text-black font-thin mt-4' onClick={shop}>Shop Now</button>
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
