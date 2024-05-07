import React from 'react'

const Contactos = () => {
  return (
    <div className='h-[80vh]'>
        <form>
            <h2 className='text-white text-3xl mb-6'>Contáctanos</h2>
            <div className='flex align-center justify-evenly p-8'>
                <div>
                    <p className='text-white'>Contacta a través de nuestro formulario o a través de nuestro Whatsapp</p>
                </div>
                <div className=' flex flex-col w-[40%] gap-4 border-black border-2 rounded-lg bg-white h-[60vh]'>
                <input type='text' placeholder='Nombre' className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700'></input>
                <input type='mail' placeholder='Mail' className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700'></input>
                <input type='phone' placeholder='Número de contacto' className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700 '></input>
                <textarea rows='9' placeholder='Detalles de la consulta...' className='w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-700'></textarea>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Contactos