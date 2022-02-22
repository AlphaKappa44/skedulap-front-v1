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
        console.log(`Je suis dans le handleSignUpSubmit: ${user.first_name} ${user.last_name}`);

        fetch('http://localhost:8080/create-user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then(()=> {
            console.log(`The new user ${user.first_name} ${user.last_name} was added to the database!`)
            setUser(user);
            console.log(`Je suis dans le .then: ${user.first_name} ${user.last_name}`);
            // Here we want the loading state to be false;
            setIsLoading(false);
            if (
                !user.first_name ||
                !user.last_name ||
                !user.email ||
                !user.password ||
                !user.passwordConfirmation
              ) return (
                <div> 
                All the fields inside the form need to be filled in !
                {navigation("/formulaire_inscription")}
                </div>
              )
        })
        .catch((err) => {
            console.log(err.message);
        }).then(() => {
            setUser(user);
            
            console.log(user.email);
            console.log(user.password);
            navigation("/confirmation_inscription")
        })
    };

    // const checkPassword = () => {
    //     const password = user.password;
    //     const passwordConfirmation = user.passwordConfirmation;
    //     if (password !== passwordConfirmation) { 
    //         alert ('La confirmation de mot de passe est différent du mot de passe - Veuillez entrer un mot de passe et le confirmer');
    //         console.log(password);
    //         console.log(passwordConfirmation);
    //     }
    //      else {
    //         console.log(password);
    //         console.log(passwordConfirmation);
    //     }
    // };



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
                    {/* <button 

                    //     onClick={() => {
                    //         // checkPassword();
                    //         // navigation("/confirmation_inscription");
                    //         // alert(`L'utilisateur créé est:  ${user.firstName} ${user.lastName}`);
                    //         // createUser();
                    //         }
                    // }
                        
                        // onChange={handleSignUpChange}
                    >
                        
                    </button> */}
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