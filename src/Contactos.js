import React from 'react'

const Contactos = () => {
    const message = "¡Hola IUDICES! Necesito de sus servicios";
    const phone = "+56932274289";
  return (
    <div className='md:h-[80vh]'>
        <form >
            <h2 className='text-white text-3xl mb-6'>Contáctanos</h2>
            <div className='flex gap-5 md:gap-0 flex-col md:flex-row align-center justify-evenly p-8'>
                <div className='flex flex-col gap-4 '>
                    <p className='text-white'>Contacta a través de nuestro formulario o a través de nuestro Whatsapp</p>
                    <a className='flex' 
                    href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
                    target="_blank">
                    <button
                    type="button"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    class="w-full mb-8 rounded bg-[#128c7e] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg ">
                        <span class="[&>svg]:h-5 [&>svg]:w-5 flex gap-3 justify-center">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 448 512">
                            <path
                                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                            </svg>
                            <span>Whatsapp</span>
                        </span>
                        
                    </button>
                    </a>
                    <div className='flex flex-col gap-3'>
                    <label className='text-white font-semibold text-2xl'>¡Visitanos en nuestra sucursal!</label>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d678.7965836095581!2d-71.1621622231398!3d-31.630567135566814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x968f2ae9fc5fc139%3A0x29c06a4c79686639!2sArturo%20Prat%20131%2C%201930399%20Choapa%2C%20Illapel%2C%20Coquimbo!5e0!3m2!1ses-419!2scl!4v1715105520469!5m2!1ses-419!2scl" className='w-full h-60' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className=' flex flex-col md:w-[40%] gap-4 border-black border-2 rounded-lg bg-white h-[60vh] p-3'>
                <input type='text' placeholder='Nombre' required className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700'></input>
                <input type='email' placeholder='Mail' required className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700'></input>
                <input type='tel' placeholder='Número de contacto' required className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 '></input>
                <textarea rows='9' placeholder='Detalles de la consulta...' className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700'></textarea>
                <button className='bg-blue-800 text-white h-[10%] rounded-lg'>Enviar</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Contactos