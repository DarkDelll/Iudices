import React from 'react'

const Servicio = ({title, subtitle, clase, image}) => {
    


  return (
    <article
  className={`
  ${clase}
  col-span-5
  relative rounded-xl
  backdrop-blur-md
  border border-black/10
  shadow-inner shadow-yellow-500/60
  overflow-hidden
  group
`}
>
   
  <div
    className="absolute bottom-0 top-0 z-10 h-full w-full
    "
  >
  </div>

  <div
    className="background transition-scale absolute bottom-0 left-0 top-[45%]
            -z-10 h-auto w-full bg-blue-800
             bg-cover bg-center bg-no-repeat opacity-90  duration-1000 ease-in-out group-hover:scale-110"
    style={{backgroundImage: `url(${image})`}}
    ></div>

  <div
    className="relative z-20 flex h-full select-none flex-col justify-start| gap-1 p-4 text-lg md:p-6"
  >
    <h2 className="mb-2 text-balance text-3xl font-semibold uppercase text-white">
      {title}
    </h2>

    {
      subtitle && (
        <h3 className=" mb-4 text-base md:text-2xl font-semibold text-amber-100/70">
          {subtitle}
        </h3>
      )
    }

    <slot name="content" />
  </div>
</article>
  )
}

export default Servicio