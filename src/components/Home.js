import React from 'react'
import { Link } from "react-router-dom";
import './Home.css';


const Home = () => {

    return (
        <div className="home">

            <h1 className="home__img">La plateforme de rendez-vous du coup de main numérique</h1>

            <p className="home__p">
                Vous êtes sur la plateforme de prise de rendez-vous du coup de main numérique <br />
                Vous souhaitez obtenir une aide pour vos démarches en ligne? <br />
                Vous avez besoin d'un accompagnement? Vous êtes au bon endroit. <br />
                Inscrivez-vous maintenant ou contactez l'antenne la plus proche de chez vous <br />
            </p>

            <Link to="/formulaire_inscription">
                <button 
                    type="submit"
                    className="home__button"
                >
                    S'INSCRIRE
                </button>
            </Link>

        </div>

    );
}

export default Home;
