import React from "react";

const cardData = [
  { img: "https://static.wixstatic.com/media/913019_5b553363bf6c4b5fa1798811e92184b8~mv2_d_1760_1337_s_2.jpg/v1/fill/w_848,h_495,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_5b553363bf6c4b5fa1798811e92184b8~mv2_d_1760_1337_s_2.jpg", title: "Decor & Living" },
  { img: "https://static.wixstatic.com/media/913019_ce2cc75526c9474db2544b923aa0b19b~mv2_d_4460_2973_s_4_2.jpg/v1/fill/w_848,h_495,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_ce2cc75526c9474db2544b923aa0b19b~mv2_d_4460_2973_s_4_2.jpg", title: "Bedroom" },
  { img: "https://static.wixstatic.com/media/913019_682059149a3b40a2ae27be70668e3211~mv2_d_3744_4019_s_4_2.jpg/v1/fill/w_848,h_495,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_682059149a3b40a2ae27be70668e3211~mv2_d_3744_4019_s_4_2.jpg", title: "Kitchen" },
  { img: "https://static.wixstatic.com/media/913019_00b59b5d428640ba9d0a8db0c64759cc~mv2_d_2546_1493_s_2.jpg/v1/fill/w_848,h_495,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/913019_00b59b5d428640ba9d0a8db0c64759cc~mv2_d_2546_1493_s_2.jpg", title: "Bathroom" }
];

const Card = () => {
  return (
    <>
      <div className="p-4">
        <h1 className="text-blue-800 text-center text-xl sm:text-xl md:text-3xl lg:text-4xl sm:mt-8 font-serif mt-8 max-w-[90%] mx-auto">Defining Home Styling Since 1975</h1>
      </div>
      <div className="grid grid-cols-2 gap-4 p-4">
        {cardData.map((item, index) => (
          <div key={index} className=" p-4  ">
            <img src={item.img} alt={item.title} className="w-full h-auto object-cover " />
            <h2 className="text-lg font-serif text-center mt-4 text-blue-800 font-bold sm:text-xl ">{item.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;
