import React, { useEffect } from "react";
import { getProducts } from "./store/productsSlice";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";

import ProductCard from "./ProductCard";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Button } from "@mui/material";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  const [searchParams, setSearchParams] = useSearchParams({
    limit: 10,
  });

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="main_container">
      <div className="all_list">
        <h1>View All</h1>
      </div>
      <div className="filter_bar">{/* filter here */}</div>

      <Grid
        sx={{ display: "flex", flexGrow: 1 }}
        container
        spacing={5}
        justifyContent="center"
        margin={"10px"}
      >
        {products.map((product) => (
          <Grid key={product.id} item xs={3}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
      <Button
        variant="outlined"
        onClick={() =>
          setSearchParams({
            ...searchParams,
            _limit: +searchParams.get("_limit") + 10,
          })
        }
      >
        Load more products
      </Button>
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
