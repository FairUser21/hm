import React from "react";
import "../PopOver/css/PopoverBagItem.css";
import CheckoutPage from "../../Cart/CheckoutPage";
import { useNavigate } from "react-router-dom";

const PopoverBagItem = ({ item, subPrice }) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='shopping_wrapper'>
        <div className='img_shopping'>
          <img
            className='item-img'
            src={item.item.image}
            alt=''
            onClick={() => navigate(`/details/${item.item.id}`)}
          />
        </div>
        <div className='shopping_content'>
          <div className='shopping_text'>
            <div key={item.id}>
              <p className='shopping_title'>{item.item.title}</p>
              <p className='shopping_price'>${item.item.price}</p>
              <p className='shopping_qty'>Quantity: {item.count}</p>
              {/* <p className='shopping_size'>Total: ${subPrice}</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopoverBagItem;
