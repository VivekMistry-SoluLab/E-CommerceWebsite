import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './container/Home/Home';
import Header from './components/Header/Header';
import Cart from './container/Cart/Cart';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Header/>
        <Switch>
          <Route path="/cart" exact component={Cart} />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
