import { Inter } from 'next/font/google'
import '@/css/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({ children }) {
  return (
   <>
        {children}
    </>
  )
}
