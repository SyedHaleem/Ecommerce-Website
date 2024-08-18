import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const fetchProducts = async (category) => {
  try {
    console.log(`Fetching products for category: ${category}`);
    const response = await API.get(`/products/${category}`);
    console.log(`Data received for ${category}:`, response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching products for ${category}:`, error);
    throw error;
  }
};

// export const createProduct = async (newProduct) => {
//   try {
//     const response = await API.post('/products', newProduct);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const updateProduct = async (id, updatedProduct) => {
//   try {
//     const response = await API.put(`/products/${id}`, updatedProduct);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const deleteProduct = async (id) => {
//   try {
//     const response = await API.delete(`/products/${id}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

export const registerUser = async (formData) => {
  try {
    const response = await API.post('/auth/register', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await API.post('/auth/login', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
