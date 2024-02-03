import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./store/productsSlice";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export default function ProductSwiper() {
  const [swiperRef, setSwiperRef] = useState(null);
  const { products } = useSelector((state) => state.products);
  const [shuffledProducts, setShuffledProducts] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    const arrayOfProducts = [...products];
    let random = arrayOfProducts.sort(() => Math.random() - 0.5);
    setShuffledProducts(random);
  }, [products]);

  return (
    <>
      <h3 className='swiperText'>You may also like</h3>
      <div className='swipe_container'>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={4}
          // centeredSlides={true}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className='mySwiper'
        >
          {shuffledProducts.map((item) => (
            <SwiperSlide
              key={item.id}
              onClick={() => navigate(`/details/${item.id}`)}
            >
              <div className='swipe_products'>
                <div className='productCard_img'>
                  <img src={item.image} alt='' />
                </div>
                <div className='product_text'>
                  <p className='title'>{item.title}</p>

                  <div className='price'>
                    <p>
                      {item.discount > 0
                        ? item.price -
                          Math.floor((item.price / 100) * item.discount)
                        : null}
                    </p>
                    -<span>{item.price}</span>
                  </div>
                  <p className='rating'>{item.rating}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
