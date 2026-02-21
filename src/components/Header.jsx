import React, { useState, useEffect } from 'react';
import { FaHome} from "react-icons/fa";
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { PiReadCvLogoFill } from "react-icons/pi";
import { MdContactPhone } from "react-icons/md";

import './Header.css';

const Header = ({ setCurrentPage, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Accueil', icon: <FaHome /> },
    { id: 'about', label: 'À propos', icon:  <MdOutlineRoundaboutRight />},
    { id: 'skills', label: 'Compétences', icon: <GiSkills /> },
    { id: 'projects', label: 'Projets', icon: <GrProjects /> },
    { id: 'cv', label: 'CV', icon: <PiReadCvLogoFill /> },
    { id: 'contact', label: 'Contact', icon: <MdContactPhone /> }
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={() => setCurrentPage('home')}>
          <span className="logo-text">ANDRE AMISI</span>
          <span className="logo-dot">.</span>
        </div>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {navItems.map(item => (
              <li key={item.id} className="nav-item">
                <button
                  className={`nav-link ${currentPage === item.id ? 'active' : ''}`}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
