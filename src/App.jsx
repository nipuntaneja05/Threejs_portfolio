import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Project from './sections/Project'
import Clients from './sections/Clients'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Experience from './sections/Experience'
// import { Analytics } from "@vercel/analytics/react"

const App = () => {
  return (
  <div> <main className="max-w-7xl mx-auto">
    <Navbar />
    <Hero />
    <About />
    <Project />
    {/* <Clients/> */}
    <Experience/>
    <Contact/>
    <Footer/>
   </main></div>
  )
}

export default App
