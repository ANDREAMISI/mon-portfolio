import React from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';
import { GrProjects } from 'react-icons/gr';
import { PiReadCvLogoFill } from 'react-icons/pi';
import { MdOutlineRoundaboutRight } from 'react-icons/md';
import { FaHome} from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import profil from '../assets/profil.jpg';

import './CV.css';

const ProfessionalCV = () => {
  // Données personnelles
  const personalInfo = {
    name: 'ANDRE AMISI RICHARD',
    title: 'Développeur Web Front-end',
    location: 'Kamituga / RDC',
    email: 'andreamisi541@gmail.com',
    phone: '+243978352541',
    linkedin: 'ANDRE AMSI',
    github: 'ANDREAMISI',
    portfolio: 'https://github.com/ANDREAMISI/Portfolio'
  };

  // Compétences techniques
  const skills = {
    languages: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    frameworks: ['Laravel', 'React', 'Tailwind'],
    databases: ['MySQL'],
    tools: ['Git', 'GitHub', 'Figma', 'VS Code']
  };

  // Expériences / Projets
  const projects = [
    {
      name: 'PlatformBoy',
      period: '17/11/2024 - 24/11/2024',
      description: 'Un site web (Portfolio) pour un promoteur digital et spécialiste IT basé au Burundi. Il aide les créateurs de contenu, artistes et entreprises à augmenter leur visibilité sur les plateformes sociales.',
      result: 'https://platform-boy.onrender.com'
    },
    {
      name: 'Skystore',
      period: '30/11/2025 - 02/12/2025',
      description: 'Une boutique en ligne réalisée avec l\'API Fakestore lors de la formation à Skynet-Burundi (boursier Talent4StartUp - Digital Africa).',
      result: 'https://richardandreamisi.github.io/SkyStore'
    },
    {
      name: 'SkyMovie',
      period: '02/02/2026 - 05/02/2026',
      description: 'Clone de Disney utilisant TMDB API - Projet de formation Skynet-Burundi (Talent4StartUp).',
      result: 'https://github.com/ANDREAMISI/SkyMovie'
    },
    {
      name: 'Whitepace',
      period: '05/11/2025 - 07/11/2025',
      description: 'Site web statique réalisé après l\'apprentissage HTML/CSS à Skynet-Burundi.',
      result: 'https://andreamisi.github.io/whitepace'
    },
    {
      name: 'Application de gestion des contacts',
      period: '29/01/2025 - 30/01/2025',
      description: 'Application web React développée durant la formation React.js à Skynet-Burundi.',
      result: 'https://github.com/ANDREAMISI/Gestion-des-contacts'
    },
    {
      name: 'SkyGame',
      period: '01/06/2024',
      description: 'Exercices JavaScript - Projet d\'apprentissage.',
      result: 'https://andreamisi.github.io/EXERCICES-JS/'
    },
    {
      name: 'Ets Super_service',
      period: '15/01/2026 - 20/01/2026',
      description: 'Site web pour une entreprise au Congo - Projet collaboratif avec Narcis et Gisèle (SkyNet-Burundi).',
      result: null
    },
    {
      name: 'PAO (Partage des Aliments et Objets)',
      period: '07/11/2024 - Présent',
      description: 'Plateforme de partage d\'aliments et d\'objets pour réduire le gaspillage. Développée en PHP procédural.',
      result: 'https://github.com/ANDREAMISI/PAO3'
    },
    {
      name: 'RealStore',
      period: '07/02/2026 - Présent',
      description: 'Version originale de SkyStore avec backend complet (PHP, Laravel, Tailwind, MySQL, JavaScript).',
      result: 'https://github.com/ANDREAMISI/Realstore'
    }
  ];

  // Éducation
  const education = [
    {
      degree: 'Certificat d\'étude Primaire',
      institution: 'EP KELE',
      period: '2009-2015',
      location: 'Kamituga, Sud-Kivu/RDC'
    },
    {
      degree: 'Diplôme d\'Etat (Commercial et Gestion)',
      institution: 'Institut Sanganyi',
      period: '2015-2021',
      location: 'Kamituga, Sud-Kivu/RDC'
    },
    {
      degree: 'Baccalauréat en Génie et Gestion des Télécommunications - Sécurité des systèmes',
      institution: 'Université Espoir D\'Afrique',
      period: '2023-2026',
      location: 'Bujumbura/Burundi'
    },
    {
      degree: 'Master en cours',
      institution: 'Université Espoir D\'Afrique',
      period: '2026-Présent',
      location: 'Bujumbura/Burundi'
    }
  ];

  // Formations
  const trainings = [
    { name: 'Programmation web (HTML, CSS, Tailwind, PHP, Laravel)', organization: 'Fongolab', period: '01/02/2024 - 21/12/2024', location: 'Hope Africa University' },
    { name: 'Let\'s learn English Level 1', organization: 'Ambassade des États-Unis', period: '01/02/2025 - 01/05/2025', location: '' },
    { name: 'Let\'s learn English Level 2', organization: 'Ambassade des États-Unis', period: '01/05/2025 - 01/08/2025', location: '' },
    { name: 'Basic IT', organization: 'Ambassade des États-Unis', period: '01/08/2025 - 01/11/2025', location: '' },
    { name: 'Videography and photography', organization: 'American corner Kamenge', period: '29/12/2024 - 31/12/2024', location: '' },
    { name: 'Advanced IT', organization: 'Ambassade des États-Unis', period: '01/11/2025 - 02/02/2026', location: '' },
    { name: 'Personal development (Seven habits)', organization: 'Ambassade des États-Unis', period: '01/11/2025 - 02/02/2026', location: '' },
    { name: 'Développement web fullstack', organization: 'SkyNet-Burundi (Talent4StartUp - Digital Africa)', period: '01/08/2025 - 21/02/2026', location: 'Kigobe/Bujumbura' }
  ];

  // Langues
  const languages = [
    { name: 'Français', level: 'courant' },
    { name: 'Anglais', level: 'intermédiaire' },
    { name: 'Swahili / Lingala', level: 'natif' }
  ];

  return (
    <div className="cv-container">
      {/* Header avec photo de profil */}
      <header className="cv-header">
        <div className="cv-header-content">
          {/* Zone photo de profil modifiable */}
          <div className="profile-photo-container">
            <div className="profile-photo-placeholder">
              <span><img src={profil} alt="Profil" className="profile-photo" /></span>
            </div>
            <div className="photo-overlay">
              <span>Modifier</span>
            </div>
          </div>
          
          {/* Informations principales */}
          <div className="personal-info">
            <h1 className="cv-name">{personalInfo.name}</h1>
            <p className="cv-title">{personalInfo.title}</p>
            
            <div className="contact-info">
              <span className="contact-item">
                <MdLocationOn className="icon" /> {personalInfo.location}
              </span>
              <span className="contact-item">
                <MdEmail className="icon" /> {personalInfo.email}
              </span>
              <span className="contact-item">
                <MdPhone className="icon" /> {personalInfo.phone}
              </span>
            </div>
            
            <div className="social-info">
              <span className="social-item">
                <i className="icon">in</i> {personalInfo.linkedin}
              </span>
              <span className="social-item">
                <FaGithub className="icon" /> {personalInfo.github}
              </span>
              <span className="social-item">
                <MdContactPhone className="icon" /> Portfolio
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Profil professionnel */}
      <section className="cv-section">
        <h2 className="section-title">
          <IoPersonAdd className="section-icon" /> Profil professionnel
        </h2>
        <p className="profile-text">
          Développeur web junior passionné avec une capacité d'<span className="highlight">apprentissage rapide</span>. 
          Formé aux technologies modernes du web (HTML, CSS, JavaScript, React, Laravel) à travers des programmes intensifs 
          comme Talent4StartUp. Capable de m'adapter rapidement à de nouveaux environnements et outils. Motivé à contribuer 
          à des projets innovants tout en continuant à développer mes compétences. Expérimenté dans la réalisation de projets 
          concrets allant du site vitrine à l'application full-stack.
        </p>
      </section>

      {/* Compétences techniques */}
      <section className="cv-section">
        <h2 className="section-title">
          <i className="section-icon">💻</i> Compétences techniques
        </h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Langages :</h3>
            <p>{skills.languages.join(' • ')}</p>
          </div>
          <div className="skill-category">
            <h3>Frameworks :</h3>
            <p>{skills.frameworks.join(' • ')}</p>
          </div>
          <div className="skill-category">
            <h3>Bases de données :</h3>
            <p>{skills.databases.join(' • ')}</p>
          </div>
          <div className="skill-category">
            <h3>Outils :</h3>
            <p>{skills.tools.join(' • ')}</p>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section className="cv-section">
        <h2 className="section-title">
          <GrProjects className="section-icon" /> Projets récents
        </h2>
        <div className="projects-grid">
          {projects.map((proj, idx) => (
            <div key={idx} className="project-card">
              <div className="project-header">
                <h3 className="project-name">{proj.name}</h3>
                <span className="project-period">{proj.period}</span>
              </div>
              <p className="project-description">{proj.description}</p>
              {proj.result && (
                <a 
                  href={proj.result} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="project-link"
                >
                  🔗 Voir le projet
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Éducation */}
      <section className="cv-section">
        <h2 className="section-title">
          <i className="section-icon">🎓</i> Parcours académique
        </h2>
        <div className="education-list">
          {education.map((edu, idx) => (
            <div key={idx} className="education-item">
              <h3>{edu.degree}</h3>
              <p className="education-details">
                {edu.institution} | {edu.period} | {edu.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Formations */}
      <section className="cv-section">
        <h2 className="section-title">
          <i className="section-icon">📚</i> Formations
        </h2>
        <div className="trainings-grid">
          {trainings.map((train, idx) => (
            <div key={idx} className="training-card">
              <h3>{train.name}</h3>
              <p className="training-details">
                {train.organization} | {train.period}
              </p>
              {train.location && (
                <p className="training-location">{train.location}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Langues */}
      <section className="cv-section">
        <h2 className="section-title">
          <i className="section-icon">🗣️</i> Langues
        </h2>
        <div className="languages-list">
          {languages.map((lang, idx) => (
            <div key={idx} className="language-item">
              <span className="language-name">{lang.name} :</span>
              <span className="language-level">{lang.level}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProfessionalCV;
