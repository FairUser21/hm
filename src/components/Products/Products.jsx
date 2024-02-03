import React, { useEffect, useState } from "react";
import { getProducts } from "./store/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import "./Products.css";

import ProductCard from "./ProductCard";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Button, colors } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import ProductType from "./ProductType";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [searchParams, setSearchParams] = useSearchParams({
    limit: 10,
  });

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handleClick = () => {
    setSearchParams({
      ...searchParams,
      _limit: +searchParams.get("_limit") + 10,
    });
  };

  return (
    <div className='products_container'>
      <div className='all_list'>
        <h1>View All</h1>
      </div>

      <ProductType
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />

      <Grid
        sx={{ display: "flex", flexGrow: 1 }}
        container
        spacing={5}
        justifyContent='center'
        margin={"10px"}
      >
        {products.map((product) => (
          <Grid key={product.id} item xs={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <div className='loadmore_button'>
        <Button
          sx={{
            background: "black",
            width: "300px",
            color: "white",
            fontWeight: "600",
            padding: "20px, 30px",
            "&:active": {
              background: "white",
              color: "black",
            },
            "&:hover": {
              background: "white",
              color: "black",
              borderColor: "black",
            },
          }}
          variant='outlined'
          onClick={handleClick}
        >
          Load more products
        </Button>
      </div>
      {/* <ul>
        {products.map((product) => (
          <li>
            <ProductCard product={product} />
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Products;
