import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { IoPersonAdd } from 'react-icons/io5';
import { PiReadCvLogoFill } from 'react-icons/pi';
import { GrProjects } from 'react-icons/gr';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineRoundaboutRight } from 'react-icons/md';
import { FaHome} from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
              <li><button onClick={() => document.querySelector('[data-page="home"]')?.click()}>Accueil</button></li>
              <li><button onClick={() => document.querySelector('[data-page="about"]')?.click()}>À propos</button></li>
              <li><button onClick={() => document.querySelector('[data-page="projects"]')?.click()}>Projets</button></li>
              <li><button onClick={() => document.querySelector('[data-page="contact"]')?.click()}>Contact</button></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="footer-contact">
              <li><MdEmail className="contact-icon" /> andreamisi541@gmail.com</li>
              <li><MdPhone className="contact-icon" /> +243978352541</li>
              <li><MdLocationOn className="contact-icon" /> Bujumbura, Burundi</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Suivez-moi</h4>
            <div className="footer-social">
              <a href="https://www.facebook.com/share/18U8CbtdUy/?mibextid=wwXIfr" className="social-link"><FaFacebookF /></a>
              <a href="https://x.com/andramisi454348?s=21" className="social-link"><FaTwitter /></a>
              <a href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav" className="social-link"><FaLinkedinIn /></a>
              <a href="https://github.com/ANDREAMISI" className="social-link"><FaGithub /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} ANDRE AMISI RICHARD. Tous droits réservés.</p>
          <p>Designé avec  en RDC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
