import React from "react";
import CartList from "./CartList";
import { useDispatch, useSelector } from "react-redux";
import CheckoutPage from "./CheckoutPage";
import "../Cart/css/Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  return (
    <div>
      <h3>Shopping Cart</h3>
      <div className='cart_wrapper'>
        <div className='div'>
          <CartList dispatch={dispatch} cart={cart} />
        </div>
        <div>
          <CheckoutPage dispatch={dispatch} cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
