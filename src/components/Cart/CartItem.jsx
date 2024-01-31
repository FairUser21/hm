import React from "react";
import { useDispatch } from "react-redux";
import { changeCount, deleteItemInCart } from "./redux/cartSlice";
import "../Cart/css/CartItem.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const CartItem = ({ item, count, subPrice }) => {
  const dispatch = useDispatch();
  return (
    <div className='cartItem_wrapper'>
      <div className='cartItem_img'>
        <img
          className='item-img'
          src={item.image}
          alt=''
          width='350'
          height='350'
        />
      </div>
      <div className='cartItem_content'>
        <div className='cartItem_text'>
          <div key={item.id}>
            <p className='cartItem_title'>{item.title}</p>
            <p className='cartItem_price'>${item.price}</p>
            <p className='cartItem_size'>Total: ${subPrice}</p>
            <div className='interaction'>
              <div className='favourite_icon'>
                <div className='cartItem_icon'>
                  <FavoriteBorderIcon />
                </div>
              </div>
              <div className='input'>
                <input
                  className='count_input'
                  type='number'
                  value={count}
                  onChange={(e) =>
                    dispatch(
                      changeCount({ id: item.id, count: e.target.value })
                    )
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div className='delete_button'>
          <DeleteOutlineIcon
            onClick={() => dispatch(deleteItemInCart(item.id))}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
