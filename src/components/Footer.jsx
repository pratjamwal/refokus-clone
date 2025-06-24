import React from 'react'

function Footer() {
  return (
    <div className='w-full  bg-zinc-900 text-white mx-auto'>
        <div className='max-w-screen-xl py-10 mx-auto flex gap-32'>
            <div className='basis-1/2'>
            <h1 className='text-[10rem] font-semibold leading-none tracking-tight'>refokus.</h1>
            </div>
            <div className='basis-1/2 flex gap-4'>
            <div className='basis-1/3'>
                <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
               { ["instagram","twitter","(x?)","linkedIn"].map((item,index)=><a key={index} className='block mt-2 capitalize text-zinc-600'>{item}</a>)}
            </div>
            <div className='basis-1/3'>
                <h4 className='mb-10 text-zinc-500 capitalize'>socials</h4>
               { ["instagram","twitter","(x?)","linkedIn"].map((item,index)=><a key={index} className='block mt-2 capitalize text-zinc-600'>{item}</a>)}
            </div>

            <div className='basis-1/2 flex flex-col items-end'>
                <p className='text-right'>Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
                <img src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" className='w-38 mt-18' alt="" />
            </div>

            </div>
        </div>
      
    </div>
  )
}

export default Footer
