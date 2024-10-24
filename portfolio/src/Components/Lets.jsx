import Contact from "./Contact";
import { useState } from "react";

import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function Lets() {

    useGSAP(()=>{
        gsap.from('.lets', {
    
        y:100,
          duration:0.5,
          delay:1,
          stagger:0.3,
          opacity:0,
    
          scrollTrigger: {
            trigger: '.lets',
            start: 'top 90%',  // When the top of the element hits 80% of the viewport height
            
    // Show markers to help debug
          }
         
        })
    })

    // const [visibleDiv, setVisibleDiv] = useState(null);
    // const showFirstDiv = () => setVisibleDiv('first');
    const [showContent, setShowContent] = useState(false);
    const handleClick = () => {
        setShowContent(!showContent);  // Toggle between true and false
      };
    
  return (

    <div className="w-full h-auto sm:mt-24 pb-20  mt-28">
        <center>
        <div className="w-full h-auto  ">
            <h1 className="text-4xl lets sm:text-6xl font-ralway font-bold text-center">
                Lets Talk
            </h1>
            

            <button onClick={handleClick}  className="px-4 lets py-2 flex items-center border-[1px] focus:bg-black focus:text-white border-slate-500 mt-10 rounded-3xl" type="button">
                <h1 className="text-base font-ralway font-thin text-center">
                    Contact us 
                </h1>
            </button>
          
        </div>
       
        </center>
         {showContent  && (
        <Contact />        
        )}
    </div>
  )
}

export default Lets
