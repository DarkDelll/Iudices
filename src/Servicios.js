import React from 'react'
import Servicio from './Servicio'

const Servicios = () => {
  return (
    <section>
        <div className='mt-20 md:mt-auto'>
            <h2 className='text-white text-4xl font-bold'>Nuestros Servicios</h2>
        </div>
        <div className='bg-blue-950 mt-10 md:mt-auto h-auto w-full max-w-[1400px]
        grid lg:grid-cols-10 auto-rows-[30rem] gap-4
        mx-auto p-6 md:p-12 lg:p-20'>
            
            <Servicio
            title="Servicio 1" subtitle="descripción del servicio"/>
            <Servicio
            title="Servicio 2" subtitle="descripcion del servicio 2"/>
            <Servicio
            title="Servicio 3" subtitle="descripción del servicio 3"/>
        </div>
    </section>
  )
}

export default Servicios