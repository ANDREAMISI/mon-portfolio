import React from 'react';
import { Helmet } from 'react-helmet';
import profil from '../assets/profil.jpg';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  author = "ANDRE AMISI RICHARD",
  image = profil,
  url = "https://andreamisi.github.io/mon-portfolio",
  type = "website"
}) => {
  
  // Valeurs par défaut
  const siteTitle = "ANDRE AMISI RICHARD";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  
  const defaultDescription = "Portfolio et CV de ANDRE AMISI RICHARD, développeur web front-end basé à Bujumbura/BURUNDI. Découvrez mes projets React, Laravel et mon parcours.";
  const metaDescription = description || defaultDescription;
  
  const defaultKeywords = "développeur web, front-end, React, Laravel, PHP, JavaScript, Bujumbura, Burundi, portfolio, CV";
  const metaKeywords = keywords || defaultKeywords;

  return (
    <Helmet>
      {/* Balises de base */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="author" content={author} />
      
      {/* Viewport pour le responsive */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph / Facebook / LinkedIn */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
      
      {/* Balises supplémentaires pour le référencement */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="French" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Lien canonique */}
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;
