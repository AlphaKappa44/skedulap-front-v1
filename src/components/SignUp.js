import {React, useState} from 'react';
import { useNavigate } from "react-router-dom";
import './SignUp.css';


const SignUp = () => {

    const navigation = useNavigate();
    const [state, setState] = useState({ 
        firstName: '', 
        lastName: '', 
        email: '', 
        password: '', 
        passwordConfirmation: '',
    });
    const handleSignUpSubmit = (event) => {
        event.preventDefault();
        console.log("submission prevented");
    };

    console.log('submitting', state);


    const checkPassword = () => {
        const password = state.password;
        const passwordConfirmation = state.passwordConfirmation;
        if (password !== passwordConfirmation) { 
            alert ('La confirmation de mot de passe est différent du mot de passe - Veuillez entrer un mot de passe et le confirmer');
            console.log(password);
            console.log(passwordConfirmation);
        }
         else {
            console.log(password);
            console.log(passwordConfirmation);
        }
    };


    const handleSignUpChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setState({...state, [name]: value});
    };

    const signUpError = "un message d'erreur ici";   
    
    return (
        <div>
            
            <h1 className="title__inscription">Inscription</h1>
            <p className="p__inscription">
                Inscrivez-vous pour prendre rendez-vous avec le coup de main numérique:
            </p>
            <div className="sign__up">

                <form onSubmit={handleSignUpSubmit} className="inscriptionForm">
                    <div className="inscriptionForm__inputs">
                        <label htmlFor="firstName" className="inscriptionForm__label">Votre nom</label>
                        <input onChange={handleSignUpChange} type="text" name="firstName" className="inscriptionForm__input" />

                        <label htmlFor="lastName" className="inscriptionForm__label">Votre prénom</label>
                        <input onChange={handleSignUpChange} type="text" name="lastName" className="inscriptionForm__input" />

                        <label htmlFor="email" className="inscriptionForm__label">Votre adresse mail</label>
                        <input onChange={handleSignUpChange} type="email" name="email" className="inscriptionForm__input" />

                        <label htmlFor="password" className="inscriptionForm__label">Choisissez un mot de passe</label>
                        <input onChange={handleSignUpChange} type="password" name="password" className="inscriptionForm__input" />

                        <label htmlFor="passwordConfirmation" className="inscriptionForm__label">Réécrivez le mot de passe</label>
                        <input onChange={handleSignUpChange} type="password" name="passwordConfirmation" className="inscriptionForm__input" />
                        {signUpError && <p className="signUpError"> {signUpError}</p>}

                    </div>
                    <button 
                        type="submit" 
                        value="submit"
                        className="sign__up__submit__button"
                        onClick={() => {
                            checkPassword();
                            navigation("/confirmation_inscription");
                            }
                    }
                        
                        onChange={handleSignUpChange}
                    >
                        S'INSCRIRE 
                    </button>
                </form>

            </div>
        </div>
    );
}


export default SignUp;