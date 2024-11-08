
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Design() {

  useGSAP(()=>{
    gsap.from('.d', {

     y:-100,
      duration:0.8,
      
      stagger:1,
      opacity:0,

      scrollTrigger: {
        trigger: '.d',
        start: 'top 55%',  // When the top of the element hits 80% of the viewport height
        
// Show markers to help debug
      }
     
    })
    
   
      

   
  })
  return (
    <div className="w-full h-auto mt-16 sm:px-16 ">
      <div className="w-full sm:w-[800px] h-[300px] sm:h-[400px]   px-8 py-5">
        <h1 className="text-black d font-ralway text-4xl sm:text-6xl font-semibold tracking-tighter mt-2 mb-4">
        Design projects
        </h1>
    <h1 className="text-slate-700 d opacity-90 mt-8 font-ralway text-xs sm:text-2xl tracking-tighter">  
        
Product design is a dynamic and multifaceted discipline that blends aesthetics, functionality, and innovation to create products that enhance users lives and experiences. Through a meticulous process of research, ideation, prototyping, and iteration, product designers transform concepts into tangible solutions, addressing both practical needs and emotional desires.
Striking a delicate balance between form and function, product design continually evolves to adapt to emerging technologies, societal trends, and user preferences, shaping the way we interact with the world around us and defining the landscape of our everyday lives.
</h1>
      </div>
    </div>
  )
}

export default Design
