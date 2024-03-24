import logo from './images/fondo.png'
import {useState} from 'react'

const Nav = () => {
  const [isActive, setActive] = useState(false)
  
  function onToggle(e){
    setActive(!isActive)
  }


  return (
    <div className="flex p-6 px-[8%] justify-between content-center items-center h-1/4  bg-blue-950 md:text-white shadow-md">
        <div className=" rounded-xl w-auto "><img src={logo} alt="" className=' h-16'/></div>
        <div className={` transition-all duration-300 nav-links md:static md:bg-inherit bg-white absolute md:min-h-fit min-h-[60vh] left-0 ${isActive ? 'top-[12%]' : 'top-[-100%]'} md:w-auto w-full flex items-center z-40`}>
          <ul className=" ml-[40%] md:ml-auto flex flex-col md:flex-row md:items-center no-underline  md:gap-[2vw] gap-8 ">
              <li><a href="#" className="hover:text-slate-600 md:text-xl lg:text-2xl  md:px-4 py-3  rounded-full">Quienes Somos</a></li>
              <li><a href="#" className="hover:text-slate-600 md:text-xl lg:text-2xl md:px-4 py-3  rounded-full">Servicios</a></li>
              <li><a href="#" className="hover:text-slate-600 md:text-xl lg:text-2xl md:px-4 py-3  rounded-full">Contacto</a></li>
              <li><a href="#" className="hover:text-slate-600 md:text-xl lg:text-2xl md:px-4 py-3  rounded-full">Agenda</a></li>
          </ul>
        </div>
        <div className="text-3xl cursor-pointer md:hidden text-white ">
          <ion-icon onClick={onToggle} className="burger_menu" name={isActive ? 'close' : 'menu-sharp'}></ion-icon>
        </div>
    </div>
  )
}

export default Nav