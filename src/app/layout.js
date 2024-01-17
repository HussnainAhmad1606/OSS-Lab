import { Inter } from 'next/font/google'
import '@/css/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })
import { Analytics } from '@vercel/analytics/react';
export const metadata = {
  title: "Welcome to OSS Lab",
  description: "An opportunity for your next open source project",
  openGraph: {
    title: 'Welcome to OSS Lab',
  description: 'An opportunity for your next open source project',
    url: 'https://nextjs.org',
    siteName: 'Next.js',
    images: [
      {
        url: 'https://oss-lab.vercel.app/api/og',
        width: 800,
        height: 600,
        alt: "OSS Lab"
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
        <Analytics />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
