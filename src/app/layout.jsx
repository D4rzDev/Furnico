"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { CartProvider } from '@/context/CartContext'
import Footer from '@/components/Footer'
import Toast from '@/components/Toast'


const lexend =Inter({ subsets: ['latin'] })


export default function Layout({ children }) {
  
  return (
    <div>
        <Navbar />
        <Toast/>
        {
          children
        }
        <Footer />
    </div>
  )
}
