olumideolaolukoyenikan
import React, { Fragment, useContext, useEffect } from 'react';
import ProductItem from './ProductItem';
import ProductContext from '../../context/product/productContext';

const Products = () => {
  const productContext = useContext(ProductContext);

  const { products, getProducts } = productContext;

  useEffect(() => {
    getProducts();
    //eslint-disable-next-line
  }, []);

  if (products.length === 0) {
    return <h4>Please add a Product</h4>;
  }

  return (
    <div>
      {products.map((product) => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
