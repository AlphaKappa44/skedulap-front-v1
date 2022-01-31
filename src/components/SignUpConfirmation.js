import {useState} from "react";
import { Link } from "react-router-dom";
import './SignUpConfirmation.css';


const SignUpConfirmation = () => {
    const [isLoading, setIsLoading] = useState(false);

    // const navigation = useNavigate(null);
    const [email, setEmail] = useState('john.dom@lcdmn.org');
    const [password, setPassword] = useState(null);
    // const [passwordConfirmation, setPasswordConfirmation] = useState(null);
    const [first_name, setFirstName] = useState('John');
    const [last_name, setLastName] = useState('Dom');
    return (
        <div className="sign__up__confirmation">
            <h1>Inscription validée</h1>
            <p>N'oubliez pas votre mot de passe pour la fois prochaine!</p>

            <p> { first_name + " " + last_name }, votre profil a été créé.</p>
            <p>Votre identifiant est: {email}</p>
            
            
            <button type="submit" className="linkto__appointment__button">PRENDRE RENDEZ-VOUS</button>
            <Link to="/profil">
                <button type="submit" className="linkto__profil__button">VOIR MON PROFIL</button>
            </Link>
            <div className="sign__up">

            </div>
        </div>
    );
}

export default SignUpConfirmation;