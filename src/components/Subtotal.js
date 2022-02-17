import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from './reducer';
import { useStateValue } from "./StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  const removeAllFromBasket=()=>{
    dispatch({
        type: 'REMOVE_ALL_FROM_BASKET'
    })
}
    return (
        <div className="subtotal">
            <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

        <button onClick={removeAllFromBasket}>Proceed to Checkout</button> 
        </div>
    )
}

export default Subtotal