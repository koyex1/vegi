import React, { useContext, useEffect } from 'react';
import Admins from '../products/Admins';
import AdminForm from '../products/AdminForm';
import AuthContext from '../../context/auth/authContext';

const Admin = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div >
      <div>
        <AdminForm />
      </div>
      <div>
        <Admins />
      </div>
    </div>
  );
};


export default Admin;
