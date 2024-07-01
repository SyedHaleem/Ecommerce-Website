import React, { useContext, useEffect } from 'react';
import { Shoplist } from '../store/store-list'; // Adjust the path as necessary
import { FaTrashAlt, FaSadTear } from 'react-icons/fa';

const Cart = () => {
  const { cart, dispatch } = useContext(Shoplist);

  // Function to update quantity
  const updateQuantity = (index, newQuantity) => {
    if (newQuantity <= 0) {
      return;
    }
    dispatch({ type: 'UPDATE_QUANTITY', payload: { index, quantity: newQuantity } });
  };

  // Function to remove item from cart
  const removeItem = (index) => {
    dispatch({ type: 'REMOVE_ITEM', payload: index });
  };

  // Function to calculate subtotal
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => {
      if (item.discountRate >= 0) {
        return total + (item.price - (item.price * item.discountRate / 100)) * item.quantity;
      } else {
        return total + item.price * item.quantity;
      }
    }, 0);
  };

  // Function to calculate total (assuming no shipping cost for this example)
  const calculateTotal = () => {
    return calculateSubtotal();
  };

  useEffect(() => {
    // Scroll to the top of the cart section on component mount
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="flex justify-center my-40 px-5 ">
      <section className="w-full max-w-[1300px] grid grid-cols-1 lg:grid-cols-3 gap-3 pb-10 ">
        {/* Cart items */}
        <div className="lg:col-span-2 overflow-y-auto max-h-[600px] order-2 lg:order-1 ">
          <table className="table-fixed w-full ">
            <thead className="h-16 bg-neutral-100 dark:bg-slate-700">
              <tr>
                <th className="w-2/5">ITEM</th>
                <th className="w-1/5">PRICE</th>
                <th className="w-1/5">QUANTITY</th>
                <th className="w-1/5">TOTAL</th>
                <th className="w-1/5"></th>
              </tr>
            </thead>
            <tbody className=''>
              {cart.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-10 ">
                    <h1 className="text-2xl m-20 flex items-center justify-center">
                      <FaSadTear className="mr-2 text-yellow-500" /> Cart is Empty
                    </h1>
                  </td>
                </tr>
              ) : (
                cart.map((item, index) => (
                  <tr key={index} className="h-[100px] border ">
                    <td className="align-middle">
                      <div className="flex">
                        <img
                          className="w-[90px] border-r"
                          src={item.image}
                          alt={item.title}
                        />
                        <div className="ml-3 flex flex-col justify-center">
                          <p className="text-md font-bold">{item.title}</p>
                        </div>
                      </div>
                    </td>
                    <td className="mx-auto text-center">
                    {item.discountRate > 0 ? (
                    <p className="text-gray-500">${(item.price - (item.price * item.discountRate / 100)).toFixed(2)}</p>
                    ) : (
                   <p className="text-gray-500">${item.price}</p>
                    )}
                    </td>
                    <td className="align-middle">
                      <div className="flex items-center justify-center">
                        <button
                          className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-red-500 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500 bg-neutral:100 rounded-tl rounded-bl"
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                        >
                          −
                        </button>
                        <div className="flex h-8 w-8 cursor-text items-center justify-center border-t border-b active:ring-gray-500 ">
                          {item.quantity}
                        </div>
                        <button
                          className="flex h-8 w-8 cursor-pointer items-center justify-center border duration-100 hover:bg-green-500 focus:ring-2 focus:ring-gray-500 active:ring-2 active:ring-gray-500 bg-neutral-100 rounded-tr rounded-br"
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="mx-auto text-center text-red-600">
                    {item.discountRate >= 0 ? (
                    <p>${((item.price - (item.price * item.discountRate / 100)) * item.quantity).toFixed(2)}</p>
                    ) : (
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                    )}
                    </td>
                    <td className="align-middle">
                      <FaTrashAlt
                        onClick={() => removeItem(index)}
                        className="m-0 h-5 w-5 cursor-pointer hover:text-red-500"
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="ml-0 lg:ml-10 w-full lg:w-[350px] order-2 lg:order-2 mb-10 lg:mb-0">
          <div className="border py-5 px-4 shadow-md">
            <p className="font-bold text-lg mb-4">ORDER SUMMARY</p>
            <div className="flex justify-between border-b py-2">
              <p>Subtotal:</p>
              <p>${calculateSubtotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-between border-b py-2">
              <p>Shipping:</p>
              <p className='text-red-400'>Free</p>
            </div>
            <div className="flex justify-between py-2">
              <p className="font-bold">Total:</p>
              <p className='text-violet-700'>${calculateTotal().toFixed(2)}</p>
            </div>
            <button className="w-full bg-violet-800 hover:bg-violet-900 duration-300 ease=in-out px-5 py-2 text-white rounded-md mt-4">
              Proceed to checkout
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;
