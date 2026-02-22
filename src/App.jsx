import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import CV from './components/CV';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'home': 
        return <Home setCurrentPage={setCurrentPage} />;  // Passage de la props
      case 'about': 
        return <About />;
      case 'projects': 
        return <Projects />;
      case 'skills': 
        return <Skills />;
      case 'contact': 
        return <Contact />;
      case 'cv': 
        return <CV />;
      default: 
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="app">
      <Header setCurrentPage={setCurrentPage} currentPage={currentPage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />  {/* Passage de la props */}
    </div>
  );
}

export default App;
