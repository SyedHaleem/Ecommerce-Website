import React from 'react'
import KidCards from '../components/KidCards'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function KidPage() {
  return (
    <>
    <Navbar/>
    <div className='min-h-screen mt-20'> 
    <KidCards/>
    </div>
    <Footer/>
    </>
  )
}

export default KidPage