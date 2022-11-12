import React from 'react'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import Projects from '../components/Projects/Projects'

import "./LandingPage.css"

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <Navbar />
      <a href="mailto:info.guyrumble@gmail.com"><div className="side-contact">
        <p>info.guyrumble@gmail.com</p>
        <div className='side-contact__bar'></div>
      </div></a>
      <div id="home-section">
        <Header />
      </div>
      <div id="about-section">
        <About />
      </div>
      <div id="projects-section">
        <Projects />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage