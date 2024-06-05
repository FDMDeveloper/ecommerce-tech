import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>smarttechshop è il principale rivenditore di prodotti elettronici e elettrodomestici. Offriamo una vasta gamma di prodotti di alta qualità a prezzi competitivi. Siamo orgogliosi del nostro servizio clienti e ci impegniamo a fornire ai nostri clienti un'esperienza di shopping positiva.</p>
          <div className="footer-social-icons">
            <a href="https://github.com/FDMDeveloper" target="_blank" rel="noopener noreferrer">
              <img src={assets.github_icon} alt="" /> </a>
              <a href="https://www.instagram.com/developerfdp98/" target="_blank" rel="noopener noreferrer">  
            <img src={assets.instagram_icon} alt="" /> </a>
            <a href="https://www.linkedin.com/in/francesco-matteo-depalma/" target="_blank" rel="noopener noreferrer">
            <img src={assets.linkedin_icon} alt="" /></a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Spedizione</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+39 02 12345678</li>
            <li>contact@tech.it</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright © 2024 smarttechshop.com è un progetto didattico creato da me - All Right Reserved.</p>
    </div>
  )
}

export default Footer
