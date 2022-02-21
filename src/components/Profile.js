import React, {useState} from "react";
import { useContext } from "react";
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
import './Profile.css';

import {  userContext } from "../context/UserContext";


// const baseURL = "http://localhost:8080/users";

const Profile = () => {

    const { user, setUser } = useContext(userContext);
    const today = new Date(Date.UTC(2022, 3, 27, 3, 0, 0));
    const nextAppointment= new Date(Date.now());
    console.log(nextAppointment.toLocaleDateString());
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const [isLoading, setIsLoading] = useState(false);

    // const navigation = useNavigate(null);
    // const [email, setEmail] = useState('john.dom@lcdmn.org');
    // const [password, setPassword] = useState(null);
    // const [passwordConfirmation, setPasswordConfirmation] = useState(null);
    // const [first_name, setFirstName] = useState('John');
    // const [last_name, setLastName] = useState('Dom');

    //     const user = {
    //     email: setEmail,
    //     password: password,
    //     first_name:first_name,
    //     last_name: last_name
    //   };

    const handleSubmit = (event) => {

        // Here we want the loading state to be true;
        setIsLoading(true);

        event.preventDefault();
        // const user = {setFirstName, last_name, email, password};
        // console.log(user);

    };

 
    
    return (
        <div className="connexion">

            <h1 className="title__connexion">
                Votre profil:
            </h1>

            <div className="contact">
        
                <p>
                    Nous sommes le {nextAppointment.toLocaleDateString('fr-FR', options)}
                </p> 

                <p className="p__connexion">
                    
                    Nom: { user.first_name } <br />
                    Prénom: { user.last_name } <br />
                    Email: { user.email }
                </p>
                <p>
                    Cliquez-ici pour modifier votre email
                </p>             
            </div >

            <div className="my__appointments">
                <h3 className="appointments__title">
                    Votre prochain rendez-vous:
                </h3>
                <p className="appointment">
                    - le {today.toLocaleDateString('fr-FR', options)}
                    
                </p>
                <h3 className="appointments__title">
                    Vos rendez-vous précédents:
                </h3>
                <ul className="old__appointments">
                    <li className="old__appointment">
                        31 Janvier 2022
                    </li>
                    <li className="old__appointment">
                        14 Février 2022
                    </li>
                </ul>

            </div>

                {/* If the loading state is false, show that button*/}
                {!isLoading && 
                <button
                    onSubmit={handleSubmit}
                    type="submit" 
                    value="submit"
                    className="sign__in__submit__button"
                >
                        RETOUR A LA PAGE D'ACCUEIL
                </button>}

                {/* Here we disable the button as the New User is being created, is loading is true */}
                {isLoading && <button disabled>
                    ENVOI EN COURS ...
                </button>}

        </div>
    );
}


export default Profile;