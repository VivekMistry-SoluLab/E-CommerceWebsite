import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './container/Home/Home';
import Cart from './container/Cart/Cart';
import SignUp from './components/Auth/SignUp/SignUp';
import SignIn from './components/Auth/SignIn/SignIn';
import AdminPage from './container/Admin/AdminPage';
import WelcomePage from './container/Home/WelcomePage';


function App() {
  console.log("hello this. is app");
  return (
    <>
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/users/login" exact component={SignIn}/>
          <Route path="/users" exact component={SignUp}/>
          <Route path="/cart" exact component={Cart} />
          <Route path="/products" exact component={Home} />
          <Route path="/admin" exact component={AdminPage} />
          <Route path="/" exact component={WelcomePage} />
        </Switch>
      </BrowserRouter>
      
    </div>
    </>
  );
}

export default App;
