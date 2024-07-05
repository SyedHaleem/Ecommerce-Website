import React, { createContext, useReducer, useEffect } from 'react';
import { fetchProducts } from '../service/api';

// Initial state for the shoplist context
const initialState = {
  menslist: [],
  womenslist: [],
  kidslist: [],
  cart: []
};

// Reducer function to manage state updates
const shoplistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const itemExists = state.cart.some((item) => item.id === action.payload.id);
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
      try {
        const mens = await fetchProducts('mens');
        const womens = await fetchProducts('womens');
        const kids = await fetchProducts('kids');
        dispatch({
          type: 'FETCH_PRODUCTS',
          payload: {
            menslist: mens,
            womenslist: womens,
            kidslist: kids
          }
        });
      } catch (error) {
        console.error("Error fetching products: ", error);
      }
    };
    getProducts();
  }, [dispatch]);

  return (
    <Shoplist.Provider value={{ ...state, dispatch }}>
      {children}
    </Shoplist.Provider>
  );
};
