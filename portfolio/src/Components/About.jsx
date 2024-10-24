
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function About() {
  useGSAP(()=>{
    gsap.from('.abt,#me', {

      
      x:-100,
      duration:0.8,
      
      stagger:0.2,
      opacity:0,

      scrollTrigger: {
        trigger: '.abt ,#me ',
        start: 'top 55%',  // When the top of the element hits 80% of the viewport height
        
 // Show markers to help debug
      },
     
    });
    

   
  })
  return (
    <div className=" w-full h-auto sm:mt-24  px-2 mt-28">
      <div className=" w-full px-2 sm:px-6">
        <h1 className=" abt  text-xs sm:text-3xl opacity-70  font-ralway font-semibold">Hi,</h1>
      </div>
      <div className="w-full h-auto flex sm:justify-between sm:px-12  gap-2">
        <div className="w-[200px] sm:w-[500px] h-auto px-2 py-2">
            <h1  className=" abt text-xs sm:text-4xl font-ralway font-bold">
            I m Kuvarji Gupta, a passionate web developer 
            </h1>
            <br />
            <h1 className=" abt  text-xs sm:text-4xl font-ralway font-bold sm:mt-4">
            with a keen interest in creating dynamic and responsive web applications. 
            
            </h1>

            <div className="mt-4 sm:mt-24">
                <button className=" abt px-4 sm:px-6 sm:py-2 py-2 text-xs sm:text-xl font-ralway border-[1px] hover:bg-black hover:text-white border-slate-500 rounded-3xl" type="button">
                   
                      Resume
                   
                </button>
            </div>

        </div>
        <div className="sm:w-[500px] w-[200px] h-auto  rounded-md">
          <img id='me' className="  rounded-md sm:w-[500px] sm:h-[400px] object-cover sm:object-left-top w-[200px] h-[180px] " src="/me.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
