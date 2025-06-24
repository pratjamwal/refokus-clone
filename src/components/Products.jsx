import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'motion/react';

function Products() {
    var products = [
      {title:"arqitel", 
       discription:" hello this is a random text generated to build a website to making people just to read it random that is it guys",
       live: true,
       case:false,
      },   
       {
        title:"TTR", 
       discription:" hello this is a random text generated to build a website to making people just to read it random that is it guys",
       live: true,
       case:false,
      },   
       {
        title:"YIR 2022", 
       discription:" hello this is a random text generated to build a website to making people just to read it random that is it guys",
       live: true,
       case:true,
      },   
       {
        title:"Yahoo! ", 
       discription:" hello this is a random text generated to build a website to making people just to read it random that is it guys",
       live: true,
       case:true,
      }   
         
    ]


    const [pos,setPos] = useState(0);
    const mover = (val)=>{
      setPos(val*23)
    }
    



  return (
    <div className='relative  '>
      {products.map((val,index) => <Product key={index} val={val} mover={mover} count={index} /> )}
      <div className=' absolute top-5 w-full h-full pointer-events-none'>

        <div className='h-100 w-100 ml-110  pt-10'> 
              <img className='rounded-lg' src="https://images.unsplash.com/photo-1667422380246-3bed910ffae1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViYXBwfGVufDB8fDB8fHww"
                  alt="" />
        </div>
         <div className='h-100 w-100 ml-110  pt-10'> 
              <img className='rounded-lg' src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
                  alt="" />
        </div>
         <div className='h-100 w-100 ml-110  pt-10'> 
              <img className='rounded-lg' src="https://plus.unsplash.com/premium_photo-1687892170417-f9a11a402ef7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D"
                  alt="" />
        </div>
         <div className='h-100 w-100 ml-110  pt-10'> 
              <img className='rounded-lg' src="https://plus.unsplash.com/premium_photo-1714618937022-97adf8e67cb6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGNvbXB1dGVyfGVufDB8fDB8fHww"
                  alt="" />
        </div>
     
      </div>
       
    </div>
  );
}

export default Products
