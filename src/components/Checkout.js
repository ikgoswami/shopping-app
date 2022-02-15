import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import {useStateValue} from './StateProvider'
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
    const [{basket},disatch]=useStateValue();

    return (
        <div className="checkout">
        <Subtotal />
        <div>
            <h2 className="checkout__title">Your shopping Basket</h2>
            {basket.map(item => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                />
            ))}
        </div>
        </div>
    );
}

export default Checkout