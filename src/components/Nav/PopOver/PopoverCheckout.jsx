import React from "react";
import "../PopOver/css/PopoverCheckout.css";

const PopoverCheckout = ({ cart }) => {
  return (
    <div className='popover_container'>
      <div className='delivery_info'>
        <p>Delivery</p>
        <p>Free</p>
      </div>
      <hr></hr>
      <div className='popover_total'>
        <p>Total</p>$ {cart.totalPrice}
      </div>
      <div className='shopping_buttons'>
        <button className='checkout'>Checkout</button>
        <button className='shopping'>Shopping Bag</button>
      </div>
    </div>
  );
};

export default PopoverCheckout;
