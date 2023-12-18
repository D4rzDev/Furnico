import React from 'react'
import { FiArrowRightCircle} from 'react-icons/fi'

const Cta = () => {
  return (
    <div className=' cta mt-10 h-fit'>
        <div className=' flex flex-col px-6 py-10 gap-10 lg:px-14 lg:py-20'>
            <div className=' flex flex-col gap-2'>
                <h1 className=' text-2xl font-bold line-clamp-2 text-white md:text-4xl lg:text-5xl'>Discover our latest furniture collection</h1>
                <p className=' text-[10px] text-white md:text-xs lg:text-sm'>Explore our limited-time offers and discounts</p>
            </div>
           
            <div className=' flex flex-row gap-2'>
                 <div className=' flex flex-row items-center gap-2 text-xs bg-white px-6 py-2 rounded-full w-fit lg:text-lg'>
                    <a className=' font-semibold text-black' href="">Shop Now</a>
                    <FiArrowRightCircle size={15} color='black'/>
                </div>

                <div className=' flex flex-row items-center gap-2 text-xs border-2 border-white px-6 py-2 rounded-full w-fit lg:text-lg'>
                    <a className=' font-semibold text-white' href="">Sign Up</a>
                   
                </div>

            </div>

        </div>
    
    </div>
  )
}

export default Cta