"use client"
import NavBar from '@/components/NavBar/NavBar'
import './globals.css'
import type { Metadata } from 'next'

import Footer from '@/components/Footer/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">    
      <body>
        <div className=' sticky top-0 z-10'>
          <NavBar></NavBar>
        </div>
        <div>
          {children}
        </div>
        
        <div className=' mt-10'>
          <Footer></Footer>
        </div>
        </body>
    </html>
  )
}
