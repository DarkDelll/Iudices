import React from 'react';
import Vector from "./images/Vector.png";

const Contacto = () => {
    const message = "¡Hola IUDICES! Necesito de sus servicios";
    const phone = "+56932274289";

    return (
        <div className="w-[12%] md:w-[25%] md:h-[8%] sticky bottom-0 left-[90%] z-50">
            <a
                href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full h-full group"
            >
                <div className="flex w-auto justify-center items-center">
                    <div className='hover:transition-x-0 mr-1'>
                    <p className="hidden text-white group-hover:flex ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out">Hola! ¿Consultas?</p>
                    </div>
                    <img src={Vector} alt="logo de WhatsApp" className="w-[90%] md:w-[15%]"></img>
                </div>
            </a>
        </div>
    );
};

export default Contacto;
