import React from 'react';
import { FaTrophy } from "react-icons/fa";
import { MdOutlineComputer } from "react-icons/md";
import { PiBookOpenDuotone } from "react-icons/pi";
import { MdAddPhotoAlternate } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Langages',
      icon: <MdOutlineComputer className="category-icon" />,
      skills: [
        { name: 'HTML5', level: 90, color: '#E44D26' },
        { name: 'CSS3', level: 85, color: '#264DE4' },
        { name: 'JavaScript', level: 80, color: '#F7DF1E' },
        { name: 'PHP', level: 75, color: '#777BB4' }
      ]
    },
    {
      name: 'Frameworks',
      icon: <PiBookOpenDuotone className="category-icon" />,
      skills: [
        { name: 'React', level: 80, color: '#61DAFB' },
        { name: 'Laravel', level: 75, color: '#FF2D20' },
        { name: 'Tailwind CSS', level: 85, color: '#38B2AC' }
      ]
    },
    {
      name: 'Base de données',
      icon: <FaDatabase className="category-icon" />,
      skills: [
        { name: 'MySQL', level: 75, color: '#4479A1' }
      ]
    },
    {
      name: 'Outils',
      icon: <FaTools className="category-icon" />,
      skills: [
        { name: 'Git', level: 80, color: '#F05032' },
        { name: 'GitHub', level: 85, color: '#181717' },
        { name: 'Figma', level: 70, color: '#F24E1E' },
        { name: 'VS Code', level: 90, color: '#007ACC' }
      ]
    },
    {
      name: 'Soft Skills',
      icon: <FaRegHandshake className="category-icon" />,
      skills: [
        { name: 'Apprentissage rapide', level: 95, color: '#4CAF50' },
        { name: 'Travail d\'équipe', level: 85, color: '#2196F3' },
        { name: 'Résolution de problèmes', level: 80, color: '#FF9800' },
        { name: 'Adaptabilité', level: 90, color: '#9C27B0' }
      ]
    }
  ];

  return (
    <div className="skills fade-in">
      <h1 className="page-title">Mes compétences</h1>
      
      <div className="skills-intro">
        <p>
          Au cours de ma formation et de mes projets, j'ai développé un ensemble de compétences 
          techniques et humaines qui me permettent de créer des applications web de qualité.
        </p>
      </div>

      <div className="skills-container">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h2 className="category-title">
              <span className="category-icon">{category.icon}</span>
              {category.name}
            </h2>
            <div className="skills-list">
              {category.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ 
                        width: `${skill.level}%`,
                        backgroundColor: skill.color
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="certifications-section">
        <h2>Certifications</h2>
        <div className="cert-grid">
          <div className="cert-card">
            <div className="cert-icon"><FaTrophy className="cert-icon-svg" /></div>
            <h3>Développement web fullstack</h3>
            <p>SkyNet-Burundi / Talent4StartUp</p>
            <span className="cert-date">2025-2026</span>
          </div>
          <div className="cert-card">
            <div className="cert-icon"><MdComputer className="cert-icon-svg" /></div>
            <h3>Advanced IT</h3>
            <p>Ambassade des États-Unis</p>
            <span className="cert-date">2025-2026</span>
          </div>
          <div className="cert-card">
            <div className="cert-icon"><PiBookOpenDuotone className="cert-icon-svg" /></div>
            <h3>Personal Development</h3>
            <p>Seven Habits - Ambassade USA</p>
            <span className="cert-date">2025-2026</span>
          </div>
          <div className="cert-card">
            <div className="cert-icon"><MdAddPhotoAlternate className="cert-icon-svg" /></div>
            <h3>Videography & Photography</h3>
            <p>American Corner Kamenge</p>
            <span className="cert-date">2024</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
