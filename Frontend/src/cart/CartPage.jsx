import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cart from '../components/Cart';

function CartPage() {
  return (
    <>
      <Navbar />
      <div className='min-h-screen flex justify-center'>
        <Cart />
      </div>
      <Footer />
    </>
  );
}

export default CartPage;
