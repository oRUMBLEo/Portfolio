import React from 'react'
import * as AiIcons from "react-icons/ai"
import "./Navbar.css"

const Navbar = () => {

  window.addEventListener('scroll',(e)=>{
    const nav = document.querySelector('.navbar');
    if(window.pageYOffset>0){
      nav.classList.add("add-shadow");
    }else{
      nav.classList.remove("add-shadow");
    }
  });

  return (
    <div className='navbar' data-aos="fade-down">
      <div className="navbar__items">
        <a href="#home-section"><h2>Guy Rumble</h2></a>
        <div className="navbar__links">
          <a href="https://twitter.com/rumble_guy" target="_blank" rel="noreferrer"><AiIcons.AiOutlineTwitter className="navbar__link"/></a>
          <a href="https://github.com/oRUMBLEo" target="_blank" rel="noreferrer"><AiIcons.AiOutlineGithub className="navbar__link"/></a>
          <a href="https://www.linkedin.com/in/guy-rumble-14463023a/" target="_blank" rel="noreferrer"><AiIcons.AiFillLinkedin className="navbar__link"/></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar