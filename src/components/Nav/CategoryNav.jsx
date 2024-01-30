import React, { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "./CategoryNav.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../Products/store/productsSlice";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const CategoryNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categoriesNav = [
    {
      title: "Women",
      link: "/women",
      key: "women",
    },
    {
      title: "Men",
      link: "/men",
      key: "men",
    },

    {
      title: "Kids",
      link: "/kids",
      key: "kids",
    },
    {
      title: "H&M Home",
      link: "/hmhome",
      key: "hmhome",
    },
    {
      title: "Sport",
      link: "/sport",
      key: "sport",
    },
    {
      title: "Sale",
      link: "/sale",
      key: "sale",
    },
  ];

  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleMouseOver = (category) => {
    setShowDropdown(true);
    setSelectedCategory(category);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
    setSelectedCategory(null);
  };

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(getProducts());
  }, [searchParams]);
  const handleCategory = (e) => {
    // setSearchParams({ category: e.target.id });
  };
  return (
    <div className='category_container'>
      <div className='list_container'>
        <ul className='list-of-category'>
          {categoriesNav.map((category, index) => (
            <li
              key={index}
              id={category.key}
              onMouseOver={() => handleMouseOver(category)}
              onMouseLeave={handleMouseLeave}
              onClick={() => navigate(`/products?category=${category.key}`)}
            >
              <Link to={category.link}>{category.title}</Link>
              {showDropdown && selectedCategory === category && (
                <div className='dropdown'>
                  {category.subcategories && (
                    <ul>
                      {category.subcategories.map((subcategory, subIndex) => (
                        <li key={subIndex}>
                          <Link to={`${category.link}/${subcategory}`}>
                            {" "}
                            {subcategory}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className='search_container'>
        <SearchIcon />
        <TextField
          id='standard-basic'
          label='Search products'
          variant='standard'
          onChange={(e) =>
            setSearchParams({ ...searchParams, q: e.target.value })
          }
          sx={{ width: "250px" }}
          InputLabelProps={{ style: { fontSize: 15 } }}
        />
      </div>
    </div>
  );
};

export default CategoryNav;
