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
    <section className='text-white h-[80vh] flex justify-center p-6 items-center relative'  >
       
        <div className=' w-[90%] h-[90vh] md:h-[60vh] bg-[#dadada] rounded-md shadow-white flex-col md:flex md:flex-row items-center md:justify-evenly'>
            <div
            className=" group relative bg-[#dadada]  h-[50%] sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10 md:h-[70%] md:w-[40%]"
            >
                <div
                    className="absolute bottom-0 left-0 h-full w-1 origin-bottom scale-y-0 transform bg-yellow-600/70 duration-300 group-hover:scale-y-100"
                ></div>
                <div
                    className="absolute bottom-0 right-0 h-full w-1 origin-top scale-y-0 transform bg-yellow-600/70 duration-300 group-hover:scale-y-100"
                ></div>
                <div >
                    <h4 className=' text-2xl text-gray-800 font-semibold'>NUESTRA MISIÓN</h4>
                    <h6 className='text-md md:text-lg text-gray-800 p-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut metus quam, fermentum quis iaculis et, molestie eu diam. In molestie eros vitae lacus venenatis, vel faucibus urna mattis. Aliquam gravida neque sit amet viverra egestas. Vestibulum vel orci pellentesque ante suscipit egestas. Suspendisse at lacinia nisi. Sed vulputate mi sed turpis tempus ultrices. Mauris viverra purus vel auctor euismo</h6>
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