import React from 'react';
import Inicio from './Inicio.js';
import Nosotros from './Nosotros.js';
import Servicios from './Servicios.js';
import Contactos from './Contactos.js';

const Main = ({ nosotrosRef, serviciosRef, contactoRef, agendaRef }) => {
  return (
    <div>
      <Inicio />
      <Nosotros ref={nosotrosRef} />
      <Servicios ref={serviciosRef} />
      <Contactos ref={contactoRef} />
    </div>
  );
}

export default Main;
