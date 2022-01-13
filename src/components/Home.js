import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigation = useNavigate();

  return (
    <div className="home">
      <h1 className="home__img">
        La plateforme de rendez-vous du coup de main numérique
      </h1>

      <p className="home__p">
        Vous êtes sur la plateforme de prise de rendez-vous du coup de main
        numérique <br />
        Vous souhaitez obtenir une aide pour vos démarches en ligne? <br />
        Vous avez besoin d'un accompagnement? Vous êtes au bon endroit. <br />
        Inscrivez-vous maintenant ou contactez l'antenne la plus proche de chez
        vous <br />
      </p>

      <button
        type="button"
        className="home__button"
        onClick={() => navigation("/formulaire_inscription")}
      >
        S'INSCRIRE
      </button>
    </div>
  );
};

export default Home;
