import React, { useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from "motion/react"

function Work() {
  

    const [images, setImages] = useState([
        {  url:"https://cdn.prod.website-files.com/62df9251ae9124976626bcc8/62ebc1ecee896381b019057f_Form%20Validator%20385px.png",
           top:"50%",
           left:"50%",
           isActive:false },
        {  url:"https://cdn.prod.website-files.com/62df9251ae9124976626bcc8/63218e6fb8128813ad9df905_62ea98750d0985e0f9e1f889_Image-Magnifier.png", 
           top:"56%",
           left:"44%",
           isActive:false },
        {  url:"https://cdn.prod.website-files.com/62df9251ae9124976626bcc8/62e0f683b4bd5e97479afeb0_62b1cd7aa17ffc4d42b09be7_API-filler.png",
           top:"45%",
           left:"56%",
           isActive:false },
        {  url:"https://cdn.prod.website-files.com/62df9251ae9124976626bcc8/62ebbec6f1398f4d9d7c937b_Time%20to%20read%20385px.png",
           top:"60%",
           left:"53%",
           isActive:false },
        {  url:"https://cdn.prod.website-files.com/62df9251ae9124976626bcc8/62e0f6830f555f238b0c4d14_60ef4360ce19af7bf7e43bbb_thumb-tabs-p-2000.png",
           top:"43%",
           left:"42%",
           isActive:false },
        {  url:"https://cdn.prod.website-files.com/62df9251ae9124976626bcc8/63218e982f695e526e87f952_63033d43cf2cb03e577e6b76_automatic-tabs-new%20(1)-p-2000.png",
           top:"64%",
           left:"55%",
           isActive:false }
    ])


    const { scrollYProgress } = useScroll()

    scrollYProgress.on("change", (data) =>{
      function imagesShow(arr){
        setImages(
          (prev) =>
        prev.map(
          (item,index)=>
        arr.indexOf(index) === -1
      ? {...item,isActive:false}
      : {...item,isActive:true}
          )
        ) 
      }


      switch(Math.floor(data*100)){
        case 0:
          imagesShow([]);
          break;
          case 1:
          imagesShow([0]);
          break;
          case 2:
          imagesShow([0,1]);
          break;
          case 3:
          imagesShow([0,1,2]);
          break;
          case 4:
          imagesShow([0,1,2,3]);
          break;
          case 6:
          imagesShow([0,1,2,3,4]);
          break;
          case 8:
          imagesShow([0,1,2,3,4,5]);
          break;
      }
  })  
    
  return (
    <div className='w-full mt-5  '>
        <div className='relative max-w-screen-xl mx-auto text-center'>
              <h1 className='text-[29vw] text-white  leading-none font-medium select-none tracking-tight'>work</h1>
           <div className=' absolute top-0 w-full h-full '>
             {images.map(
               (elem,index)=>
                 elem.isActive && (
             <img
               key={index }
                className='absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]'
                 src={elem.url}
                   style={{top:elem.top, left: elem.left}}
                   alt=""
                />
              )
             )}
          </div>
        </div>
    </div>
      
    
  )
}

export default Work
