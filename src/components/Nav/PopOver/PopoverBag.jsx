import React, { useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Popover } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getCart, addToCart } from "../../Cart/redux/cartSlice";
import PopoverBagItem from "./PopoverBagItem";
import { Key } from "@mui/icons-material";
import PopoverCheckout from "./PopoverCheckout";
import "../PopOver/css/PopoverBag.css";

const PopoverBag = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  console.log(cart);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <div className='popoverBag_container'>
      <li
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup='true'
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <div className='icon'>
          {" "}
          <ShoppingCartOutlinedIcon />
        </div>
        Shopping Bag
      </li>
      <Popover
        id='mouse-over-popover'
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div>
          <ul>
            {cart.products.map((item) => (
              <PopoverBagItem key={item.item.id} item={item} />
            ))}
          </ul>
          <PopoverCheckout cart={cart} />
        </div>
      </Popover>
    </div>
  );
};

export default PopoverBag;
