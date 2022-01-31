import React from 'react';
import { Link } from "react-router-dom";
import './SignUpConfirmation.css';

const SignUpConfirmation = () => {
    return (
        <div className="sign__up__confirmation">
            <h1>Inscription validée</h1>
            
            <p>Votre inscription bien été prise en compte</p>
            <p>Alexandre Kélifa, votre profil a été créé.</p>
            <p>Votre identifiant est: cétonmail@lcdmn.org</p>
            
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