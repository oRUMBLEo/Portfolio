import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header' data-aos="fade-right">
      <p>Hello, my name is</p>
      <h1>GUY RUMBLE. <br/> I'M A FRONT-END WEB DEVELOPER. </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      <a href="#projects-section"><button>{"Check out my projects >"}</button></a> 
    </div>
  )
}

export default Header