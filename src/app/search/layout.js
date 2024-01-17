import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Search your next project - OSS Lab',
  description: 'Marketplace for your next open source project',
}

export default function RootLayout({ children }) {
  return (
   <>
        {children}
    </>
  )
}
