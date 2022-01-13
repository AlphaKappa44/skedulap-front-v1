import React from 'react';
import './Header.css';
import logo_LCDMN from './../assets/images/logo_LCDMN.jpg';

const Header = (SignUpConfirmation) => {
    return (
        <div className="header">
            <img src={logo_LCDMN}
                className="header__logo"
                alt="logo de le coup de main numérique"
            />
            <button className="header__button">
                 { SignUpConfirmation ? 'SE CONNECTER' : 'SE DECONNECTER' }
            </button>
        </div>
    );
}

export default Header;