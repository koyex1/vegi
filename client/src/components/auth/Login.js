import React, { useState, useContext, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link, Switch, NavLink} from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';




//import createcontext
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
//use createdcontext
  const authContext = useContext(AuthContext);
  const { login, isAuthenticated } = authContext;



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
  
    //do after rendering
  useEffect(() => {
    if (isAuthenticated) {
	//redirects
      //props.history.push('/');
	  //user.email = "olumide.koyenikan@gmail.com";

	  props.history.push('/admin');
	  
    }
  }, [isAuthenticated, email, props.history]);

  return (
  
  
  
  
  
   <Router>
	
	<Switch>	
	
   
     
	 <div className="App__Form">
	 <div className="PageSwitcher">
	 <NavLink to="/login" activeClassName= "PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
	 <NavLink exact to="/register" activeClassName= "PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
	 </div>
	 <div className="FormTitle">
        <NavLink to="/login" activeClassName= "FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or
		<NavLink exact to="/register" activeClassName= "FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
     </div>
	 
	 
	 <Route exact path="/register" component={SignUpForm}></Route>
	 <Route path="/login" component={SignInForm}></Route>
	 
     
	 </div>
	 
	 
	 
	 
	 </Switch>
	 
	 </Router>
  );
};

export default Login;
