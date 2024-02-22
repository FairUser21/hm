import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Products/ProductCard";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { getFav, removeFromFav } from "./favSlice";
import "./Favourites.css";
import { useEffect } from "react";
const Favorites = () => {
  const { favoriteProductIds } = useSelector((state) => state.favorites);
  console.log(favoriteProductIds, "fav");
  const dispatch = useDispatch();

  const handleDelete = (productId) => {
    dispatch(removeFromFav(productId));
    console.log(productId, "id");
  };

  useEffect(() => {
    dispatch(getFav());
  }, [dispatch]);

  return (
    <div className='fav-container'>
      <h2>Favorite Products</h2>
      {favoriteProductIds.length === 0 ? (
        <p>Your favorite list is empty.</p>
      ) : (
        <div className='fav-productCard'>
          {favoriteProductIds.map((productId, index) => (
            <div className='fav-product' key={index}>
              <ProductCard product={productId} />
              <button
                className='fav-button'
                onClick={() => handleDelete(productId)}
              >
                <DeleteOutlineIcon />
                <p>Remove</p>
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
