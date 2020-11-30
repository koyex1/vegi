import React, { useReducer } from 'react';
import axios from 'axios';
import ProductContext from './productContext';
import productReducer from './productReducer';
import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  ALL_PRODUCTS,
  SET_CURRENT,
  CLEAR_CURRENT,
  CLEAR_PRODUCTS,
  UPDATE_PRODUCT,
  PRODUCT_ERROR,
} from '../types';

const ProductState = (props) => {
  const initialState = {
    products: [],
    current: null,
    error: null,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  //Get Products
  const getProducts = async () => {
    try {
      const res = await axios.get('/api/products');
      //console.log('RESPONSE', res);

      dispatch({ type: GET_PRODUCTS, payload: res.data });
    } catch (error) {
      dispatch({ type: PRODUCT_ERROR, payload: error.response.msg });
    }
  };
  
    //All Products
  const allProducts = async () => {
    try {
      const res = await axios.get('/api/products/all');
      //console.log('RESPONSE', res);

      dispatch({ type: ALL_PRODUCTS, payload: res.data });
    } catch (error) {
      dispatch({ type: PRODUCT_ERROR, payload: error.response.msg });
    }
  };

  // Add Product
  const addProduct = async (product) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.post('/api/products', product, config);
      //console.log('RESPONSE', res);

      dispatch({ type: ADD_PRODUCT, payload: res.data });
    } catch (error) {
      dispatch({ type: PRODUCT_ERROR, payload: error.response.msg });
    }
  };

  // Update Product
  const updateProduct = async (product) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await axios.put(
        `/api/products/${product._id}`,
        product,
        config
      );
      dispatch({ type: UPDATE_PRODUCT, payload: res.data });
    } catch (error) {
      dispatch({ type: PRODUCT_ERROR, payload: error.response.msg });
    }
  };

  // Delete Product
  const deleteProduct = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
      dispatch({ type: DELETE_PRODUCT, payload: id });
    } catch (error) {
      dispatch({ type: PRODUCT_ERROR, payload: error.response.msg });
    }
  };

  // Clear Products
  const clearProducts = () => {
    dispatch({ type: CLEAR_PRODUCTS });
  };

  // Set Current Product
  const setCurrent = (product) => {
    dispatch({ type: SET_CURRENT, payload: product });
  };

  // Clear Current Product
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  return (
    <ProductContext.Provider
      value={{
        products: state.products,
        current: state.current,
        error: state.error,
        addProduct,
        deleteProduct,
        updateProduct,
        setCurrent,
        clearCurrent,
        getProducts,
		allProducts,
        clearProducts,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
