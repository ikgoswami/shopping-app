import React from 'react';
import { useNavigate } from "react-router-dom";

import './splash.css'

function Home() {
  const navigate = useNavigate();

  const handleClick=(index)=>{
    navigate(`/products/${index}`);
  }
  return <div className='homediv'> <h1>Home Page</h1>
  {[...Array(25)].map((elementInArray, index) => {
    return (<div key={index} className='banner' onClick={() => handleClick(index)} value={index}> 
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxmTlDadDGL7LwbEr9Oe8S7KMKgUwY-s94lw&usqp=CAU'></img> 
    <h5>banner {index+1}</h5>
    </div> );
  })
  }
  
  </div>;
}

export default Home;
