import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "./store/productsSlice";
import { library } from "@fortawesome/fontawesome-svg-core";
const ProductType = ({ searchParams, setSearchParams }) => {
  const { types, products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  console.log(types, "types");

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);
  return (
    <div>
      <ul>
        {types.map((item) => (
          <li
            onClick={() =>
              setSearchParams({
                ...searchParams,
                type: item,
              })
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductType;
