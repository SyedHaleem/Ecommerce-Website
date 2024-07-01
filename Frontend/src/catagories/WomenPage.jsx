import React from 'react'
import WomenCards from '../components/WomenCards'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function WomenPage() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen mt-20 '> 
    <WomenCards/>
    </div>
    <Footer/>
    </>
  )
}

export default WomenPage