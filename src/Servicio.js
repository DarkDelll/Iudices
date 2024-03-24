import React from 'react'

const Servicio = ({title, subtitle, clase}) => {
  return (
    <article
  class={`
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
    class="absolute bottom-0 top-0 z-10 h-full w-full
    bg-gradient-to-b from-transparent from-40% via-[#151836]/50 to-[#151836]/80"
  >
  </div>

  <slot name="image" />

  <div
    class="relative z-20 flex h-full select-none flex-col justify-start| gap-1 p-4 text-lg md:p-6"
  >
    <h2 class="mb-4 text-balance text-3xl font-semibold uppercase text-white">
      {title}
    </h2>

    {
      subtitle && (
        <h3 class="-mt-4 mb-4 text-3xl font-semibold text-amber-100/70">
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