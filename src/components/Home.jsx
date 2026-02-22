import React from 'react';
import profil from '../assets/profil.jpg';  
import { Helmet } from 'react-helmet';
import './Home.css';

const Home = ({ setCurrentPage }) => { 

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Helmet>
        <title>Accueil | ANDRE AMISI RICHARD - Développeur Web</title>
        <meta name="description" content="Portfolio de ANDRE AMISI RICHARD, développeur web front-end basé à Bujumbura. Découvrez mes projets React, Laravel et mon parcours." />
        <meta name="keywords" content="développeur web, front-end, React, Laravel, Bujumbura, Burundi, portfolio" />
        <meta property="og:title" content="ANDRE AMISI RICHARD - Développeur Web Front-end" />
        <meta property="og:description" content="Portfolio et CV de ANDRE AMISI RICHARD, développeur web basé à Bujumbura" />
        <meta property="og:image" content="/profil.jpg" />
      </Helmet>

      <div className="home fade-in">
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              Bonjour, je suis <span className="highlight">ANDRE AMISI RICHARD</span>
            </h1>
            <h2 className="hero-subtitle">
              Développeur Web Front-end passionné
            </h2>
            <p className="hero-description">
              Basé à Bujumbura / Burundi, je crée des expériences web modernes et responsives 
              avec une capacité d'apprentissage rapide.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary" 
                onClick={() => handleNavigation('projects')}  
              >
                Voir mes projets
              </button>
              <button 
                className="btn btn-outline" 
                onClick={() => handleNavigation('contact')}  
              >
                Me contacter
              </button>
            </div>
          </div>
          <div className="hero-image">
            <div className="profile-circle">
              <img src={profil} alt="Profil" />
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-item">
            <span className="stat-number">9+</span>
            <span className="stat-label">Projets réalisés</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">8</span>
            <span className="stat-label">Certifications</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Années d'études</span>
          </div>
        </div>

        <div className="featured-section">
          <h3 className="section-subtitle">Technologies maîtrisées</h3>
          <div className="tech-cloud">
            <span className="tech-item">React</span>
            <span className="tech-item">Laravel</span>
            <span className="tech-item">JavaScript</span>
            <span className="tech-item">PHP</span>
            <span className="tech-item">HTML5</span>
            <span className="tech-item">CSS3</span>
            <span className="tech-item">Tailwind</span>
            <span className="tech-item">MySQL</span>
            <span className="tech-item">Git</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
