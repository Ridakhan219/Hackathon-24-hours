
import React from 'react'
import Navbar from './components/navbar/page'
import Hero from './components/hero'
import BrowseTheRange from './components/browse the range/page'
import OurProducts from './components/our products/page'
import Rooms from './components/rooms'
import Furniture from './components/furniture'
import Footer from './components/footer'


const page = () => {
  return (
    <div>
    <Navbar/>
    <Hero/>
    <BrowseTheRange/>
    <OurProducts/>
    <Rooms/>
    <Furniture/>
    <Footer/>
  
  </div>
  )
}

export default page