

import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Skillsdescription() {
    useGSAP(()=>{
        gsap.from('.sk', {
    
         y:-100,
          duration:0.8,
          
          stagger:1,
          opacity:0,
    
          scrollTrigger: {
            trigger: '.sk',
            start: 'top 60%',  // When the top of the element hits 80% of the viewport height
            
    // Show markers to help debug
          }
         
        })
        
       
          
    
       
      })
  return (
    <div>
        <div className="w-full h-auto mt-16 sm:px-16 ">
      <div className="w-full sm:w-[800px] h-[300px] sm:h-[400px]   px-8 py-5">
        <h1 className="text-black sk font-ralway text-4xl sm:text-6xl font-semibold tracking-tighter mt-2 mb-4">
        Skills
        </h1>
    <h1 className="text-slate-700 sk opacity-90 mt-8 font-ralway text-xs sm:text-2xl tracking-tighter">  
    Full stack development involves both front-end and back-end skills, enabling developers to build complete web applications. A full stack developer is proficient in front-end languages like HTML, CSS, and JavaScript, creating responsive, user-friendly interfaces. On the back end, they work with server-side languages like Node.js, Python, or PHP, along with databases like MySQL and MongoDB, ensuring smooth data handling and functionality. Full stack skills bridge the gap between design and logic, empowering developers to oversee projects end-to-end, adapt to various frameworks, and handle deployment, creating efficient, robust applications.
</h1>
      </div>
    </div>
      
    </div>
  )
}

export default Skillsdescription; 


