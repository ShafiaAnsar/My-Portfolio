import React from 'react'
import './Footer.css'
import {BsInstagram} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'
function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>Contact</a>
      <ul className='permalinks'>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer_socials">
      <a href='https://facebook.com/shafia.ansar.5' target='blank'><BsFacebook/></a>
        <a href='https://www.instagram.com/ishafia_ansar/' target='blank'><BsInstagram/></a>
        <a href='https://twitter.com/ansar_shafia' target='blank'><FaTwitter/></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Shafia Ansar All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer