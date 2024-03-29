import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Empowering Contributions, Building Excellence</h1>
      <p className="mb-5">Unleashing the Power of Open Source Collaboration.</p>
      <Link href={"/projects"} className="btn btn-primary">Get Started</Link>
    </div>
  </div>
</div>
  )
}

export default HeroSection