import React from 'react'
import './Home.css';
// import background_image from './../assets/images/background-image.jpg';

const Home = () => {
    return (
        <div className="home">

            <span className="home__img">La plateforme de rendez-vous du coup de main numérique</span>

            <p className="home__p">
                Vous êtes sur la plateforme de prise de rendez-vous du coup de main numérique <br />
                Vous souhaitez obtenir une aide pour vos démarches en ligne? <br />
                Vous avez besoin d'un accompagnement? Vous êtes au bon endroit. <br />
                Inscrivez-vous maintenant ou contactez l'antenne la plus proche de chez vous <br />
            </p>

            <button 
                className="home__button"
            >
                S'INSCRIRE
            </button>

        </div>

    );
}

export default Home;
