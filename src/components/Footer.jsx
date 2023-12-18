import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=' p-6 mt-40 md:px-16'>
        <div className=' flex flex-col gap-4 md:flex-row md:justify-between'>
            <h1 className=' text-lg font-extrabold'>FURNI<span className=' text-[#609382]'>CO</span></h1>

            <div className=' flex flex-col md:flex-row gap-10'>
                <div className=' flex flex-col text-xs gap-2'>
                    <h1 className=' text-sm font-semibold'>About Us</h1>
                    <a href="">Shop</a>
                    <a href="">Contact Us</a>
                    <a href="">FAQ</a>
                    <a href="">Shipping</a>
                    <a href="">Returns</a>
                </div>

                <div className=' flex flex-col text-xs gap-2'>
                    <h1 className=' text-sm font-semibold'>Blog</h1>
                    <a href="">Costumer Support</a>
                    <a href="">Track Order</a>
                    <a href="">Privacy Policy</a>
                    <a href="">Terms of Service</a>
                    <a href="">Cookie Setting</a>
                </div>

                <div className=' flex flex-col text-xs gap-2'>
                    <h1 className=' text-sm font-semibold'>Social Media</h1>
                    <a href="">Facebook</a>
                    <a href="">Instagram</a>
                    <a href="">Twitter</a>
                    <a href="">LinkedIn</a>
                    <a href="">Pinterest</a>
                </div>
            </div>

            <div className=' flex flex-col text-xs gap-2 w-[30%]'>
                <h1 className=' text-sm font-semibold'>Subscribe</h1>
                <a href="">Stay connected with us and receive updates on new products.</a>
                <div className=' flex flex-row gap-2 md:flex-col'>
                    <input className=' px-4 py-2 rounded-full' type='text' placeholder=' Email'/>
                    <button className=' bg-black rounded-full w-fit text-white px-6 py-2'>Submit</button>
                </div>
                <a href="">By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</a>
            </div>
        </div>

        <div className=" border-t-2 border-black mt-10 py-4">
                <div className=' flex flex-col justify-between text-[10px] gap-4 md:flex-row'>
                    <p>© 2023 Darel Honrejas. All rights reserved.</p>
                    <div className=' flex flex-col gap-2 md:flex-row'>
                        <a href="">Privacy Policy</a>
                        <a href="">Terms of Service</a>
                        <a href="">Cookie Setting</a>
                    </div>

                    <div className=' flex flex-row gap-2 text-sm'>
                        <FaFacebookF/>
                        <FaInstagram/>
                        <FaTwitter/>
                        <FaLinkedin/>
                        <FaPinterest/>
                    </div>
                </div>
            </div>
    </footer>
  )
}

export default React.memo(Footer);