import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "./store/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import CategoryNav from "../Nav/CategoryNav";
import "./ProductDetails.css";
import Navbar from "../Nav/Navbar";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { oneProduct } = useSelector((state) => state.products);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [id]);
  console.log("one product", oneProduct);

  return (
    <div>
      <Navbar />
      <CategoryNav />
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
            <h3 className='title'>{oneProduct.title}</h3>
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
          <button className='product-cta'>Add To Cart</button>
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
    </div>
  );
};

export default ProductDetails;
