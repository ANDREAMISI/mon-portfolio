import React from 'react';
import { Helmet } from 'react-helmet';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import './About.css';

const About = () => {
  const education = [
    {
      degree: 'Master en cours - Sécurité des systèmes',
      school: 'Université Espoir D\'Afrique',
      period: '2026 - Présent',
      location: 'Bujumbura/Burundi'
    },
    {
      degree: 'Baccalauréat - Génie et Gestion des Télécommunications',
      school: 'Université Espoir D\'Afrique',
      period: '2023 - 2026',
      location: 'Bujumbura/Burundi'
    },
    {
      degree: 'Diplôme d\'Etat (Commercial et Gestion)',
      school: 'Institut Sanganyi',
      period: '2015 - 2021',
      location: 'Kamituga, Sud-Kivu/RDC'
    }
  ];

  const trainings = [
    {
      name: 'Développement web fullstack',
      organization: 'SkyNet-Burundi (Talent4StartUps)',
      period: '2025 - 2026'
    },
    {
      name: 'Programmation web',
      organization: 'Fongolab',
      period: '2024'
    },
    {
      name: 'Advanced IT & Personal Development',
      organization: 'Ambassade des États-Unis',
      period: '2025 - 2026'
    }
  ];

  const languages = [
    { name: 'Français', level: 'Courant', percentage: 95 },
    { name: 'Anglais', level: 'Intermédiaire', percentage: 65 },
    { name: 'Swahili', level: 'Natif', percentage: 100 },
    { name: 'Lingala', level: 'Natif', percentage: 100 }
  ];

  return (
    <>
      <Helmet>
        <title>À propos | ANDRE AMISI RICHARD</title>
        <meta name="description" content="Découvrez le parcours de ANDRE AMISI RICHARD : formations, compétences linguistiques, certifications et objectifs professionnels." />
        <meta name="keywords" content="à propos, parcours, formations, langues, certifications, développeur web, Bujumbura" />
      </Helmet>

      <div className="about fade-in">
        <h1 className="page-title">À propos de moi</h1>
        
        <div className="about-grid">
          <div className="about-card bio-card">
            <h2>Qui suis-je ?</h2>
            <p>
              Développeur web junior passionné, basé à Bujumbura (Burundi), avec une capacité 
              d'apprentissage rapide et une forte motivation pour créer des solutions web innovantes.
            </p>
            <p>
              Actuellement étudiant en Master à l'Université Espoir D'Afrique, je combine 
              mes études avec le développement de projets concrets pour améliorer mes compétences.
            </p>
            <div className="personal-details">
              <div className="detail-item">
                <span className="detail-label"><MdEmail className="contact-icon" /> Email:</span>
                <span>andreamisi541@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label"><MdPhone className="contact-icon" /> Téléphone:</span>
                <span>+243978352541</span>
              </div>
              <div className="detail-item">
                <span className="detail-label"><MdLocationOn className="contact-icon" /> Localisation:</span>
                <span>Kamituga / RDC</span>
              </div>
            </div>
          </div>

          <div className="about-card stats-card">
            <h2>En chiffres</h2>
            <div className="stats-grid">
              <div className="stat-box">
                <span className="stat-big">9+</span>
                <span>Projets</span>
              </div>
              <div className="stat-box">
                <span className="stat-big">8</span>
                <span>Certifications</span>
              </div>
              <div className="stat-box">
                <span className="stat-big">3</span>
                <span>Langues</span>
              </div>
              <div className="stat-box">
                <span className="stat-big">2+</span>
                <span>Années d'études</span>
              </div>
            </div>
          </div>
        </div>

        <div className="timeline-section">
          <h2>Parcours académique</h2>
          <div className="timeline">
            {education.map((edu, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3>{edu.degree}</h3>
                  <p className="timeline-school">{edu.school}</p>
                  <p className="timeline-period">{edu.period} | {edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="trainings-section">
          <h2>Formations complémentaires</h2>
          <div className="trainings-grid">
            {trainings.map((training, index) => (
              <div key={index} className="training-card">
                <h3>{training.name}</h3>
                <p className="training-org">{training.organization}</p>
                <span className="training-period">{training.period}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="languages-section">
          <h2>Langues</h2>
          <div className="languages-grid">
            {languages.map((lang, index) => (
              <div key={index} className="language-item">
                <div className="language-header">
                  <span className="language-name">{lang.name}</span>
                  <span className="language-level">{lang.level}</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${lang.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;