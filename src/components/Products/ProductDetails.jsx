import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "./store/productsSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { oneProduct } = useSelector((state) => state.products);
  const { id } = useParams();
  useEffect(() => {
    dispatch(getOneProduct(id));
  }, []);

  return (
    <div>
      <div className='product_container'>
        <div className='img_container'>
          <img src={oneProduct.image} alt='' />
        </div>
        <div className='oneProduct_text'>
          <p className='title'>{oneProduct.title}</p>

          <div className='price'>
            <p>
              $
              {oneProduct.category === "sale"
                ? oneProduct.salePrice
                : oneProduct.price}
            </p>
          </div>
          <p className='rating'>{oneProduct.rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
