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
	  <h5> 1. If you want to edit a product hit the edit icon on your right juxtaposed with the trash icon
		</h5>
		<h5> 2. Then hit the "Add or Edit" button below.
		</h5>
        <AdminForm />
		
      </div>
      <div>
        <Admins />
      </div>
    </div>
  );
};


export default Admin;
