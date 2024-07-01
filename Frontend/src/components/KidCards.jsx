import React, { useContext } from 'react'
import { Shoplist } from '../store/store-list';
import Card from './Card';

function KidCards() {
  const { kidslist } = useContext(Shoplist);
  return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mx-10'>
        {kidslist.map((product, index) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
  )
}

export default KidCards