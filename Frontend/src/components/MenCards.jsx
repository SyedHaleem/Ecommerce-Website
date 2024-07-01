import React, { useContext } from 'react';
import { Shoplist } from '../store/store-list'; 
import Card from './Card';

function MenCards() {
  const { menslist } = useContext(Shoplist);

  return (
    <div className='flex justify-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-3'>
        {menslist.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default MenCards;
