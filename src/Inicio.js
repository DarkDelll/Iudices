import portada from "./images/portada.webp"

const Inicio = () => {

  const backgroundImageStyle = {
    backgroundImage:`url(${portada})`}


  return (
    <article className=" h-[80vh] overflow-hidden group md:h-[100vh] relative">
      <div className=" h-[80vh] md:mt-auto absolute bottom-0 top-0 z-10 md:h-[100vh] 
    bg-gradient-to-b from-transparent from-10% via-[#151836]/30 to-[#151836]/80"></div>
      <div className=" h-[80vh]  md:mt-auto background transition-scale absolute bottom-0 left-0 top-0
        z-0 md:h-[100vh] w-[100vw] md:w-full bg-blue-950
        bg-cover bg-center bg-no-repeat opacity-90 blur-sm " style={backgroundImageStyle}>
      </div>
      <div className="relative z-20 flex h-full w-full select-none flex-col justify-center gap-4 p-4 text-lg md:p-6">
        <h1 className="text-white  text-5xl font-bold ">JUSTICIA Y CONFIANZA, NUESTRO COMPROMISO COMO ABOGADOS</h1>
        <h2 className="text-white  text-3xl font-semibold ">SOLUCIONES LEGALES A TU ALCANCE</h2>
      </div>
      
    </article>
  )
}

export default Inicio