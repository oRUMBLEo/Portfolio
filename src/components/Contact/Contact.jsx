import React from 'react'
import "./Contact.css"
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='contact' data-aos="fade-up">
      <h1 className='contact__title'>/Contact</h1>
      <ContactForm />
    </div>
  )
}

export default Contact