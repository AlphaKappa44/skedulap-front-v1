import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import './Header.css';
import UserStateContext from './UserStateContext';
import logo_LCDMN from './../assets/images/logo_LCDMN.jpg';

const Header = (SignUpConfirmation) => {

    const navigate = useNavigate();

    const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className="header">
            
            <img src={logo_LCDMN}
                className="header__logo"
                alt="logo de le coup de main numérique"
            />

            <UserStateContext />
            
            <button className="header__button"
            onClick= {() => navigate('/connexion') }
            >
                 { SignUpConfirmation ? 'SE CONNECTER' : 'SE DECONNECTER' }
            </button>
        </div>
    );
}

export default Header;