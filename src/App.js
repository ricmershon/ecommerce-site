import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/shop' component={ Shop } />
        <Route path='/signin' component={ SignInAndSignUp } />
      </Switch>
    </div>
  );
}

export default App;
