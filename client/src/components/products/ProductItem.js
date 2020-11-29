import React, { useContext } from 'react';
import ProductContext from '../../context/product/productContext';

const ProductItem = ({ product }) => {
  const productContext = useContext(ProductContext);
  const { deleteProduct, setCurrent, clearCurrent } = productContext;

  const { _id, name, description} = product;

  const onDelete = () => {
    deleteProduct(_id);
    clearCurrent();
  };

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left' >
          {name}{' '}
      </h3>
      <ul className='list'>
        
		{description && (
          <li>
            <i className='fas fa-info-circle'> {description}</i>
          </li>
        )}
       
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm far fa-edit'
          onClick={() => setCurrent(product)}
        >
        </button>
        <button className='btn btn-danger btn-sm far fa-trash-alt' onClick={onDelete}>
        </button>
      </p>
    </div>
  );
};

export default ProductItem;
