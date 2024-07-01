import React from 'react'
import MenCards from '../components/MenCards'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MenPage() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen mt-20'> 
    <MenCards/>
    </div>
    <Footer/>
    </>
  )
}

export default MenPage