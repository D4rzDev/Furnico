import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import Image from 'next/image';

const Product = ({product}) => {

    const { addToCart} = useCart();

    const data = [
        { id: 1, name: 'Sofa, red 2-seat sofa', price: '499.59', img:'/img/product1.png' },
        { id: 2, name: 'Bar stool ', price: '179.29', img:'/img/product2.png' },
        { id: 3, name: 'Light fixture Lamp', price: '79.59', img:'/img/product3.png' },
        { id: 4, name: 'Black table', price: '249.59', img:'/img/product4.png' },
        { id: 5, name: 'Premium Double Size Bed', price: '1299.59', img:'/img/product5.png' },
        { id: 6, name: 'Premium Double Size Sofa', price: '589.79', img:'/img/product6.png' },
        { id: 7, name: 'Premium Furniture Double Size Sofa', price: '867.29', img:'/img/product7.png' },
        { id: 8, name: 'Glass Table Premium', price: '389.29', img:'/img/product8.png' },
        { id: 9, name: 'Wooden Chair', price: '149.69', img:'/img/product9.png' },
    ];

  return (
    <div className=' mt-10' id='product'>
        <div className=' flex flex-col px-6 gap-8 lg:px-14'>
            <div className=' flex flex-wrap text-[10px] font-medium gap-2'>
                <a className=' border-2 border-gray-300 px-6 py-2 rounded-full hover:text-white hover:bg-black hover:border-black' href="">Chair</a>
                <a className=' border-2 border-gray-300 px-6 py-2 rounded-full hover:text-white hover:bg-black hover:border-black' href="">Table</a>
                <a className=' border-2 border-gray-300 px-6 py-2 rounded-full hover:text-white hover:bg-black hover:border-black' href="">Bed</a>
                <a className=' border-2 border-gray-300 px-6 py-2 rounded-full hover:text-white hover:bg-black hover:border-black' href="">Stool</a>
                <a className=' border-2 border-gray-300 px-6 py-2 rounded-full hover:text-white hover:bg-black hover:border-black' href="">Lamp</a>
            </div>

            <div className=' flex flex-wrap justify-center items-center gap-4'>
                { data.map(( product, index)=>(
                    <div className=' flex flex-col h-fit w-[100%] md:w-[48%] lg:w-[30%] bg-[#9FB4A7] rounded-lg p-4 gap-10' key={index}>
                        <div className=' flex flex-wrap text-[8px] font-medium gap-2'>
                            <a className=' border-2 border-gray-500 px-6 py-1 rounded-full' href="">Black</a>
                            <a className=' border-2 border-gray-500 px-6 py-1 rounded-full' href="">Blue</a>
                            <a className=' border-2 border-black text-white px-6 py-1 rounded-full bg-black' href="">Red</a>
                        </div>

                        <div className=' flex h-40 object-cover' >
                            <Image className=' object-contain' src={product.img} alt="" width={500} height={500} />
                        </div>
                        <div className=' flex flex-row justify-between items-center'>
                            <div className=' flex flex-col'>
                                <h1 className=' text-sm font-medium'>{product.name}</h1>
                                <h2 className=' text-gray-600'>${product.price}</h2>
                            </div>
                            <Link href={`/ProductDetails?id=${product.id}&image=${encodeURIComponent(product.img)}&name=${encodeURIComponent(product.name)}&price=${product.price}`} passHref >
                             <div className=' flex justify-center items-center h-10 w-10 bg-black rounded-full text-white' >
                                <FiArrowUpRight size={25}/>
                            </div>
                            </Link>
                          
                        </div>
                    </div>

                ))}
                
            </div>

        </div>
    </div>
  )
}

export default Product