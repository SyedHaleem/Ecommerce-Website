// Card.jsx

import React, { useContext, useState } from 'react';
import StarRatings from 'react-star-ratings';
import { Shoplist } from '../store/store-list'; // Adjust the path as necessary

function Card({ product }) {
  const { dispatch } = useContext(Shoplist);
  const [isHovered, setIsHovered] = useState(false);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
  };

  const Truncate = (string, number) => {
    if (!string) {
      return null;
    }
    if (string.length <= number) {
      return string;
    }
    return string.slice(0, number) + '...';
  };

  const calculateDiscountedPrice = (price, discountRate) => {
    return (price - (price * discountRate) / 100).toFixed(2);
  };

  return (
    <div className="mt-10 w-[300px] mx-5">
      <div className="container mx-auto">
        <div
          className="bg-slate-50 shadow-md rounded-lg overflow-hidden p-4 relative transition-all duration-500 ease-in-out transform hover:scale-95 hover:shadow-[0px_0px_5px_5px_rgba(204,204,204,1)] dark:bg-slate-800 dark:text-white hover:dark:shadow-custom-slate"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {product.discountRate >= 0 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold py-1 px-2 rounded">
              {product.discountRate}% OFF
            </div>
          )}
          <img
            className="w-full h-48 object-contain"
            src={product.image}
            alt={product.title}
          />
          <div className="mt-4">
            <h5
              className="text-base font-bold"
              title={product.title.length >= 50 ? product.title : null}
            >
              {Truncate(product.title, 55)}
            </h5>
            <p className="mt-2 text-sm text-gray-400">
              {Truncate(product.description, 55)}
            </p>
            <div className="flex items-center mt-3">
              {product.discountRate >= 0 ? (
                <>
                  <p className="text-base font-bold text-red-600">
                    ${calculateDiscountedPrice(product.price, product.discountRate)}
                  </p>
                  <p className="text-sm text-gray-400 line-through ml-2">
                    ${product.price}
                  </p>
                </>
              ) : (
                <p className="text-base font-bold text-red-600">
                  ${product.price}
                </p>
              )}
            </div>
            <div className="flex items-center mt-2">
              <StarRatings
                rating={product.rating}
                starRatedColor="#ffc107"
                starEmptyColor="#e4e5e9"
                starDimension="20px"
                starSpacing="1px"
              />
              <button
                onClick={() => addToCart(product)}
                className={`bg-green-500 hover:bg-green-700 text-white py-2 px-4 border rounded ml-7 ${
                  isHovered ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-700 ease-in-out transition dark:border-green-700`}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
