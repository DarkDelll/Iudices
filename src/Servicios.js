import React from 'react'
import Servicio from './Servicio.js'
import imageFamilia from './images/familia.webp'
import imageCivil from './images/compraventa.jpg'
import imageTrabajo from './images/personas_trabajando.webp'
import imageAgua from './images/aguas.webp'
import imageChoque from './images/choque.webp'
import imageCarcel from './images/carcel.webp'
import imagenSociedades from './images/sociedades.webp'

const Servicios = React.forwardRef((props, ref) => {
  return (
    <section id="servicios" ref={ref}>
        <div className='mt-20 md:mt-auto'>
            <h2 className='text-white text-4xl font-bold'>Nuestros Servicios</h2>
        </div>
        <div className='bg-blue-950 mt-10 md:mt-auto h-auto w-full max-w-[1400px]
        grid lg:grid-cols-10 auto-rows-[30rem] gap-4
        mx-auto p-6 md:p-12 lg:p-20'>
            
            
            <Servicio 
            title="Sociedades" subtitle="Constitución de sociedades, modificaciones, término, liquidación, adjudicación." clase='md:col-span-4'
            image={imagenSociedades} />
            <Servicio
            title="Civil" subtitle="Contratos y escrituras, juicios de cobro de dinero, arrendamiento, herencias y posesiones efectivas, indemnizaciones, prescripción de deudas, inmobiliario, estudio de títulos, interdicción, cambio de nombre." 
            clase='md:col-span-6' image={imageCivil}/>
            <Servicio
            title="Laboral" subtitle="Elaboración de contrato de trabajo, despido injustificado, autodespido, tutela laboral, acoso laboral, cobro de prestaciones, negociación colectiva, organización empresarial." 
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
            <Servicio
            title="Familia" subtitle="Divorcios, medidas de protección, violencia intrafamiliar, pensión de alimentos, relación directa y regular, cuidado personal, separación judicial, reconocimiento de paternidad, autorización para salir del país."
             clase='md:col-span-10' image={imageFamilia}/>
        </div>
    </section>
    //verificacion
  )
})

export default Servicios