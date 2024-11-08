import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Internship() {
  useGSAP(()=>{
   
    gsap.from('.ct', {

      x:-100,
        duration:0.5,
        
        stagger:0.4,
        opacity:0,
  
        scrollTrigger: {
          trigger: '.ct',
          start: 'top 60%',  // When the top of the element hits 80% of the viewport height
          
  // Show markers to help debug
        }
       
      }),
      gsap.from('.ext', {

        y:-200,
          duration:0.5,
          
          
          opacity:0,
    
          scrollTrigger: {
            trigger: '.ext',
            start: 'top 30%',  // When the top of the element hits 80% of the viewport height
            
     // Show markers to help debug
          }
         
        })
})
  return (
    <center>
    <div className="mt-28 ct w-full h-auto   ">
      <div className="min-w-[300px] sm:w-[1000px]  h-auto  px-2 py-2 ">
        <div className="w-full h-auto border-[1px] border-slate-300 px-2 py-2 rounded-md">

            <h1 className="text-4xl  ct sm:text-6xl  flex items-start font-ralway font-bold ">
            Experience
            </h1>
            <h1 className="text-slate-700 ct opacity-90 mt-8 font-ralway text-xs sm:text-2xl">  
        
            Gained hands-on experience in web development during an internship at Codsoft, focusing on building responsive websites. Developed skills in HTML, CSS, JavaScript, and back-end integration, contributing to dynamic projects and enhancing knowledge in front-end and full stack development.
</h1>
            <div className="mt-10">
                <h1 className="text-md ct sm:text-xl flex items-start font-ralway font-medium px-2 py-2 bg-slate-200 border-[1px] border-slate-300 rounded-md bg-opacity-30 mt-4">
                    Company Name - CodSoft
                </h1>
                <h1 className="text-md ct sm:text-xl flex items-start font-ralway font-medium px-2 py-2 bg-slate-200 border-[1px] border-slate-300 rounded-md bg-opacity-30 mt-4">
                    Type - Virtual
                </h1>
                <h1 className="text-md ct sm:text-xl flex items-start font-ralway font-medium px-2 py-2 bg-slate-200 border-[1px] border-slate-300 rounded-md bg-opacity-30 mt-4">
                    Role - Web Development 
                </h1>

                <h1 className="text-md ct sm:text-xl flex items-start font-ralway font-medium px-2 py-2 bg-slate-200 border-[1px] border-slate-300 rounded-md bg-opacity-30 mt-4">
                    Time - 5 Aug 2024 to 5 Sept 2024
                </h1>
                <h1 className="text-md ct sm:text-xl flex items-start font-ralway font-medium px-2 py-2 bg-slate-200 border-[1px] border-slate-300 rounded-md bg-opacity-30 mt-4">
                    Responsibility - Team work
                </h1>
            </div>
            {/* certificate */}
            <center>
    <div className=" mt-5">
    
      <div className=" w-full h-auto  ">
        <div className='w-[250px] h-[180px] border-2 p-1 ext  rounded-md  bg-slate-200 '>
               <div className=' w-full h-[170px] rounded-md'>
{/* image add or heading */}
<img className=" w-full h-[170px] rounded-md  object-cover object-center" src="/codsoft.jpg" alt="" />


               </div>

               </div>
        </div>
    </div>
    </center>
        </div>

      </div>

    </div>

    

    </center>
  )
}

export default Internship
