olumideolaolukoyenikan
import React, { Fragment, useContext, useEffect } from 'react';
import { Link ,Redirect} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ProductContext from '../../context/product/productContext';

const Navbar = (props) => {
  const authContext = useContext(AuthContext);
  const productContext = useContext(ProductContext);

  const { isAuthenticated, user, logout, loadUser } = authContext;
  const { clearProducts } = productContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
	
	
  }, []);


  
  const OnLogout = () => {
  	
    logout();
    clearProducts();
	
	

  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>
      <li>
        <a onClick={OnLogout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar customnav'>
      <h1>
        <i className='fas fa-tasks' />  Manage Products
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

export default Navbar;
