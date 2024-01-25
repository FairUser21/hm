import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const Navbar = () => {
  const pagesRight = [
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
  const pagesLeft = [
    {
      title: "Sign in",
      link: "/sign-in",
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
          <path d='M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z' />
        </svg>
      ),
    },
    {
      title: "Favourites",
      link: "/favourites",
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
          <path d='M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z' />
        </svg>
      ),
    },
    {
      title: "Shopping bag",
      link: "/shopping-bag",
      icon: (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
          <path d='M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z' />
        </svg>
      ),
    },
  ];
  return (
    <div className='nav'>
      <div className='nav_left'>
        <ul>
          {pagesRight.map((page, index) => (
            <Link to={page.link} key={index}>
              <li>{page.title}</li>
            </Link>
          ))}
        </ul>
      </div>

      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1280px-H%26M-Logo.svg.png'
        alt=''
      />
      <div className='nav_right'>
        <ul>
          {" "}
          {pagesLeft.map((page, index) => (
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
