import React, { Fragment, useContext, useEffect } from 'react';
import AdminItem from './AdminItem';
import ProductContext from '../../context/product/productContext';

const Admins = () => {
  const productContext = useContext(ProductContext);

  const { products, allProducts } = productContext;

  useEffect(() => {
    allProducts();
    //eslint-disable-next-line
  }, []);

  if (products.length === 0) {
    return <h4>Please add a Product</h4>;
  }

  return (
    <div>
      {products.map((product) => (
        <AdminItem key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Admins;
