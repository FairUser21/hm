import React from "react";
import "./ProductCard.css";

import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className='product_container'
      onClick={() => navigate(`/details/${product.id}`)}
    >
      <div className='img_container'>
        <img src={product.image} alt='' />
      </div>
      <div className='product_text'>
        <p className='title'>{product.title}</p>

        <div className='price'>
          <p>
            ${product.category === "sale" ? product.salePrice : product.price}
          </p>
        </div>
        <p className='rating'>{product.rating}</p>
      </div>
    </div>
  );
};

export default ProductCard;
