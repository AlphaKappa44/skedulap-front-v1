import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__links">
                <h1 className="footer__link__title">
                    NOTRE COMBAT
                </h1>
                <p>
                    Qui sommes nous
                </p>
                <p>
                    F.a.q.
                </p>
            </div>

            <div className="footer__links">
                <h1 className="footer__link__title">
                    CONTACT
                </h1>
                <p>
                    <p>
                        2 rue de Budapest <br/>
                        44000 Nantes 
                    </p>
                    <p>
                        06 71 33 57 42
                    </p>
                    <p>
                        contact@le-coup-de-main-numerique.org
                    </p>
                </p>
            </div>

            <div className="footer__links">
                <h1 className="footer__link__title">
                    RESEAUX SOCIAUX
                </h1>
                <a
                className="footer__link"
                href="https://www.linkedin.com/company/le-coup-de-main-num%C3%A9rique/"
                target="_blank"
                rel="noopener noreferrer"
            >
                LinkedIn
                </a>
                <a
                className="footer__link"
                href="https://le-coup-de-main-numerique.org/"
                target="_blank"
                rel="noopener noreferrer"
            >
                https://le-coup-de-main-numerique.org/
            </a>
            </div>
        </div>
    );
}

export default Footer;