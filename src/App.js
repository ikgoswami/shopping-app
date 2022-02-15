import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';  
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import SplashScreen from './components/SplashScreen';
import Login from './components/Login';
import NavHeader from './components/NavHeader';
import Products from './components/Products';
import ClockLoader from "react-spinners/ClockLoader";
import Product from './components/Product';
import Checkout from './components/Checkout';


function App() {
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, []);


  return (
    isLoading==true?<SplashScreen />:
    <div>
    <NavHeader navigate={navigate}/>
      <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/login' element={<Login />}></Route>
      <Route exact path='/products/:id' element={<Products />}></Route>
      <Route exact path='/product/detail/:id' element={<Product />}></Route>
      <Route exact path='/checkout' element={<Checkout />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
