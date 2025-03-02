import React from 'react'
import { GoStarFill } from "react-icons/go";

const Clients = ({ heading, text, name, meta, image, title, price }) => {
    return (
        <div className="flex justify-center">
            <div className="bg-white w-[400px] h-[396px] pt-11 pr-9 pb-6 pl-9 rounded-lg ml-4 border border-solid border-gray-300">

                <div className="flex gap-2 mb-4 text-yellow-500">
                    <div className='flex gap-2 mb-4'>
                        <GoStarFill style={{ color: "var(--primary-color)" }} />
                        <GoStarFill style={{ color: "var(--primary-color)" }} />
                        <GoStarFill style={{ color: "var(--primary-color)" }} />
                        <GoStarFill style={{ color: "var(--primary-color)" }} />
                        <GoStarFill style={{ color: "var(--primary-color)" }} />
                    </div>
                </div>

          
                <div className="text-xl font-semibold mb-2">{heading}</div>
                <div className="text-[18px] mb-6">{text}</div>

         
                <div className="mb-8">
                    <div className="font-semibold">{name}</div>
                    <div className="text-gray-500">{meta}</div>
                </div>

          
                <div className="border-t border-gray-300"></div>

         
                <div className="pt-6 flex items-center">
                    <img src={image} alt={title} className="h-16 w-16 mb-24 rounded-full" />
                    <div className="px-6">
                        <p className="mb-1.5">{title}</p>
                        <div className="font-semibold ">{price}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clients
