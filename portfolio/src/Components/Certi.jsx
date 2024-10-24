import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Certi() {
  useGSAP(()=>{
    gsap.from('.crt', {

    x:-100,
      duration:0.5,
      
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
