import portada from "./images/portada.webp"

const Inicio = () => {

  const backgroundImageStyle = {
    backgroundImage:`url(${portada})`}


  return (
    <article className=" overflow-hidden group h-[100vh]">
      <div className=" mt-36 md:mt-auto absolute bottom-0 top-0 z-10 h-[100vh] 
    bg-gradient-to-b from-transparent from-10% via-[#151836]/30 to-[#151836]/80"></div>
      <div className=" mt-36 md:mt-auto background transition-scale absolute bottom-0 left-0 top-0
        z-0 h-[100vh] w-full bg-blue-950
        bg-cover bg-center bg-no-repeat opacity-90 bg-blend-luminosity" style={backgroundImageStyle}>
      </div>
      <div className="relative z-20 flex h-full w-full select-none flex-col justify-center gap-1 p-4 text-lg md:p-6">
        <h1 className="text-white  text-3xl ">TITULO UNO DE LA PÁGINA WEB</h1>
      </div>
      
    </article>
  )
}

export default Inicio