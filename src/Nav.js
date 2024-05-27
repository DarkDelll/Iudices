import React, { useState, useEffect } from 'react';
import logo from './images/fondo.png';

const Nav = ({ nosotrosRef, serviciosRef, contactoRef, agendaRef }) => {
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = (ref) => (e) => {
      e.preventDefault();
      ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    const nosotrosLink = document.getElementById('nosotrosScroll');
    const serviciosLink = document.getElementById('serviciosScroll');
    const contactoLink = document.getElementById('contactoScroll');
    ;

    if (nosotrosLink) nosotrosLink.addEventListener('click', handleScroll(nosotrosRef));
    if (serviciosLink) serviciosLink.addEventListener('click', handleScroll(serviciosRef));
    if (contactoLink) contactoLink.addEventListener('click', handleScroll(contactoRef));
   ;

    return () => {
      if (nosotrosLink) nosotrosLink.removeEventListener('click', handleScroll(nosotrosRef));
      if (serviciosLink) serviciosLink.removeEventListener('click', handleScroll(serviciosRef));
      if (contactoLink) contactoLink.removeEventListener('click', handleScroll(contactoRef));
      ;
    };
  }, [nosotrosRef, serviciosRef, contactoRef, agendaRef]);

  function onToggle(e) {
    setActive(!isActive);
  }

  return (
    <div className="flex p-6 px-[8%] justify-between content-center items-center h-auto bg-blue-950 md:text-white shadow-md">
      <div className="rounded-xl w-auto z-30"><img src={logo} alt="" className='w-16 brightness-150' /></div>
      <div className={`transition-all duration-300 nav-links md:static md:bg-inherit bg-white absolute md:min-h-fit min-h-[60vh] left-0 ${isActive ? 'top-[12%]' : 'top-[-100%]'} md:w-auto w-full flex items-center z-40`}>
        <ul className="ml-[40%] md:ml-auto flex flex-col md:flex-row md:items-center no-underline md:gap-[2vw] gap-8 ">
          <li><a id="nosotrosScroll" href="#nosotros" className="hover:text-slate-600 md:text-xl lg:text-2xl md:px-4 py-3 rounded-full">QUIENES SOMOS</a></li>
          <li><a id="serviciosScroll" href="#servicios" className="hover:text-slate-600 md:text-xl lg:text-2xl md:px-4 py-3 rounded-full">SERVICIOS</a></li>
          <li><a id="contactoScroll" href="#contacto" className="hover:text-slate-600 md:text-xl lg:text-2xl md:px-4 py-3 rounded-full">CONTACTO</a></li>
           </ul>
      </div>
      <div className="text-3xl cursor-pointer md:hidden text-white z-30">
        <ion-icon onClick={onToggle} className="burger_menu" name={isActive ? 'close' : 'menu-sharp'}></ion-icon>
      </div>
    </div>
  );
};

export default Nav;
