olumideolaolukoyenikan
import{Link} from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';

const SignUpForm = (props) => {
  const authContext = useContext(AuthContext);

  const { register, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/');
    }
  }, [isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
	role: '',
  });

  const { name, email, password, role } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    register({
      name,
      email,
      password,
	  role,
    });
  };
return (

<div className="FormCenter">
            <form  className="FormFields" onSubmit={onSubmit}>
			
			<div className="FormField">
                <label className="FormField__Label" htmlFor="name">Name</label>
                <input
            id='name'
            type='text'
            name='name'
            value={name}
            onChange={onChange}
            required
          />
              </div>
			
			
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">Email</label>
                <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
              </div>
			  
			  <div className="FormField">
                <label className="FormField__Label" htmlFor="role">Role</label>
                <select
            id='role'
            type='select'
            name='role'
            value={role}
            onChange={onChange}
            required
			placeholder="select a role"
          ><option>Select a Role</option>
		  <option value="admin">Admin</option>
		  <option value="user">User</option>
		  </select>
              </div>
			  
			  
			  <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input
            id='password'
            type='password'
            name='password'
            value={password}
            onChange={onChange}
            required
            minLength='6'
          />
              </div>
			  
			  
			  <div className="FormField">
               <input
          type='submit'
          value='Register'
          className='FormField__Button mr-20'
        />
		<Link to="/login" className="FormField__Link">I'm already a member</Link>
            
              </div>
			  
			  </form>
			  
			  <div className="FormField">
                <label className="FormField__CheckboxLabel">
                    <input className="FormField__Checkbox" type="checkbox" name="hasAgreed" /> 
					I agree all statements in <a href="#" className="FormField__TermsLink">terms of service</a>
					
                </label>
              </div>
			  
</div>

);
};


export default SignUpForm;
