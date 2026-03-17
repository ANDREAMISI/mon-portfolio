import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      name: 'RealStore',
      period: '07/02/2026 - Présent',
      description: 'Plateforme e-commerce complète avec backend personnalisé. Utilisation de Laravel, Tailwind CSS, MySQL et JavaScript pour une expérience d\'achat fluide.',
      technologies: ['Laravel', 'Tailwind', 'MySQL', 'JavaScript'],
      link: 'https://github.com/ANDREAMISI/Realstore',
      image: '🛍️',
      category: 'fullstack'
    },
    {
      id: 2,
      name: 'PAO (Partage Aliments & Objets)',
      period: '07/11/2024 - Présent',
      description: 'Plateforme solidaire pour réduire le gaspillage en connectant donateurs et bénéficiaires. Développée en PHP procédural.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
      link: 'https://github.com/ANDREAMISI/PAO3',
      image: '🤝',
      category: 'fullstack'
    },
    {
      id: 3,
      name: 'PlatformBoy',
      period: '17/11/2024 - 24/11/2024',
      description: 'Portfolio pour promoteur digital, aidant créateurs et entreprises à augmenter leur visibilité sur les réseaux sociaux.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://platform-boy.onrender.com',
      image: '🚀',
      category: 'frontend'
    },
    {
      id: 4,
      name: 'SkyMovie',
      period: '02/02/2026 - 05/02/2026',
      description: 'Clone de Disney+ utilisant l\'API TMDB. Projet réalisé pendant la formation Skynet-Burundi.',
      technologies: ['React', 'API', 'CSS'],
      link: 'https://andreamisi.github.io/skymovie',
      image: '🎬',
      category: 'react'
    },
    {
      id: 5,
      name: 'Skystore',
      period: '30/11/2025 - 02/12/2025',
      description: 'Boutique en ligne utilisant l\'API Fakestore. Formation intensive chez Skynet-Burundi.',
      technologies: ['JavaScript', 'API', 'HTML', 'CSS'],
      link: 'https://richardandreamisi.github.io/SkyStore',
      image: '🛒',
      category: 'frontend'
    },
    {
      id: 6,
      name: 'Gestion des contacts',
      period: '29/01/2025 - 30/01/2025',
      description: 'Application React pour gérer une liste de contacts avec CRUD complet.',
      technologies: ['React', 'JavaScript', 'CSS'],
      link: 'https://github.com/ANDREAMISI/Gestion-des-contacts',
      image: '📇',
      category: 'react'
    },
    {
      id: 7,
      name: 'Whitepace',
      period: '05/11/2025 - 07/11/2025',
      description: 'Site web statique moderne réalisé après l\'apprentissage HTML/CSS.',
      technologies: ['HTML', 'CSS'],
      link: 'https://andreamisi.github.io/whitepace',
      image: '⚪',
      category: 'frontend'
    },
    {
      id: 8,
      name: 'Ets Super_service',
      period: '15/01/2026 - 20/01/2026',
      description: 'Site web collaboratif pour une entreprise congolaise. Projet d\'équipe avec Narcis et Gisèle.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://github.com/ANDREAMISI/super_service',
      image: '🏢',
      category: 'frontend'
    },
    {
      id: 9,
      name: 'SkyGame',
      period: '01/06/2024',
      description: 'Exercices et jeux JavaScript pour pratiquer la logique de programmation.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      link: 'https://andreamisi.github.io/EXERCICES-JS/',
      image: '🎮',
      category: 'javascript'
    }
  ];

  const filters = [
    { id: 'all', label: 'Tous', icon: '🔍' },
    { id: 'fullstack', label: 'Full Stack', icon: '⚙️' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'react', label: 'React', icon: '⚛️' },
    { id: 'javascript', label: 'JavaScript', icon: '📜' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="projects fade-in">
      <h1 className="page-title">Mes projets</h1>
      
      <div className="filters-bar">
        {filters.map(f => (
          <button
            key={f.id}
            className={`filter-btn ${filter === f.id ? 'active' : ''}`}
            onClick={() => setFilter(f.id)}
          >
            <span className="filter-icon">{f.icon}</span>
            {f.label}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <div className="project-emoji">{project.image}</div>
            </div>
            <div className="project-content">
              <h3>{project.name}</h3>
              <p className="project-period">{project.period}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Voir le projet →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>Aucun projet dans cette catégorie</p>
        </div>
      )}
    </div>
  );
};

export default Projects;
