import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>dann</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portofolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/daniel.silalahi.7140"><FaFacebookF/></a>
        <a href="https://www.instagram.com/danielsilalahi3/"><BsInstagram/></a>
        <a href="https://api.whatsapp.com/send/?phone=+6281362109160"><BsWhatsapp/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Daniel Silalahi. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer