import React, { createContext, useReducer, useEffect } from 'react';
import menslistData from '../../public/menslist.json'; // Adjust paths as necessary
import womenslistData from '../../public/womenslist.json';
import kidslistData from '../../public/kidslist.json';
import { fetchProducts, createProduct, updateProduct, deleteProduct } from '../service/api';

// Initial state for the shoplist context
const initialState = {
  menslist: menslistData,
  womenslist: womenslistData,
  kidslist: kidslistData,
  cart: []
};

// Reducer function to manage state updates
const shoplistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const itemExists = state.cart.some(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        return state;
      }
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart: state.cart.map((item, index) =>
          index === action.payload.index ? { ...item, quantity: action.payload.quantity } : item
        )
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        cart: state.cart.filter((item, index) => index !== action.payload)
      };
    case 'FETCH_PRODUCTS':
      return {
        ...state,
        menslist: action.payload.menslist,
        womenslist: action.payload.womenslist,
        kidslist: action.payload.kidslist
      };
    default:
      return state;
  }
};

// Create the context
export const Shoplist = createContext();

// Shoplist provider component
export const ShopListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(shoplistReducer, initialState);

  useEffect(() => {
    const getProducts = async () => {
      const mens = await fetchProducts();
      const womens = await fetchProducts();
      const kids = await fetchProducts();
      dispatch({ type: 'FETCH_PRODUCTS', payload: { menslist: mens.data, womenslist: womens.data, kidslist: kids.data } });
    };
    getProducts();
  }, [dispatch]);

  return (
    <Shoplist.Provider value={{ ...state, dispatch }}>
      {children}
    </Shoplist.Provider>
  );
};
