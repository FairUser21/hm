import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "./store/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import "./ProductDetails.css";
import { addToCart, getCart } from "../Cart/redux/cartSlice";
import { Popover, Typography } from "@mui/material";
import ProductSwiper from "./ProductSwiper";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { oneProduct } = useSelector((state) => state.products);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [id]);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const idPop = open ? "simple-popover" : undefined;
  return (
    <div>
      <div className='productdisplay'>
        <div className='productdisplay-left'>
          <div className='img_container'>
            <img src={oneProduct.image} alt='' />
          </div>
          <div className='img-list'>
            <img src={oneProduct.image} alt='' />
            <img src={oneProduct.image} alt='' />
          </div>
        </div>

        <div className='productdisplay-right'>
          <div className='productdisplay-right-head'>
            <h4 className='producttitle'>{oneProduct.title}</h4>
            <div className='fav-icon'>
              <FavoriteBorderIcon />
            </div>
          </div>
          <div className='productdisplay-right-price'>
            <p>
              $
              {oneProduct.category === "sale"
                ? oneProduct.salePrice
                : oneProduct.price}
            </p>
          </div>
          <div className='productdisplay-right-star'>
            <div className='stars'>
              <StarIcon></StarIcon>
              <StarIcon></StarIcon> <StarIcon></StarIcon> <StarIcon></StarIcon>
            </div>

            <p className='rating'>{oneProduct.rating}</p>
          </div>

          <div className='productdisplay-right-description'>
            <p>{oneProduct.description}</p>
          </div>
          <div className='productdisplay-right-size'>
            <p>Select Size</p>
            <div className='productdisplay-right-sizes'>
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
            </div>
          </div>
          <button
            className='product-cta'
            onClick={(e) => {
              dispatch(addToCart(oneProduct));
              handleClick(e);
              dispatch(getCart());
            }}
            aria-describedby={idPop}
            variant='contained'
          >
            Add To Cart
          </button>
          <Popover
            id={idPop}
            open={open}
            onClose={handleClose}
            anchorReference='anchorPosition'
            anchorPosition={{ top: NaN, left: 2600 }}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 2 }}>
              The item is added to the cart!
            </Typography>
          </Popover>
          <div className='productdisplay-right-smalltext'>
            <div className='productdisplay-right-store'>
              <StoreMallDirectoryOutlinedIcon />
              <p>Find Store</p>
            </div>
            <div className='productdisplay-right-members'>
              <ErrorOutlineOutlinedIcon />
              <p>Members get free online returns</p>
            </div>
          </div>
        </div>
      </div>

      <ProductSwiper />
    </div>
  );
};

export default ProductDetails;
