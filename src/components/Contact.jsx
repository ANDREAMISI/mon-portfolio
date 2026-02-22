import React, { useState } from 'react';
import './Contact.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  emailjs.send(
    "service_22t2h84",
    "template_drf9lgu",
    {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    },
    "jwniokVu077ioURjn"
  )
  .then(
    (result) => {
      setFormStatus({
        submitted: true,
        success: true,
        message: "Message envoyé avec succès ! Je vous répondrai bientôt."
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    },
    (error) => {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Une erreur s'est produite. Veuillez réessayer."
      });
    }
  );
};
  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'andreamisi541@gmail.com',
      link: 'mailto:andreamisi541@gmail.com'
    },
    {
      icon: '📞',
      title: 'Téléphone',
      value: '+243978352541',
      link: 'tel:+243978352541'
    },
    {
      icon: '📍',
      title: 'Localisation',
      value: 'Kamituga, RDC',
      link: null
    },
    {
      icon: '🔗',
      title: 'LinkedIn',
      value: 'ANDRE AMSI',
      link: 'https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'ANDREAMISI',
      link: 'https://github.com/ANDREAMISI'
    },
    {
      icon: '🌐',
      title: 'Portfolio',
      value: 'github.com/ANDREAMISI/Portfolio',
      link: 'https://andreamisi.github.io/mon-portfolio/'
    }
  ];

  return (
    <div className="contact fade-in">
      <h1 className="page-title">Me contacter</h1>
      
      <div className="contact-container">
        <div className="contact-info-section">
          <h2>Restons en contact</h2>
          <p className="contact-intro">
            Vous avez un projet en tête ? Une question ? N'hésitez pas à me contacter. 
            Je suis toujours ouvert aux nouvelles opportunités et collaborations.
          </p>
          
          <div className="contact-cards">
            {contactInfo.map((info, index) => (
              <div key={index} className="contact-card">
                <div className="contact-icon">{info.icon}</div>
                <div className="contact-details">
                  <h3>{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer">
                      {info.value}
                    </a>
                  ) : (
                    <p>{info.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="social-links">
            <h3>Suivez-moi</h3>
            <div className="social-icons">
              <a href="https://www.facebook.com/share/18U8CbtdUy/?mibextid=wwXIfr" className="social-link"><FaFacebookF /></a>
              <a href="https://x.com/andramisi454348?s=21" className="social-link"><FaTwitter /></a>
              <a href="https://www.linkedin.com/me?trk=p_mwlite_feed-secondary_nav" className="social-link"><FaLinkedinIn /></a>
              <a href="https://github.com/ANDREAMISI" className="social-link"><FaGithub /></a>
            </div>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Envoyez-moi un message</h2>
          
          {formStatus.submitted && (
            <div className={`form-alert ${formStatus.success ? 'success' : 'error'}`}>
              {formStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nom complet *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Votre nom"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="votre@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Sujet *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Sujet de votre message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Votre message..."
                rows="6"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary submit-btn">
              Envoyer le message
              <span className="btn-icon">✈️</span>
            </button>
          </form>
        </div>
      </div>

      <div className="map-section">
        <h2>Me trouver</h2>
        <div className="map-placeholder">
          <div className="map-overlay">
            <span className="map-pin">📍</span>
            <p>Ngagara, Bujumbura, Burundi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
