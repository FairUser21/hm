import React from "react";
import "./ProductCard.css";

import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const discountedPrice =
    product.discount > 0
      ? (
          product.price - Math.floor((product.price / 100) * product.discount)
        ).toFixed(2)
      : null;

  return (
    <div
      className='product_container'
      onClick={() => navigate(`/details/${product.id}`)}
    >
      <div className='productCard_img'>
        <img src={product.image} alt='' />
      </div>
      <div className='product_text'>
        <p className='product_title'>{product.title}</p>

        <div className='price'>
          {discountedPrice !== null ? (
            <>
              <p style={{ color: "red" }}>${discountedPrice}</p>-
              <span>${product.price.toFixed(2)}</span>
            </>
          ) : (
            `$${product.price.toFixed(2)}`
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
