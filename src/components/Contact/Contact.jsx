import React , {useRef} from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from "emailjs-com"
function Contact() {
  const form =useRef()
  const sendEmail =(e) =>{
    e.preventDefault()
    emailjs.sendForm('service_jkdzkgb' ,'template_y7uq3i4',form.current,'f_ahYn65wpGavVq8a')
    e.target.reset()
   }
  return (
    <section id='contact'>
      <h5>Get In Touch </h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option" >
            <AiOutlineMail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>shafiaansar142@gmail.com</h5>
          <a href="mailto:shafiaansar142@gmail.com" target="blank">Send a message</a>
          </article>
          <article className="contact_option">
            <BsMessenger className='contact_option-icon'/>
          <h4>Messenger</h4>
          <h5>Shafia Ansar</h5>
          <a href="https://m.me/shafia.ansar.5/" target="blank">Send a message</a>
          </article><article className="contact_option">
            <BsWhatsapp className='contact_option-icon'/>
          <h4>Whatsapp</h4>
          <h5> Send at WhatsApp</h5>
          <a href="https://api.whatsapp.com/send?phone+923107566943" target="blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
