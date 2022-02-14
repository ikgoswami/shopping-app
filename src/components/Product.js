import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useParams } from 'react-router-dom';
import { Button } from 'reactstrap';
import SplashScreen from './SplashScreen';

import { useStateValue } from './StateProvider';


function Product() {
    const[product,setProduct]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const { id } = useParams();

    const [{ basket },dispatch]=useStateValue();
    // console.log("this is the basket>>>", basket);

    const navigate = useNavigate();

    const addToBasket = () => {
      // dispatch the item into the data layer
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: product.id,
          title: product.title,
          image: product.image,
          price: product.price,
          rating: product.rating.rate,
        },
      });
    };

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
        <h2>Product Details</h2>
    <div className="card" style={{width: "18rem"}}>
  <img className="card-img-top" src={product.image} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text">{product.description}</p>
    <p>rating: <strong>{product.rating.rate}</strong>({product.rating.count})</p>
    <p>Price:<strong>{product.price}</strong></p>
    <Button className="btn btn-success" onClick={addToBasket}>Add to Cart</Button>
    <Button className="btn btn-success" onClick={()=>{navigate(`/checkout`);}}>Go to Cart</Button>
  </div>
</div>
</div>
      )
  )
}

export default Product