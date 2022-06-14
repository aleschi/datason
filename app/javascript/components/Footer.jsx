import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
	<footer className="fr-footer" role="contentinfo" id="footer">
	    <div className="fr-container">
	        <div className="fr-footer__body">
	            <div className="fr-footer__brand fr-enlarge-link">
	                
	                    <p className="fr-logo" title="république française">
	                        Ministère<br/>de l'économie,<br/>des finances<br/>et de la souveraineté<br/> industrielle et numérique
	                    </p>
	              
	            </div>
	            <div className="fr-footer__content">
	               
	                <ul className="fr-footer__content-list">
	                    <li className="fr-footer__content-item">
	                        <a className="fr-footer__content-link" href="https://economie.gouv.fr">economie.gouv.fr</a>
	                    </li>
	                    <li className="fr-footer__content-item">
	                        <a className="fr-footer__content-link" href="https://gouvernement.fr">gouvernement.fr</a>
	                    </li>
	                    <li className="fr-footer__content-item">
	                        <a className="fr-footer__content-link" href="https://budget.gouv.fr">budget.gouv.fr</a>
	                    </li>
	                    <li className="fr-footer__content-item">
	                        <a className="fr-footer__content-link" href="https://data.gouv.fr">data.gouv.fr</a>
	                    </li>
	                </ul>
	            </div>
	        </div>
	        <div className="fr-footer__bottom">
	            <ul className="fr-footer__bottom-list">
	                <li className="fr-footer__bottom-item">
	                    <Link to="/accessibilite" className="fr-footer__bottom-link">Accessibilité: partiellement conforme</Link>
	                </li>
	                <li className="fr-footer__bottom-item">
	                    <Link to="/mentions-legales" className="fr-footer__bottom-link">Mentions légales</Link>
	                </li>
	                <li className="fr-footer__bottom-item">
	                    <Link to="/donnees-personnelles" className="fr-footer__bottom-link">Données personnelles & Gestion des cookies</Link>
	                </li>
	                <li className="fr-footer__bottom-item">
	                  <button className="fr-footer__bottom-link fr-fi-theme-fill fr-link--icon-left" aria-controls="fr-theme-modal" data-fr-opened="false">Paramètres d'affichage</button>
	                </li>

	            </ul>
	            <div className="fr-footer__bottom-copy">
	                <p>Sauf mention contraire, tous les contenus de ce site sont sous <a href="https://github.com/etalab/licence-ouverte/blob/master/LO.md" target="_blank">licence etalab-2.0</a>
	                </p>
	            </div>
	        </div>
	    </div>
	</footer>

);

export default Footer;


