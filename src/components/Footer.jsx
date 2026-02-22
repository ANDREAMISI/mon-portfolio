import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './Footer.css';

const Footer = ({ setCurrentPage }) => {  
  const currentYear = new Date().getFullYear();

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>ANDRE AMISI RICHARD</h3>
            <p>Développeur Web Front-end passionné, créant des expériences web modernes et responsives.</p>
          </div>

          <div className="footer-section">
            <h4>Navigation</h4>
            <ul className="footer-links">
              <li><button onClick={() => handleNavigation('home')}>Accueil</button></li>
              <li><button onClick={() => handleNavigation('about')}>À propos</button></li>
              <li><button onClick={() => handleNavigation('skills')}>Compétences</button></li>
              <li><button onClick={() => handleNavigation('projects')}>Projets</button></li>
              <li><button onClick={() => handleNavigation('cv')}>CV</button></li>
              <li><button onClick={() => handleNavigation('contact')}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li>📧 andreamisi541@gmail.com</li>
              <li>📞 +243978352541</li>
              <li>📍 Bujumbura, Burundi</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Suivez-moi</h4>
            <div className="footer-social">
              <a href="https://www.facebook.com/share/18U8CbtdUy/?mibextid=wwXIfr" className="social-link" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://x.com/andramisi454348?s=21" className="social-link" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav" className="social-link" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
              <a href="https://github.com/ANDREAMISI" className="social-link" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} ANDRE AMISI RICHARD. Tous droits réservés.</p>
          <p>Le numérique au service de l'innovation</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;