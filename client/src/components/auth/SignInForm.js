import React, { useState, useContext, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';
import SignUpForm from './SignUpForm';




//import createcontext
import AuthContext from '../../context/auth/authContext';

const SignInForm = (props) => {
//use createdcontext
  const authContext = useContext(AuthContext);
  const { login, isAuthenticated, loadUser } = authContext;

  //do after rendering
  useEffect(() => {
    if (isAuthenticated) {
	//redirects
	
     // props.history.push('/');
	  if(email==="olumide.koyenikan@gmail.com"){
	  props.history.push('/admin');
	  }else{
	  props.history.push('/');
	  }
    }
  }, [isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login({
      email,
      password,
    });
  };
return (

<div className="FormCenter">
            <form  onSubmit={onSubmit} className="FormFields">
			
			
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
		<input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />            </div>
			  
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
          />            </div>
			  
			  <div className="FormField">
                  <input
          type='submit'
          value='Login'
          className='FormField__Button mr-20'
        />
				  <Link to="/register" className="FormField__Link">Create an account</Link>
              </div>
			  
			  </form>
			  
			  
</div>

);
};


export default SignInForm;
