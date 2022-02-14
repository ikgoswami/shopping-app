import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from 'reactstrap';

function Products() {
  const[products,setProducts]=useState([]);

  const getProducts=()=>{
    fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>{
              setProducts(json);
            })
  }
  useEffect(() => {
    getProducts()
  }, [])
  
  const navigate = useNavigate();

  const handleClick=(productData)=>{
    navigate(`/product/detail/${productData.id}`,productData)
  }
  return <div className='homediv'>
  
      <h2>Products List</h2>
      {[...products].map((elementInArray, index) => {
    return (
      <div className="card mb-3" style={{width:"18rem"}}>
      <img className="card-img-top" src={elementInArray.image} alt="Card image cap" />
    <div className="card-body">
      <h6 className="card-title">{elementInArray.title}</h6>
      <Button className="btn btn-success" onClick={()=>handleClick(elementInArray)} > View Product </Button>
    </div>
    </div>
    );
  })
  }
  </div>;
}

export default Products;
