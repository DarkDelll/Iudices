import React from 'react'
import imagenIudices from './images/mision.webp'
import imagenIudices2 from './images/mision2.webp'
import imagenIudices3 from './images/mision3.webp'
import imagenIudices4 from './images/mision4.webp'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Nosotros = () => {
    const images = [imagenIudices, imagenIudices2, imagenIudices3, imagenIudices4]
    
    
  return (
    <section className='text-white h-[80vh] flex justify-center p-6 items-center relative' id="nosotros" >
       
        <div className=' p-5 md:p-2 w-[90%] max-h-[90vh] md:h-[60vh] bg-[#dadada] rounded-md shadow-white flex-col md:flex md:flex-row items-center md:justify-evenly'>
            <div
            className=" group relative bg-[#dadada]  h-[50%] sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 md:h-[95%] md:w-[50%]"
            >
                <div
                    className="absolute bottom-0 left-0 h-full w-1 origin-bottom scale-y-0 transform bg-yellow-600/70 duration-300 group-hover:scale-y-100"
                ></div>
                <div
                    className="absolute bottom-0 right-0 h-full w-1 origin-top scale-y-0 transform bg-yellow-600/70 duration-300 group-hover:scale-y-100"
                ></div>
                <div >
                    <h4 className=' text-2xl text-gray-800 font-semibold'>NUESTRA MISIÓN</h4>
                    <h6 className='text-xs md:text-base text-gray-800 p-5 justify-start flex flex-col gap-2' >
                        <p>Nos complace presentarnos como un equipo de abogados dedicados y comprometidos en brindar soluciones legales efectivas y personalizadas a nuestros clientes. En nuestro estudio jurídico, entendemos que cada gestión o conflicto es único y requiere un enfoque especializado.</p>
                        <p>Nuestro objetivo principal es proporcionar un servicio legal integral y de calidad, respaldado por una sólida ética de trabajo, profesionalismo y confidencialidad, manteniendo siempre una comunicación cercana y transparente.</p>
                        <p>Esperamos tener la oportunidad de servirle y brindarle la representación legal de calidad que se merece.</p>
                        <p>ESTUDIO JURIDICO IUDICES ABOGADOS</p>
                    </h6>
                </div>
            </div>
            <div className='h-[50%] w-full md:w-[50%] md:h-[70%] mr-8 flex shadow-lg justify-center items-center backdrop-blur-sm'>
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {images.map((image, index) => (
                    <SwiperSlide>
                        <div key={index} className="w-full h-full flex justify-center items-center">
                            <img src={image} className="rounded-md shadow-sm object-fill" alt="Carrusel imagen" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            </div>
        </div>
        
    </section>
  )
}

export default Nosotros