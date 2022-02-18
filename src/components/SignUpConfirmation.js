// import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/UserContext";
import './SignUpConfirmation.css';


const SignUpConfirmation = () => {

    const { user, setUser } = useContext(userContext);
   
    return (
        <div className="sign__up__confirmation">
            <h1>Inscription validée</h1>
            <p>N'oubliez pas votre mot de passe pour la fois prochaine!</p>
                
            <p> { user.first_name}, {user.last_name}, votre profil a été créé. </p>
            <p>Votre identifiant est: {user.email}</p>
            
            
            <button type="submit" className="linkto__appointment__button">PRENDRE RENDEZ-VOUS</button>
            <Link to="/profil">
                <button type="submit" className="linkto__profil__button">VOIR MON PROFIL</button>
            </Link>
            <div className="sign__up">

            </div>
        </div>
    );
}

export default SignUpConfirmation;