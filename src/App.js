import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Contacto from './Contacto.js';
import Nav from './Nav.js';
import 'tailwindcss/tailwind.css';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const nosotrosRef = useRef(null);
  const serviciosRef = useRef(null);
  const contactoRef = useRef(null);
  const agendaRef = useRef(null);

  const controlNavbar = () => {
    if (window.innerWidth >= 768) {
      if (window.scrollY > lastScrollY) { 
        setShowNav(false); 
      } else { 
        setShowNav(true); 
      }
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);

    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <div className="App bg-blue-950">
      <div className={`md:sticky md:top-0 md:z-50 transition-transform duration-300 ${showNav || window.innerWidth < 768 ? 'md:translate-y-0' : 'md:-translate-y-full'} md:transition-transform duration-300`}>
        <Nav 
          nosotrosRef={nosotrosRef}
          serviciosRef={serviciosRef}
          contactoRef={contactoRef}
          agendaRef={agendaRef}
        />
      </div>
      <Main 
        nosotrosRef={nosotrosRef}
        serviciosRef={serviciosRef}
        contactoRef={contactoRef}
        agendaRef={agendaRef}
      />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;

