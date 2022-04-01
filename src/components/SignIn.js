import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../context/UserContext";

import axios from "axios";
import "./SignIn.css";

const SignIn = () => {

  const { user, setUser } = useContext(userContext);

  const [isLoading, setIsLoading] = useState(false);
  // const [isAuthentified, setIsAuthentified] = useState(false);

  const navigation = useNavigate(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSignInSubmit = (event) => {
    // Here we want the loading state to be true;
    setIsLoading(true);

    event.preventDefault();

    console.log(user);

    axios
      .post(`http://localhost:8080/user/login`, {
        email,
        password

      }) 
      .then(function (response) {
       
        setUser(response.data.user); 
        // console.log(response.data);
        // console.log("password just typed: " + password);
        // console.log(`password from db(response.data):  ${response.data.user.password}`);
        console.log(`coresponding to that user: ${response.data.user.first_name}  ${response.data.user.last_name}`);

         
        // console.log(user.password);
        // console.log("Réponse du serveur: ")
        // console.log(response.data.user.password)
        
        // if (jwt=true) {setIsAuthentified(true)}

        navigation(`/profil/${response.data.user.email}`);
      
      })
      .catch((err) => {
        console.log("catch error")
        if (
          err 
        ) {
          
          console.log("User not found");
          console.log(err.response);
          console.log(err.stack);
          setIsLoading(false);

          
          // navigation("/connexion");
        }
        if (
          !email ) {
          console.log(7)
          console.log("Email field cannot be empty!")
          setIsLoading(false);
          }
        if (
          !password ) {
          console.log(8)
          console.log("Password and confirmation fields cannot be empty!")
          setIsLoading(false);
        } 
        
      });
  };  

  return (
    <div>
      
      <h1 className="title__connexion">Connexion</h1>
      <p className="p__connexion">
        Connectez-vous pour accéder à votre profil, prendre ou consulter vos
        rendez-vous avec le coup de main numérique:
      </p>
      <div className="sign__in">
        <form onSubmit={handleSignInSubmit} className="connexionForm">
          <div className="connexionForm__inputs">
            <label htmlFor="email" className="connexionForm__label">
              Tapez votre identifiant
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              className="connexionForm__input"
            />

            <label htmlFor="password" className="connexionForm__label">
              Tapez votre mot de passe
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              className="connexionForm__input"
            />

            <label htmlFor="message" className="connexion_message__label">
              ( Votre identifiant est votre adresse mail )
            </label>
          </div>

        
          {!isLoading && (
            <button
              type="submit"
              value="submit"
              className="sign__in__submit__button"
            >
              SE CONNECTER
            </button>
          )}

          {/* Here we disable the button as the New User is being created, is loading is true */}
          {isLoading && <button disabled>ENVOI EN COURS ...</button>}

        </form>
      
      </div>
    </div>
  );
};

export default SignIn;
