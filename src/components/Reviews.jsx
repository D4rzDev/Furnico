import React from 'react'
import { FiStar } from "react-icons/fi";

const Reviews = () => {
  return (
    <div className=' flex flex-col px-6 py-10 lg:px-14'>
        <div className=' flex flex-col gap-10'>
            <div className=' flex flex-col'>
                <h1 className=' text-lg font-bold'>Happy Costumer</h1>
                <p className=' text-xs'>Read what our customers have to say about us</p>
            </div>

            <div className='flex flex-wrap justify-center items-center gap-4'>
                <div className=' flex flex-row bg-[#9FB4A7] p-4 rounded-lg md:w-[60%]'>
                    <div className=' flex flex-col gap-6 w-full'>
                        <div className=' flex flex-row'>
                            <FiStar fill='black' size={15}/>
                            <FiStar fill='black' size={15}/>
                            <FiStar fill='black' size={15}/>
                            <FiStar fill='black' size={15}/>
                            <FiStar  size={15}/>
                        </div>
                        <p className=' text-xs'>Our experience with the company has been amazing. Their products are top-notch!</p>

                        <div className=' flex flex-row justify-between items-center'>
                            <div className=' flex flex-row justify-center items-center gap-2'>
                                <div className=' h-10 w-10 bg-gray-500 rounded-full'></div>
                                <div className=' flex flex-col'>
                                    <h1 className=' text-xs font-semibold'>Jhon Doe</h1>
                                    <h2 className=' text-[8px]'>Costumer</h2>
                                </div>
                            </div>
                            <p className=' text-xs'>Dec.15,2023</p>
                            
                        </div>
                    </div>
                </div>


                <div className=' flex flex-row bg-[#9FB4A7] p-4 rounded-lg md:w-[35%]'>
                    <div className=' flex flex-col gap-6 w-full'>
                        <div className=' flex flex-row'>
                            <FiStar fill='black' size={15}/>
                            <FiStar fill='black' size={15}/>
                            <FiStar fill='black' size={15}/>
                            <FiStar fill='black' size={15}/>
                            <FiStar  size={15}/>
                        </div>
                        <p className=' text-xs'>I highly recommend their furniture. It's stylish, durable, and affordable.</p>

                        <div className=' flex flex-row justify-between items-center'>
                            <div className=' flex flex-row justify-center items-center gap-2'>
                                <div className=' h-10 w-10 bg-gray-500 rounded-full'></div>
                                <div className=' flex flex-col'>
                                    <h1 className=' text-xs font-semibold'>Jhon Doe</h1>
                                    <h2 className=' text-[8px]'>Costumer</h2>
                                </div>
                            </div>
                            <p className=' text-xs'>Dec.15,2023</p>
                            
                        </div>
                    </div>
                </div>



                <div className=' flex flex-row bg-[#9FB4A7] p-4 rounded-lg w-full md:w-[35%]'>
                    <div className=' flex flex-col gap-6 w-full'>
                        <div className=' flex flex-row'>
                            <FiStar fill='black' size={15}/>
                            <FiStar fill='black' size={15}/>
                            <FiStar fill='black' size={15}/>
                            <FiStar fill='black' size={15}/>
                            <FiStar  size={15}/>
                        </div>
                        <p className=' text-xs'>I highly recommend their furniture. It's stylish, durable, and affordable.</p>

                        <div className=' flex flex-row justify-between items-center'>
                            <div className=' flex flex-row justify-center items-center gap-2'>
                                <div className=' h-10 w-10 bg-gray-500 rounded-full'></div>
                                <div className=' flex flex-col'>
                                    <h1 className=' text-xs font-semibold'>Jhon Doe</h1>
                                    <h2 className=' text-[8px]'>Costumer</h2>
                                </div>
                            </div>
                            <p className=' text-xs'>Dec.15,2023</p>
                            
                        </div>
                    </div>
                </div>



            <div className=' flex flex-row bg-[#9FB4A7] p-4 rounded-lg md:w-[60%]'>
                    <div className=' flex flex-col gap-6 w-full'>
                        <div className=' flex flex-row'>
                            <FiStar fill='black' size={15}/>
                            <FiStar fill='black' size={15}/>
                            <FiStar fill='black' size={15}/>
                            <FiStar fill='black' size={15}/>
                            <FiStar  size={15}/>
                        </div>
                        <p className=' text-xs'>Our experience with the company has been amazing. Their products are top-notch!</p>

                        <div className=' flex flex-row justify-between items-center'>
                            <div className=' flex flex-row justify-center items-center gap-2'>
                                <div className=' h-10 w-10 bg-gray-500 rounded-full'></div>
                                <div className=' flex flex-col'>
                                    <h1 className=' text-xs font-semibold'>Jhon Doe</h1>
                                    <h2 className=' text-[8px]'>Costumer</h2>
                                </div>
                            </div>
                            <p className=' text-xs'>Dec.15,2023</p>
                            
                        </div>
                    </div>
                </div>


            </div>
        </div>

    </div>
  )
}

export default Reviews