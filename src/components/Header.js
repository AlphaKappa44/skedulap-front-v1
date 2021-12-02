import React from 'react';
import logo_LCDMN from './../assets/images/logo_LCDMN.jpg';
import Button from './../components/Button.js';
  
const Header = (props) => {
    return(
      <div className="header-div"> 
        <p>Je suis le header</p>
        <img src={logo_LCDMN} className="header-Logo" alt="logo de le coup de main numérique" />
        <Button className="button-green"/>
        <p>Je suis le header</p>
      </div>
    );
}
  
export default Header;