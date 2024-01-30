import React, { useEffect } from "react";
import { changeCount, deleteItemInCart, getCart } from "./redux/cartSlice";

const CartList = ({ cart, dispatch }) => {
  console.log(cart);

  useEffect(() => {
    dispatch(getCart());
  }, []);
  return (
    <div>
      {cart.products.map(({ item, count, subPrice }) => (
        <div key={item.id}>
          <img src={item.image} alt="" width="350" height="350" />
          <p>{item.title}</p>
          <input
            type="number"
            value={count}
            onChange={(e) =>
              dispatch(changeCount({ id: item.id, count: e.target.value }))
            }
          />
          <button onClick={() => dispatch(deleteItemInCart(item.id))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartList;
