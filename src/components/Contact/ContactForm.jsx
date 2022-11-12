import React from 'react'
import emailjs from 'emailjs-com'

const ContactForm = () => {

  /* const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_phvt968', 'template_ggfblsm', e.target, 'FPQBLqmysqC9G8n8C')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
    });
    e.target.reset()
  } */

  return (
    <form action="" className="contact__form" /* onSubmit={sendEmail} */ >
      <input className='contact__input' type="text" placeholder='Your Name*' name='name' required />
      <input className='contact__input' type="email" placeholder='Your Email*' name='email' required />
      <textarea className='contact__input' name="message" id="" cols="30" rows="8" placeholder='Message (Optional)'></textarea>
      <input type="submit" value="Send" />
    </form>
  )
}

export default ContactForm