import React from 'react'
import Stripe from './Stripe'

function Stripes() {
  var data = [
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7bf9533879784a0cf5fa_logo-onLight.svg", number:48},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b89a37dd20bc1a6b9c8da_deelogo-onLight.svg", number:2},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b97202d2e093f2a48876a_goologo-onLight.svg", number:11},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7bf9533879784a0cf5fa_logo-onLight.svg", number:48},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b89a37dd20bc1a6b9c8da_deelogo-onLight.svg", number:2},
    {url:"https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b97202d2e093f2a48876a_goologo-onLight.svg", number:11}
  ]


  return (
    <div className='flex items-center  bg-white mt-15'>
      {data.map((elem,index)=>(
        <Stripe key={index} val={elem} />
        ))}
      
    </div>
      
    
  )
}

export default Stripes
