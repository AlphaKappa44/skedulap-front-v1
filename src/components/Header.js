// import {useState} from "react";
import { useNavigate } from 'react-router-dom';
import './Header.css';
import { useContext } from "react";
import {  userContext } from "../context/UserContext";
import logo_LCDMN from './../assets/images/logo_LCDMN.jpg';

const Header = (SignUpConfirmation) => {

    const { user, 
        // setUser 
    } = useContext(userContext);
    const navigate = useNavigate();

    // const [loggedIn, setLoggedIn] = useState(false);

    return (
        <div className="header">
            
            <img 
                src={logo_LCDMN}
                className="header__logo"
                alt="logo de le coup de main numérique"
                onClick= {() => navigate('/') }
            />

            {(!user.first_name || user.first_name === undefined) && 
            <h3> 
                Bienvenue sur notre plateforme!
            </h3>}

            {user.first_name && 
            <h3> 
                Bienvenue, {user.last_name + " " + user.first_name + " !"}
            </h3>}
            
            <button className="header__button"
            onClick= {() => navigate('/connexion') }
            >
                 { user.first_name ? 'SE DECONNECTER' : 'SE CONNECTER' }
            </button>
        </div>
    );
}

export default Header;