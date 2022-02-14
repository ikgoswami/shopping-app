import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import SplashScreen from './SplashScreen';
function Product() {
    const[product,setProduct]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const { id } = useParams();
    console.log("id=",id)
  const getProduct= ()=>{
    fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>{
                console.log("json=",json);
              setProduct(json);
              setIsLoading(false);
            })
            
  }
  useEffect(() => {
    getProduct()
  }, [])

  console.log("prd=",product);
  return (
    
   
      isLoading===true?(<SplashScreen />):(
        <div className='homediv'>
    <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={product.image} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    <p>rating: <strong>{product.rating.rate}</strong>({product.rating.count})</p>
    <p>Price:<strong>{product.price}</strong></p>
    <Button className="btn btn-success">Add to Cart</Button>
  </div>
</div>
</div>
      )
  )
}

export default Product