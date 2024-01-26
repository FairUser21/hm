import React, { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./CategoryNav.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../Products/store/productsSlice";
import { TextField } from "@mui/material";

const CategoryNav = () => {
  const dispatch = useDispatch();
  const categoriesNav = [
    {
      title: "Women",
      link: "/women",
      subcategories: ["Show all", "Dresses", "Bottoms", "Shoes"],
    },
    {
      title: "Men",
      link: "/men",
    },

    {
      title: "Kids",
      link: "/kids",
    },
    {
      title: "H&M Home",
      link: "/hm-home",
    },
    {
      title: "Sport",
      link: "/sport",
    },
    {
      title: "Sale",
      link: "/sale",
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

  return (
    <div className="category_container">
      <div className="list_container">
        <ul className="list-of-category">
          {categoriesNav.map((category, index) => (
            <li
              key={index}
              onMouseOver={() => handleMouseOver(category)}
              onMouseLeave={handleMouseLeave}
              onClick={() =>
                setSearchParams({ category: category.title.toLowerCase() })
              }
            >
              <Link to={category.link}>{category.title}</Link>
              {showDropdown && selectedCategory === category && (
                <div className="dropdown">
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
      <div className="search_container">
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          onChange={(e) =>
            setSearchParams({ ...searchParams, q: e.target.value })
          }
        />
      </div>
    </div>
  );
};

export default CategoryNav;
