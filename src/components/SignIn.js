import {useState} from "react";
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
import './SignIn.css';

// const baseURL = "http://localhost:8080/users";

const SignIn = () => {

    const [isLoading, setIsLoading] = useState(false);

    // const navigation = useNavigate(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    // const [passwordConfirmation, setPasswordConfirmation] = useState(null);
    const [first_name, setFirstName] = useState(null);
    const [last_name, setLastName] = useState(null);

    const handleSignUpSubmit = (event) => {

        // Here we want the loading state to be true;
        setIsLoading(true);

    //     event.preventDefault();
        const user = {first_name, last_name, email, password}
    //     console.log(user);

    //     fetch('http://localhost:8080/create-user', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json'},
    //         body: JSON.stringify(user)
    //     }).then(()=> {
    //         console.log(`The user ${user.first_name} ${user.last_name}exists: connection!`)

    //         // Here we want the loading state to be false;
    //         setIsLoading(false);
    //     }).then(() => {
    //         navigation("/profil:id")
    //     })
    };

 
    
    return (
        <div>
            
            <h1 className="title__connexion">Connexion</h1>
            <p className="p__connexion">
                Connectez-vous pour accéder à votre profil, prendre ou consulter vos rendez-vous avec le coup de main numérique:
            </p>
            <div className="sign__in">

                <form 
                    onSubmit={handleSignUpSubmit} 
                    className="connexionForm">
                    <div className="connexionForm__inputs">

                        <label htmlFor="email" className="connexionForm__label">Tapez votre identifiant</label>
                        <input 
                            onChange={(e)=> setEmail(e.target.value)} 
                            type="email" 
                            name="email" 
                            className="connexionForm__input" />

                        <label htmlFor="password" className="connexionForm__label">Tapez votre mot de passe</label>
                        <input 
                            onChange={(e)=> setPassword(e.target.value)} 
                            type="password" 
                            name="password" 
                            className="connexionForm__input" />

                        <label htmlFor="message" className="connexion_message__label">( Votre identifiant est votre adresse mail )</label>
                    </div>


                    {/* <button 

                    //     onClick={() => {
                    //         // checkPassword();
                    //         // navigation("/confirmation_connexion");
                    //         // alert(`L'utilisateur créé est:  ${user.firstName} ${user.lastName}`);
                    //         // createUser();
                    //         }
                    // }
                        
                        // onChange={handleSignUpChange}
                    >
                        
                    </button> */}

                    {/* If the loading state is false, show that button*/}
                    {!isLoading && 
                    <button
                        type="submit" 
                        value="submit"
                        className="sign__in__submit__button"
                    >
                         SE CONNECTER
                    </button>}

                    {/* Here we disable the button as the New User is being created, is loading is true */}
                    {isLoading && <button disabled>
                        ENVOI EN COURS ...
                    </button>}
                </form>

            </div>
        </div>
    );
}


export default SignIn;