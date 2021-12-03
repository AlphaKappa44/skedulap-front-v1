import React from 'react';
import './Footer.css';
  
const Footer = () => {
    return(
      <div className="footer"> 
          <p className="footer__link">Qui sommes nous</p>
          <p className="footer__link">faq</p>
          <p className="footer__link">Contact</p>
          <a
                className="footer__link"
                href="https://le-coup-de-main-numerique.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
                https://le-coup-de-main-numerique.org/
            </a>
      </div>
    );
}
  
export default Footer;