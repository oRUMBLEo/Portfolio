import React from 'react'
import "./About.css"

import html from "../../images/html.png"
import css from "../../images/css.png"
import js from "../../images/js.png"

const About = () => {
  const bla = 1

  return (
    <div className='about' data-aos="fade-up">
      <h1>/About</h1>
      <div className="about__container" >
        <div className="about__description" /* data-aos="fade-left" */>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque nec. Magna ac placerat vestibulum lectus mauris ultrices eros. Adipiscing elit ut aliquam purus sit amet luctus. Tempor nec feugiat nisl pretium fusce id. Sed blandit libero volutpat sed cras ornare. Fermentum posuere urna nec tincidunt praesent semper. Maecenas accumsan lacus vel facilisis volutpat est velit. Venenatis a condimentum vitae sapien pellentesque habitant morbi. Elementum facilisis leo vel fringilla. Purus sit amet volutpat consequat mauris nunc congue. Nibh nisl condimentum id venenatis.</p>
        </div>
        <div className="about__languages-container" /* data-aos="fade-right" */>
          <p>LANGUAGES I USE</p>
          <div className="about__languages">
            <div className="about__language">
              <img src={html} alt="HTML" />
              <p>HTML</p>
            </div>
            <div className="about__language">
              <img src={css} alt="CSS" />
              <p>CSS</p>
            </div>
            <div className="about__language">
              <img src={js} alt="JS" />
              <p>JavaScript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About