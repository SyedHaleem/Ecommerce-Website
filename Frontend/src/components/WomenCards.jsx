import React, { useContext } from 'react';
import Card from './Card';
import { Shoplist } from '../store/store-list';

function WomenCards() {
  const { womenslist } = useContext(Shoplist);
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-10'>
      {womenslist.map((product, index) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
}

export default WomenCards;
