
import React, { Fragment, useState, useContext, useEffect } from 'react';
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
	<div className="App">
	<div className="App__Aside"> <div><h4>For convenience I made a single sign up page for both the user
	 and admin. In a real project these pages are always separated
	 for security reasons. Well, before you is a website where you can login
	 either as an Admin role or User role. When you login, you can add products
	 as an admin and user and when these products are added everyone sees it. But only those with the 
	 Admin role can Update and Delete</h4></div></div>
     
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
	 
	 
	 </div>
	 
	 
	 </Switch>
	 
	 </Router>
  );
};

export default Login;
