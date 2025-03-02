import React from 'react'
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import phone1 from '../assets/phone1.png'
import phone2 from '../assets/phone2.jpg'
import switch1 from '../assets/switch1.png'
import switch2 from '../assets/switch2.png'
import buds1 from '../assets/buds1.png'
import buds2 from '../assets/buds2.png'
import headphone1 from '../assets/headphone1.png'
import headphone2 from '../assets/headphone2.png'
import watch1 from '../assets/watch1.jpg'
import watch2 from '../assets/watch2.jpg'
import smtwatch1 from '../assets/smtwatch1.jpg'
import smtwatch2 from '../assets/smtwatch2.jpg'

const Trending = () => { 
    const settings = { 
        dots: true, 
        speed: 500, 
        slidesToShow: 4, 
        slidesToScroll: 4, 
        infinite: true, 
    }; 
 
    const products = [ 
        { img1: phone1, img2: phone2, title: "UltraGlass 2 Treated Screen Protectore for iphone 15 Pro", price: "$99.99", className:"pt-2"}, 
        { img1: switch1, img2: switch2, title: "Smart Light Switch with Thred", price: "$49.99",className:"pt-2" }, 
        { img1: buds1, img2: buds2, title: "SoundForm Rise", price: "$99.99" }, 
        { img1: headphone1, img2: headphone2, title: "Wireless on-Ear Headphones for kids", price: "$99.99" }, 
        { img1: watch1, img2: watch2, title: "3-in-1 Wireless Charger with official MagSafe Charging 15W", price: "$99.99" }, 
        { img1: smtwatch1, img2: smtwatch2, title: "3-in-1 Wireless Charger For Apple Device", price: "$99.99" }, 
    ]; 
 
    return ( 
        <div className="main-container"> 
            <h1 className="text-center text-4xl mt-20 ">Trending Product</h1> 
            <Slider {...settings}> 
                {products.map((product, index) => ( 
                    <div className="list-item mt-12 " key={index}> 
                        <div className="list-img"> 
                            <img src={product.img1} alt={product.title} /> 
                            <img src={product.img2} alt="" className="rear" /> 
                        </div> 
                        <div className="list-info"> 
                            <h4 className=''>{product.title}</h4> 
                            <p className='text-bold text-[14px] '>Price: {product.price}</p> 
                          
                        </div> 
                    </div> 
                ))} 
            </Slider> 
        </div> 
    ); 
}; 
 

export default Trending
