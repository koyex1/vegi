import React, { useState, useContext, useEffect } from 'react';
//import createcontext
import AuthContext from '../../context/auth/authContext';

const Login = (props) => {
//use createdcontext
  const authContext = useContext(AuthContext);
  const { login, isAuthenticated } = authContext;

  //do after rendering
  useEffect(() => {
    if (isAuthenticated) {
	//redirects
      props.history.push('/');
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
    <div className='form-container'>
      <h1>
        <span className='text-primary'>Login</span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input
            id='email'
            type='email'
            name='email'
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className='form-group'>
          <label htmlFor='password'>Password</label>
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

        <input
          type='submit'
          value='Login'
          className='btn btn-primary btn-block'
        />
      </form>
    </div>
  );
};

export default Login;
