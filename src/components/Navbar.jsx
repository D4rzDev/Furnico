import React from 'react'
import { FiShoppingBag, FiMenu, FiX, FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react'
import { useCart } from '@/context/CartContext';
import { MdDelete } from "react-icons/md";

const Navbar = () => {
    const {cart} = useCart();
    const[nav, setNav] = useState();
    const [login, setLogin] = useState();
    const [ scart, setScart] = useState();
    const {removeFromCart} = useCart();
    const { calculateTotalPrice } = useCart();

    const toogleNav = () => {
        setNav(!nav);
    }

    const toogleLogin = () => {
        setLogin(!login);
    }

    const toggleScart = () => {
        !setScart(!scart);
    }
  return (
    <nav className=' sticky top-0 z-[50]  py-4 bg-[#EEEEEE] lg:py-6'>
        <div className=' flex flex-row justify-between items-center px-6 md:px-10 lg:px-16'>
            <h1 className=' text-sm font-extrabold lg:text-lg'>FURNI<span className=' text-[#609382]'>CO</span></h1>
            <div className=' hidden  text-xs gap-4 lg:text-sm md:flex'>
                <a href="">Home</a>
                <a href="">Products</a>
                <a href="">Contact Us</a>

            </div>
            <div className=' flex flex-row justify-center items-center gap-4'>
                <div className=' flex' onClick={toggleScart}>
                    <FiShoppingBag size={20}/>
                    <div className=' absolute ml-2 bg-red-700 rounded-full h-3 w-3 text-[8px] text-center text-white'>{cart.length}</div>
                </div>
                <h1 onClick={toogleLogin} className=' hidden md:flex bg-black rounded-full px-8 py-3 text-white text-sm font-semibold' href="">Sign Up</h1>
                <div onClick={toogleNav} className=' md:hidden'>
                    {!nav ? <FiMenu size={20}/> : <FiX size={20}/> }
                </div>
                
            </div>
        </div>

        <div className={!nav ? 'hidden' : ' absolute top-0 right-0 bg-[#EEEEEE] h-screen w-[60%] p-6 md:w-[40%]'}>
            <div className=' flex flex-col gap-10'>
                <div onClick={toogleNav}>
                    <FiX size={20}/>
                </div>
              
                <div className=' flex flex-col text-sm font-normal gap-2'>
                    <a href="">Home</a>
                    <a href="">Shop</a>
                    <a href="">Contact</a>
                </div>

                <div className=' flex flex-col gap-2'>
                    <div onClick={toogleLogin} className=' border-2 border-[#609382] bg-[#609382] rounded-full text-white px-6 py-3 text-xs font-semibold text-center' href="">Sign Up</div>
                    <div className=' flex flex-row justify-center items-center gap-2'>
                        <div className=' border-t-[1px] border-black h-2 w-full'></div>
                        <p className=' text-[10px]'>or</p>
                        <div className=' border-t-[1px] border-black h-2 w-full'></div>

                    </div>
                    <div onClick={toogleLogin} className=' border-2 border-black rounded-full px-6 py-3 text-xs font-semibold text-center' href="">Log In</div>
                </div>
              
               
            </div>
        </div>

        <div onClick={toogleLogin} className={!login ? 'hidden' : ' fixed inset-0 top-5'}>
           
            <div className=' flex justify-center items-center'>
                <div className=' flex flex-col justify-center items-center gap-10 bg-[#EEEEEE] rounded-lg h-fit px-20 py-10'>
                    
                    <h1 className=' text-sm font-extrabold lg:text-lg'>FURNI<span className=' text-[#609382]'>CO</span></h1>
                    <div className=' flex flex-col w-full gap-4'>
                        <a className=' flex justify-center items-center gap-2 border-2 border-black rounded-full bg-black text-white w-full px-6 py-3 text-xs font-semibold text-center' href="">Sign Up with <FcGoogle size={20}/></a>
                        <div className=' flex flex-row justify-center items-center gap-2'>
                            <div className=' border-t-[1px] border-black h-2 w-full'></div>
                            <p className=' text-[10px]'>or</p>
                            <div className=' border-t-[1px] border-black h-2 w-full'></div>
                        </div>

                        <div className=' flex flex-col gap-6'>
                            <div className=' flex flex-col gap-2'>
                                <input className=' py-3 px-6 rounded-full text-xs' name='email' autoComplete='true' type="email" placeholder='Email' />
                                <input className=' py-3 px-6 rounded-full text-xs' name='password' type="password" placeholder='Password' />
                            </div>
                            <a className=' border-2 border-[#609382] bg-[#609382] rounded-full text-white px-6 py-3 text-xs font-semibold text-center' href="">Sign Up</a>
                        </div>

                        <a className=' text-[8px] text-center mt-16'>Already have an account ? Sign Up</a>
                    </div>
                </div>
            </div>
        </div>

        <div className={!scart ? 'hidden' : ' absolute h-screen w-screen top-0 right-0 bg-[#EEEEEE] p-6 md:w-[50%] lg:w-[30%]'}>
            <div className=' flex flex-col gap-6'>
                <div className=' flex flex-row justify-between'>
                    <div onClick={toggleScart}>
                        <FiChevronLeft size={20}/>
                    </div>
                    <div className=' flex flex-col justify-center items-center text-center'>
                        <h1 className=' text-xs font-bold'>Shopping Cart</h1>
                        <p className=' flex gap-1 text-[8px]'>Shipping Details <FiChevronRight size={10}/></p>
                    </div>
                    <h1 className=' text-xs font-bold'>Edit</h1>
                </div>

                <div className=' flex flex-col h-[500px] overflow-auto gap-2'>
                    {cart.map((product, index)=>(
                        <div key={index} className='flex flex-row justify-between items-center w-full bg-[#609382] p-4 rounded-lg'>
                            <button className=' h-3 w-3 rounded-full border-2 border-black'></button>
                            <div className=' flex justify-center items-center w-24 h-20'>
                                <img src={product.img} alt="" />
                            </div>

                            <div className=' flex flex-col gap-4'>
                                <div className=' flex justify-between'>
                                    <div className=' flex flex-col gap-2'>
                                        <h1 className=' text-xs font-bold w-32'>{product.name}</h1>
                                        <select className=' w-14 text-[7px] bg-black text-white rounded-full px-2 py-1' name="Colors" id="">
                                            <option value="">Red</option>
                                            <option value="">Black</option>
                                            <option value="">Blue</option>
                                        </select>
                                    </div>
                                    <div onClick={() => removeFromCart(index)}>
                                        <MdDelete size={15}/>
                                    </div>
                                    
                                </div>
                                <div className=' flex flex-row justify-center items-center gap-10'>
                                    <h1 className=' text-xs text-gray-700'>${product.price}</h1>
                                    <div className=' flex flex-row justify-center items-center'>
                                        <button className=' h-4 w-4 rounded-full bg-black text-center text-xs text-white'>-</button>
                                        <p className=' px-4 py-1 rounded-full bg-black text-[8px] text-white text-center'>{product.quantity}</p>
                                        <button className=' h-4 w-4 rounded-full bg-black text-center text-xs text-white'>+</button>
                                    </div>
                                </div>
                                
                            </div>
                        
                        </div>
                    ))}

                    
                </div>

                   
            </div>
             <div className=' sticky bottom-0 p-4 bg-[#EEEEEE]'>
                        <div className=' flex flex-row justify-between items-center'>
                            <div className=' flex flex-row justify-center items-center gap-1'>
                                <button className=' h-3 w-3 rounded-full border-2 border-black'></button>
                                <h1 className=' text-xs'>Select all</h1>
                            </div>

                            <div className=' flex flex-row justify-center items-center gap-2'>
                                <h1 className=' text-sm text-gray-700'>${calculateTotalPrice()}</h1>
                                <button className=' px-6 py-2 rounded-full bg-black text-white text-sm'>Checkout</button>
                            </div>
                        </div>
                    </div>

        </div>
        
        
    </nav>
  )
}

export default React.memo(Navbar);