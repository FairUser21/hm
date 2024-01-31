import React, { useEffect } from "react";

import CartItem from "./CartItem";
import { getCart } from "./redux/cartSlice";

const CartList = ({ cart, dispatch }) => {
  console.log(cart);

  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <div>
      {cart.products.map(({ item, count, subPrice }) => (
        <CartItem item={item} count={count} subPrice={subPrice} />
      ))}
    </div>
  );
};

export default CartList;
