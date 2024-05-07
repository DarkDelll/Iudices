import React from 'react'
import Servicio from './Servicio.js'
import imageFamilia from './images/familia.jpg'
import imageCivil from './images/compraventa.jpg'
import imageTrabajo from './images/personas_trabajando.jpg'
import imageAgua from './images/grifo.jpg'
import imageChoque from './images/choque.avif'
import imageCarcel from './images/carcel.jpg'

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
            title="Familia" subtitle="Divorcios, Pensión de alimentos, Medidas de protección, Violencia Intrafamilar"
             clase='md:col-span-4' image={imageFamilia}/>
        
            <Servicio
            title="Civil" subtitle="Contratos, Escrituras, Compraventas, Arriendos, Posesión efectivas, Testamentos, otros" 
            clase='md:col-span-6' image={imageCivil}/>
            <Servicio
            title="Laboral" subtitle="Contrato de trabajo, Despidos, Autodespido, Tutela laboral, Organización empresarial, otros." 
            clase='md:col-span-6' image={imageTrabajo}/>
            <Servicio
            title="Aguas" subtitle="Derechos de agua y perfeccionamiento" clase='md:col-span-4'
            image={imageAgua}/>
            <Servicio
            title="Policía local" subtitle="Accidentes de vehículos, Derechos del consumidor, otros" 
            clase='md:col-span-5' image={imageChoque} />
            <Servicio
            title="Penal" subtitle="Defensa penal y Querellas criminales" clase='md:col-span-5'
            image={imageCarcel} />
        </div>
    </section>
  )
}

export default Servicios