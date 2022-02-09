import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
  
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

import ClockLoader from "react-spinners/ClockLoader";

function App() {
    // Loading state 
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
    
      // Wait for 3 seconds
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }, []);


  return (
    isLoading==true?<SplashScreen />:
    <Router>
    <NavHeader />
      <Routes>
      <Route exact path='/' element={< SplashScreen />}></Route>
      <Route exact path='/home' element={<Home  />}></Route>
      <Route exact path='/login' element={<Login />}></Route>
      </Routes>
      
    </Router>
  );
}

export default App;
