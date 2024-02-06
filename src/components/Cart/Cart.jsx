import React, { useEffect, useState } from "react";
import CartList from "./CartList";
import { useDispatch, useSelector } from "react-redux";
import CheckoutPage from "./CheckoutPage";
import "../Cart/css/Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const [cartEmpty, setCartEmpty] = useState(true);

  useEffect(() => {
    setCartEmpty(cart.products.length === 0);
  }, [cart.products]);

  return (
    <div>
      <h3>Shopping Cart</h3>
      <div className='cart_wrapper'>
        {cartEmpty ? (
          <h3 className='emptycart'>Your Shopping Bag is empty!</h3>
        ) : (
          <div className='div'>
            <CartList dispatch={dispatch} cart={cart} />
          </div>
        )}

        <div>
          <CheckoutPage dispatch={dispatch} cart={cart} />
        </div>
      </div>
    </div>
  );
};

export default Cart;
