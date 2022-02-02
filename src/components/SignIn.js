import {useState} from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './SignIn.css';

// const baseURL = "http://localhost:8080/users";

const SignIn = () => {

    // const { email } = useParams();

    const [isLoading, setIsLoading] = useState(false);
    // const [loggedIn, setLoggedIn] = useState(false);

    const navigation = useNavigate(null);
    const [email, setEmail] = useState(null);
    const [first_name, setFirstName] = useState("utilisateur lambda");
    const [last_name, setLastName] = useState('User Alpha');
    const [password, setPassword] = useState(null);

    const handleSignInSubmit = (event) => {

        // Here we want the loading state to be true;
        setIsLoading(true);

        event.preventDefault();
        const user = {email, password, first_name, last_name}
        console.log(user);
        
        axios.get(`http://localhost:8080/user/${email}`, {
            params: {
              email: setEmail,
              password: setPassword,
              first_name: setFirstName,
              last_name: setLastName,
            }
          }) 
          .then(function (response) {
            console.log(response.data);
            console.log("password: " + password);
            console.log("response.data: " + response.data.password)
            console.log(response.data.first_name + " " + response.data.last_name);
            response.data.first_name = setFirstName
            response.data.last_name = setLastName
            if (password !== response.data.password || email !== response.data.email) {
                console.log("password does not match!!")
            }
            response.data.first_name = setFirstName
            navigation(`/profil/${ response.data.id }`)
          })
          .catch(err => {
            console.log(err.message);
        })
 
    };

    return (
        <div>
            
            <h1 className="title__connexion">Connexion</h1>
            <p className="p__connexion">
                Connectez-vous pour accéder à votre profil, prendre ou consulter vos rendez-vous avec le coup de main numérique:
            </p>
            <div className="sign__in">

                <form 
                    onSubmit={handleSignInSubmit} 
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