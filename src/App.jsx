import React, { useEffect, useRef, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import FeaturedProject from './components/FeaturedProject'
import Projects from './components/Projects'
import LeetCode from './components/LeetCode'
import GitHub from './components/GitHub'
import Education from './components/Education'
import Leadership from './components/Leadership'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorSpotlight from './components/CursorSpotlight'
import ParticleBackground from './components/ParticleBackground'

export default function App() {
  return (
    <div className="relative bg-bg noise-bg min-h-screen overflow-x-hidden">
      <ParticleBackground />
      <CursorSpotlight />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <FeaturedProject />
        <Projects />
        <LeetCode />
        <GitHub />
        <Education />
        <Leadership />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
