olumideolaolukoyenikan
import React, { useContext, useEffect } from 'react';
import Products from '../products/Products';
import ProductForm from '../products/ProductForm';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div >
      <div>
        <ProductForm />
      </div>
      <div>
        <Products />
      </div>
    </div>
  );
};

export default Home;
