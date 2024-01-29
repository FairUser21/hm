import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div className='container'>
      <div className='body'>
        <div className='header'>
          <p className='bold'>The latest styles are in</p>
          <p className='smalltext'>Find your new faves for the season!</p>
        </div>
        <div className='denim'>
          <img
            src='https://i.pinimg.com/736x/20/d4/87/20d487bc3e515332857334cbe0f7e25f.jpg'
            alt=''
          />
        </div>
        <div className='membercode'>
          <p>
            Become an H&M member & get 10% off your first purchase + unbeatable
            offers!
          </p>
        </div>
        <div className='spring'>
          <img
            className='Spring'
            src='https://www.refinery29.com/images/10388818.jpg?format=webp&width=760&height=912&quality=85&crop=5%3A6'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
