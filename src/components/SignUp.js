import {useState} from "react";
// import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './SignUp.css';

// const baseURL = "http://localhost:8080/users";

const SignUp = () => {

    const navigation = useNavigate(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordConfirmation, setPasswordConfirmation] = useState(null);
    const [first_name, setFirstName] = useState(null);
    const [last_name, setLastName] = useState(null);

    const handleSignUpSubmit = (event) => {
        event.preventDefault();
        const user = {first_name, last_name, email, password, passwordConfirmation}
        console.log(user);

        fetch('http://localhost:8080/create-user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }).then(()=> {
            console.log('The new user was added to the database!')
        })
    };

    // console.log('Typing out', user);
   
    // const createUser = () => {
    //     axios.post(baseURL, {
            
    //         email: "tonmail.fr",
    //         password: "pas_de_ouf",
    //         first_name: "bouba",
    //         last_name: "olee"
    //         })
    // }


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


    // const handleSignUpChange = (event) => {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setUser({...user, [name]: value});
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
                    <button 
                        type="submit" 
                        value="submit"
                        className="sign__up__submit__button"
                        onClick={() => {
                            // checkPassword();
                            // navigation("/confirmation_inscription");
                            // alert(`L'utilisateur créé est:  ${user.firstName} ${user.lastName}`);
                            // createUser();
                            }
                    }
                        
                        // onChange={handleSignUpChange}
                    >
                        S'INSCRIRE 
                    </button>
                </form>

            </div>
        </div>
    );
}


export default SignUp;