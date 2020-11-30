olumideolaolukoyenikan
import React, { useContext } from 'react';
import ProductContext from '../../context/product/productContext';
import ProductForm from './ProductForm';
import Table from 'react-bootstrap/Table';


const ProductItem = ({ product }) => {
  const productContext = useContext(ProductContext);
  const { deleteProduct, setCurrent, clearCurrent } = productContext;

  const { _id, name, description} = product;

  const onDelete = () => {
    deleteProduct(_id);
    clearCurrent();
  };
  
  const onEdit = () => {
	setCurrent(product);
  };

  return (
  
  <div>
  
  <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Product Name</th>
      <th>Product Description</th>
      <th>Options</th>
    </tr>
  </thead>
  <tbody>
    <tr>
		<td></td>
      <td><h3 className='text-primary text-left' >
          {name}{' '}
      </h3> </td>
      <td>{description && (
          <li>
             {description}
          </li>
        )}</td>
      
      <td>  <p>
        <button
          className='btn btn-dark btn-sm far fa-edit'
          onClick={onEdit}
        >
        </button>
        <button className='btn btn-danger btn-sm far fa-trash-alt' onClick={onDelete}>
        </button>
      </p></td>
    </tr>
	</tbody>
</Table>
  
  
    </div>
  );
};

export default ProductItem;
