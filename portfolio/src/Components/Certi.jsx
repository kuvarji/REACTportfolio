import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Certi() {
  useGSAP(()=>{
    gsap.from('.crt', {

    x:-100,
      duration:1,
      
      stagger:0.3,
      opacity:0,

      scrollTrigger: {
        trigger: '.crt',
        start: 'top 60%',  // When the top of the element hits 80% of the viewport height
        
 // Show markers to help debug
      }
     
    })
})
  return (
   
    <div className=" mt-24">
    <div className="w-full  sm:px-20  px-8 py-5">
        <h1 className="text-black crt font-ralway text-4xl sm:text-6xl  font-semibold tracking-tighter mt-2 mb-4">
        Certificates
        </h1>
 <h1 className="text-slate-700 crt opacity-90 mt-8 font-ralway text-xs sm:text-2xl tracking-tighter">  
        This certificate is awarded by PW Skills for the successful completion of the Full Stack Development program. It attests to the holders proficiency in building end-to-end web applications, covering both front-end and back-end technologies. The recipient has demonstrated skills in HTML, CSS, and JavaScript, along with frameworks like React for creating responsive, interactive user interfaces. They are also adept in server-side development with Node.js, database management with MongoDB and MySQL, and deployment practices. This certification highlights their readiness to develop robust, efficient, and user-centered applications across the full development stack.
</h1>
   
      </div>
      <center>
      <div className=" crt w-full h-auto mt-7  ">
        <div className='w-[250px] sm:w-[500px] h-[180px] sm:h-[313px] border-2 p-1   rounded-md  bg-slate-200 '>
               <div className=' w-full h-[313px] rounded-md'>
{/* image add or heading */}
<img className=" w-full h-[170px] sm:h-[300px] rounded-md  object-cover object-center" src="/kuvarji.jpeg" alt="" />


               </div>

               </div>
        </div>
        </center>
    </div>
    
  )
}

export default Certi
