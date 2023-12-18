import React from 'react'
import { FiArrowRightCircle } from "react-icons/fi";

const Hero = () => {
  return (
    <div className=' hero flex items-center lg:h-screen' id='hero'>
        <div className=' flex flex-col px-6 text-white gap-14 md:px-10 lg:px-14 lg:gap-20'>
            <div className=' flex flex-col gap-4'>
                <h1 className=' text-3xl font-bold w-[90%] md:text-5xl lg:text-6xl lg:w-[70%]'>Discover the Latest Furniture Trends and Styles</h1>
                <p className=' text-[10px] md:text-sm lg:text-lg '>Transforming spaces beautifully with quality furniture</p>
            </div>

            <div className=' flex flex-row items-center gap-2 text-sm bg-white px-6 py-2 rounded-full w-fit md:text-lg lg:text-xl lg:px-8 lg:py-4'>
                 <a className=' font-semibold text-black' href="">Shop Now</a>
                 <FiArrowRightCircle size={15} color='black'/>
            </div>
        </div>
    </div>
  )
}

export default Hero