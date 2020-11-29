import React, { useState, useContext, useEffect } from 'react';
import ProductContext from '../../context/product/productContext';

const ProductForm = () => {
  const productContext = useContext(ProductContext);

  const { addProduct, updateProduct, current, clearCurrent } = productContext;
  useEffect(() => {
    if (current != null) {
      setProduct(current);
    } else {
      setProduct({
        name: '',
		description: '',
      });
    }
  }, [productContext, current]);

  const [product, setProduct] = useState({
    name: '',
	description: '',
  });

  const { name, description } = product;

  const onChange = (e) =>
    setProduct({ ...product, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log('PRODUCT', product);
    if (current === null) {
      addProduct(product);
    } else {
      updateProduct(product);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Product' : 'Add Product'}
      </h2>
      <input
        type='text'
        placeholder='Product Name'
        name='name'
        value={name}
        onChange={onChange}
      />

	  <textarea
        
		rows="4"
		cols="50"
        placeholder='Description'
        name='description'
        value={description}
        onChange={onChange}
      />
      
      <div>
        <input
          type='submit'
          value={current ? 'Update Product' : 'Add Product'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ProductForm;
