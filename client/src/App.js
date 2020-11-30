olumideolaolukoyenikan
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/SignUpForm';
import Login from './components/auth/Login';
import setAuthToken from './utils/setAuthToken';
import ProductState from './context/product/ProductState';
import AuthState from './context/auth/AuthState';

import PrivateRoute from './components/routing/PrivateRoute';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <ProductState>
        <Router>
          <Fragment>
            <Navbar />
            <div className='container'>
              <Switch>
                <PrivateRoute exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
				<Route exact path='/admin' component={Admin} />
				
              </Switch>
            </div>
          </Fragment>
        </Router>
      </ProductState>
    </AuthState>
  );
};

export default App;
