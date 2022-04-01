import {useState} from "react";
// import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/UserContext";

import './SignUp.css';

// const baseURL = "http://localhost:8080/users";

const SignUp = () => {
    const { user, setUser } = useContext(userContext);

    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigate(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordConfirmation, setPasswordConfirmation] = useState(null);
    const [first_name, setFirstName] = useState(null);
    const [last_name, setLastName] = useState(null);

    const handleSignUpSubmit = (event) => {

        // Here we want the loading state to be true;
        setIsLoading(true);

        event.preventDefault();
        const user = {first_name, last_name, email, password, passwordConfirmation}
        console.log(`handleSignUpSubmit: ${user.first_name} ${user.last_name}`);

        fetch('http://localhost:8080/create-user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then(()=> {
            if (
            !user.first_name ||
            !user.last_name ) {
            console.log("first_name and last_name need to be filled in!")
            setIsLoading(false);
            }
            else if (
            !user.email ) {
            console.log("Email field cannot be empty!")
            setIsLoading(false);
            }
            else if (
            !user.password ||
            !user.passwordConfirmation) {
            console.log("Password and confirmation fields cannot be empty!")
            setIsLoading(false);
            } 
            else if (user.password !== passwordConfirmation)
              {
               console.log("Password confirmation and password cannot be different!")
               setIsLoading(false);
            } else {
            setUser(user);
            console.log(`The new user ${user.first_name} ${user.last_name} was added to the database!`)
            console.log(`Je suis dans le .then: ${user.first_name} ${user.last_name}`);
            
            // Here we want the loading state to be false;
            navigation("/confirmation_inscription")
        }

        }).then(() => {
            
            console.log(`Email:  ${user.email}`);
            console.log(`First name:  ${user.first_name}`);
            
        }).catch((err) => {
            console.log(err.message);
        })
    };

    // const signUpError = "un message d'erreur ici";   
    
    return (
        <div>
            
            <h1 className="title__inscription">Inscription</h1>
            <p className="p__inscription">
                Inscrivez-vous pour prendre rendez-vous avec le coup de main numérique:
            </p>
            <div className="sign__up">

                <form 
                    onSubmit={handleSignUpSubmit} 
                    className="inscriptionForm">
                    <div className="inscriptionForm__inputs">

                        <label htmlFor="firstName" className="inscriptionForm__label">Votre nom</label>
                        <input 
                            onChange={(e)=> setFirstName(e.target.value)} 
                            type="text" 
                            name="firstName" 
                            className="inscriptionForm__input" />

                        <label htmlFor="lastName" className="inscriptionForm__label">Votre prénom</label>
                        <input 
                            onChange={(e)=> setLastName(e.target.value)} 
                            type="text" 
                            name="lastName" 
                            className="inscriptionForm__input" />

                        <label htmlFor="email" className="inscriptionForm__label">Votre adresse mail</label>
                        <input 
                            onChange={(e)=> setEmail(e.target.value)} 
                            type="email" 
                            name="email" 
                            className="inscriptionForm__input" />

                        <label htmlFor="password" className="inscriptionForm__label">Choisissez un mot de passe</label>
                        <input 
                            onChange={(e)=> setPassword(e.target.value)} 
                            type="password" 
                            name="password" 
                            className="inscriptionForm__input" />

                        <label htmlFor="passwordConfirmation" className="inscriptionForm__label">Réécrivez le mot de passe</label>
                        <input 
                            onChange={(e)=> setPasswordConfirmation(e.target.value)} 
                            type="password" 
                            name="passwordConfirmation" 
                            className="inscriptionForm__input" />
                        {/* {signUpError && <p className="signUpError"> {signUpError}</p>} */}

                    </div>

                    { (user.passwordConfirmation ) && 
                    <p>
                         Veillez à bien tout remplir!
                    </p>}
                    {/* If the loading state is false, show that button*/}
                    {!isLoading && 
                    <button
                        type="submit" 
                        value="submit"
                        className="sign__up__submit__button"
                    >
                         S'INSCRIRE 
                    </button>}

                    {/* Here we disable the button as the New User is being created, isLoading is true */}
                    {  isLoading
                        && 
                    <button 
                        disabled
                    >
                        ENVOI EN COURS ...
                    </button>}
                </form>

            </div>
        </div>
    );
}


export default SignUp;