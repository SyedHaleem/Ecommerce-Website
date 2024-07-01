import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Homee from './home/Homee';
import CartPage from './cart/CartPage';
import MenPage from './catagories/MenPage';
import WomenPage from './catagories/WomenPage';
import KidPage from './catagories/KidPage';
import Signup from './components/Signup';
import { ShopListProvider } from './store/store-list'; 

function App() {
  return (
    <div className='dark:bg-slate-900 dark:text-white'>
      <ShopListProvider>
        <Routes>
          <Route path='/' element={<Homee/>} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/mens' element={<MenPage />} />
          <Route path='/womens' element={<WomenPage />} />
          <Route path='/kids' element={<KidPage />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </ShopListProvider>
    </div>
  );
}

export default App;
