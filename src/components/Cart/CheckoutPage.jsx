import React from "react";
import "../Cart/css/CheckoutPage.css";
const CheckoutPage = ({ cart }) => {
  return (
    <div className='container'>
      <div className='discount_text'>
        <p>Discounts</p>
        <p>Apply Discounts</p>
      </div>
      <div className='login'>
        <p>Log in to use your personal offers!</p>
        <div className='login_button'>
          <button> Log in</button>
        </div>
        <hr></hr>
        <div className='price_info'>
          <p>Order Value</p>
          {cart.totalPrice}
        </div>
        <div className='delivery_info'>
          <p>Delivery</p>
          <p>Free</p>
        </div>
        <div className='total_price'>
          <p>Total</p>
          {cart.totalPrice}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
