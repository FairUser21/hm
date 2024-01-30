import React from "react";
import CartList from "./CartList";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  return (
    <div>
      <CartList dispatch={dispatch} cart={cart} />
    </div>
  );
};

export default Cart;
