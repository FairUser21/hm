import React from "react";
import { Link } from "react-router-dom";
import "./CategoryNav.css";
import { useState } from "react";

const CategoryNav = () => {
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
  return (
    <div className='category_container'>
      <div className='list_container'>
        <ul className='list-of-category'>
          {categoriesNav.map((category, index) => (
            <li
              key={index}
              onMouseOver={() => handleMouseOver(category)}
              onMouseLeave={handleMouseLeave}
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
    </div>
  );
};

export default CategoryNav;
