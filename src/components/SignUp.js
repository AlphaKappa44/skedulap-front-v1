import React from 'react';
import './SignUp.css';

const SignUp = ({
    handleSignUpChange,
    handleSignUpSubmit,
    signUpError,
}) => {
    return (
        <div>
            <h1 className="title__inscription">Inscription</h1>
            <p className="p__inscription">
                Inscrivez-vous pour prendre rendez-vous avec le coup de main numérique:
            </p>
            <div className="sign__up">

                <form onSubmit={handleSignUpSubmit} className="inscriptionForm">
                    <div className="inscriptionForm__inputs">
                        <label htmlFor="email" className="inscriptionForm__label">Votre nom</label>
                        <input onChange={handleSignUpChange} type="text" name="nickname" className="inscriptionForm__input" />

                        <label htmlFor="email" className="inscriptionForm__label">Votre prénom</label>
                        <input onChange={handleSignUpChange} type="text" name="nickname" className="inscriptionForm__input" />

                        <label htmlFor="email" className="inscriptionForm__label">Votre adresse mail</label>
                        <input onChange={handleSignUpChange} type="email" name="email" className="inscriptionForm__input" />

                        <label htmlFor="password" className="inscriptionForm__label">Choisissez un mot de passe</label>
                        <input onChange={handleSignUpChange} type="password" name="password" className="inscriptionForm__input" />

                        <label htmlFor="passwordConfirmation" className="inscriptionForm__label">Réécrivez le mot de passe</label>
                        <input onChange={handleSignUpChange} type="password" name="signUpPasswordConfirmInput" className="inscriptionForm__input" />
                        {signUpError && <p className="signUpError"> {signUpError}</p>}

                    </div>
                    <button type="submit" className="sign__up__submit__button">S'INSCRIRE</button>
                </form>

            </div>
        </div>
    );
}

export default SignUp;