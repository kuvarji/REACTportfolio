
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { useState } from "react";
import Complete from "./Complete";
import img1 from '/pro1.png'
import img2  from '/pro2.png'
import img3  from '/pro3.png'
function Prolink() {
    useGSAP(()=>{
        gsap.from('.bt', {
    
        x:-100,
          duration:0.8,
          
          stagger:0.3,
          opacity:0,
    
          scrollTrigger: {
            trigger: '.bt',
            start: 'top 90%',  // When the top of the element hits 80% of the viewport height
            
     // Show markers to help debug
          }
         
        })
    })
  
    const [visibleDiv, setVisibleDiv] = useState(null);

    // Step 2: Handlers to show specific divs
    const showFirstDiv = () => setVisibleDiv('first');
    const showSecondDiv = () => setVisibleDiv('second');
    const showThirdDiv = () => setVisibleDiv('third');
  return (

    
    <div className="w-full h-auto px-5 mt-4 sm:px-24 sm:mt-10 pb-5 ">
     <div className="w-full h-auto px-2 py-4 flex justify-start gap-8 sm:gap-20">

        <button onClick={showFirstDiv}  className="px-3 bt sm:px-6 sm:py-3 sm:text-base   focus:bg-black  text-black opacity-80 focus:text-white  font-ralway text-[5px] drop-shadow-md border-[1px] border-slate-500 rounded-3xl   py-2" type="button">
          
            Project 1
           
        </button>

        <button  onClick={showSecondDiv} className="px-3 bt sm:px-6 sm:py-3 sm:text-base  focus:bg-black  text-black opacity-80 focus:text-white  font-ralway text-[5px] drop-shadow-md border-[1px] border-slate-500 rounded-3xl   py-2" type="button">
         
            Project 2
          
        </button>


        <button onClick={showThirdDiv} className="px-3 bt sm:px-6 sm:py-3 sm:text-base  focus:bg-black  text-black opacity-80 focus:text-white  font-ralway text-[5px] drop-shadow-md border-[1px] border-slate-500 rounded-3xl   py-2" type="button">
          
            Project 3
          
        </button>


     </div>
     {visibleDiv === 'first' && (
        <Complete name= {img1} link= {"https://artics.onrender.com/"} pname="This is Article or News Website in which you can perform CRUD operation  "/>        
        )}

{visibleDiv === 'second' && (
    <Complete name= {img2} link= {"https://kuvarji.github.io/Event-managment-website/"} pname="This is Event- Managment Website  in which you can perform CRUD operation  " />
    )}

{visibleDiv === 'third' && (
    <Complete name= {img3} link={"https://main--nss-certificates.netlify.app/"} pname="This is certificates Website in which you can download your certificate if you are valid person  "/>
    )}
    </div>
  )
}

export default Prolink
