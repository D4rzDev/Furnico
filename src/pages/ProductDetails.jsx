import React from 'react'
import Layout from '@/app/layout'
import { useRouter } from 'next/router'
import { useCart, showToast } from '@/context/CartContext'
import { useEffect, useState } from 'react'
import Loading from '@/components/Loading'
import { FiStar, FiPlus, FiArrowLeft} from 'react-icons/fi'
import Link from 'next/link'
import Image from 'next/image'


const Product = () => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();
    const { id, image, name, price} = router.query;
    const {addToCart} = useCart();

    const product = {
        id: id,
        name: name,
        price: parseFloat(price),
        img: image,
   
        };

    const handleAddToCart = () => {
        
        
        addToCart(product);
        console.log(product)
        showToast();
    }

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

  return (
        <Layout>
             {isLoading ? (
                
                <Loading/>
            ) : (
                <div className=' flex flex-col gap-6 p-6 md:flex-row'>
                    <Link href='/'><FiArrowLeft size={20}/></Link>
                    
                    <div className=' flex flex-col h-fit w-[100%] md:w-[90%] lg:w-[90%] bg-[#9FB4A7] rounded-lg p-4 gap-10'>
                        <div className=' flex flex-wrap text-[8px] font-medium gap-2'>
                            <a className=' border-2 border-gray-500 px-6 py-1 rounded-full' href="">Black</a>
                            <a className=' border-2 border-gray-500 px-6 py-1 rounded-full' href="">Blue</a>
                            <a className=' border-2 border-black text-white px-6 py-1 rounded-full bg-black' href="">Red</a>
                        </div>

                        <div className=' flex justify-center items-center ' >
                            <Image className=' object-contain md:h-[200px] lg:h-[300px]' src={image} alt="" width={500} height={500} />
                        </div>
                        <div className=' flex flex-row justify-between items-center'>
                            <div className=' flex flex-col'>
                                <h1 className=' text-lg font-medium'>{name}</h1>
                                <h2 className=' text-gray-600'>${price}</h2>
                            </div>
                            <div onClick={() => handleAddToCart(product)} className=' flex justify-center items-center h-10 w-10 bg-black rounded-full text-white' >
                                <FiPlus/>
                            </div>
                                
                        </div>
                    </div>

                    <div className=' flex flex-col gap-4'>
                        <div className=' flex flex-row text-xs font-semibold gap-4'>
                            <a href="">Description</a>
                            <a className=' underline' href="">Reviews</a>
                        </div>

                        <div className=' flex flex-col gap-2 h-[600px] overflow-auto md:h-[350px] lg:h-[450px]'>

                            <div className=' flex flex-row bg-[#9FB4A7] p-4 rounded-lg md:w-full'>
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

                            <div className=' flex flex-row bg-[#9FB4A7] p-4 rounded-lg md:w-full'>
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

                            <div className=' flex flex-row bg-[#9FB4A7] p-4 rounded-lg md:w-full'>
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

            )}
        
    </Layout>

  )
}

export default Product