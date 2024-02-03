import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Popover } from "@mui/material";
import PopoverBag from "./PopOver/PopoverBag";
import ModalTemplate from "../UI/ModalTemplate";
import Login from "../Auth/Login";
import Register from "../Auth/Register";

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
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

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

      <Link to='/'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png'
          alt=''
        />
      </Link>
      <div className='nav_right'>
        <ul>
          {/* {pagesRight.map((page, index) => ( */}

          <li onClick={() => setOpen(true)}>
            <div className='icon'>
              {" "}
              <PersonOutlineOutlinedIcon />
            </div>
            Sign in
          </li>
          <ModalTemplate trigger={open} setTrigger={setOpen}>
            <Login setShowModal={setRegisterModal} setOpen={setOpen} />
          </ModalTemplate>
          <Register
            showModal={registerModal}
            setShowModal={setRegisterModal}
            setOpen={setOpen}
          />
          <Link to='/favorites'>
            <li>
              <div className='icon'>
                {" "}
                <FavoriteBorderIcon />
              </div>
              Favorites
            </li>
          </Link>
          <Link to='/shopping-bag'>
            <PopoverBag />
          </Link>
          {/* ))} */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
