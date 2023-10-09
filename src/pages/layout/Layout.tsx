import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import { useRouter } from "next/router";
function Layout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
  return (
    <div>
        <Nav/>
        <main className="flex h-full min-h-screen flex-col items-center bg-gradient-to-bl from-destructive-8 to-white">
        {children}
      </main>
        <Footer/>    
    </div>
  )
}

export default Layout