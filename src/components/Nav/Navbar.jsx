import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const pagesLeft = [
  {
    title: "Customer Service",
    link: "/customer-service",
  },
  { title: "Newsletter Sign-Up", link: "/newsletter" },
  {
    title: "Students get 20% off",
    link: "/student-discount",
  },
];
const pagesRight = [
  {
    title: "Sign in",
    link: "/sign-in",
    icon: <PersonOutlineOutlinedIcon />,
  },
  {
    title: "Favourites",
    link: "/favourites",
    icon: <FavoriteBorderIcon />,
  },
  {
    title: "Shopping bag",
    link: "/shopping-bag",
    icon: <ShoppingCartOutlinedIcon />,
  },
];
const Navbar = () => {
  return (
    <div className='nav'>
      <div className='nav_left'>
        <ul>
          {pagesLeft.map((page, index) => (
            <Link to={page.link} key={index}>
              <li>{page.title}</li>
            </Link>
          ))}
        </ul>
      </div>

      <Link path='/'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png'
          alt=''
        />
      </Link>
      <div className='nav_right'>
        <ul>
          {" "}
          {pagesRight.map((page, index) => (
            <Link to={page.link} key={index}>
              <li>
                <div className='icon'> {page.icon}</div>

                {page.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
