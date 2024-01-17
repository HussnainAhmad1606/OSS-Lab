import { Inter } from 'next/font/google'
import '@/css/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  openGraph: {
    title: 'SOS Lab',
  description: 'Marketplace for your next open source project',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: '/api/og',
        width: 800,
        height: 600,
        alt: "SOS Lab"
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en">
      <body className={inter.className}>
        <Navbar/>
        
        {children}
        <Footer/>
        </body>
    </html>
  )
}
