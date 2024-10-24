

import { motion, useScroll, useTransform } from "framer-motion";

import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Skills() {
  useGSAP(()=>{
    gsap.from('.skl', {

    x:-100,
      duration:0.5,
      
      stagger:0.3,
      opacity:0,

      scrollTrigger: {
        trigger: '.skl',
        start: 'top 60%',  // When the top of the element hits 80% of the viewport height
        
// Show markers to help debug
      }
     
    })
})
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  return (

    <div className="w-full h-auto p-0 mt-12 sm:mt-16 ">
      <div className="w-full  sm:px-20  px-8 py-5">
        <h1 className="text-black skl font-ralway text-4xl sm:text-6xl  font-semibold tracking-tighter mt-2 mb-4">
        Skills
        </h1>
   
      </div>
        {/* 1 */}
      <motion.div
      style={{
        scale
      }}

      //  style={{ scale }}
      
      className="w-full h-auto py-2 px-2 flex justify-center gap-8 sm:gap-32 mt-4 sm:mt-20 ">
      <div className="w-[45px] h-[45px] sm:w-[70px]  sm:h-[70px] bg-slate-200 px-2 py-2  rounded-md">
        <img src="/html.png" alt="" />
      </div>
      <div className="w-[45px] h-[45px] sm:w-[70px] sm:h-[70px] bg-slate-200 px-2 py-2 rounded-md">
      <img src="/css.png" alt="" />
      </div>

      <div className="w-[45px] h-[45px] sm:w-[70px] sm:h-[70px] bg-slate-200 px-2 py-2 rounded-md">
      <img src="/Tailwind CSS.png" alt="" />
      </div>

      </motion.div>
      {/* 2 */}
      <motion.div
      style={{
        scale
      }}

      //  style={{ scale }}
      
      className="w-full h-auto sm:mt-5 py-2 px-2 flex justify-center gap-8 sm:gap-32 ">
      <div className="w-[45px] h-[45px] sm:w-[70px] sm:h-[70px] bg-slate-200 px-2 py-2 rounded-md">
      <img src="/js.png" alt="" />
      </div>
      <div className="w-[45px] h-[45px] sm:w-[70px] sm:h-[70px] bg-slate-200 px-2 py-2 rounded-md">
      <img className="rounded-sm" src="/gsap.jpg" alt="" />
      </div>

      <div className="w-[45px] h-[45px] sm:w-[70px] sm:h-[70px] bg-slate-200 px-2 py-2 rounded-md">
      <img src="/react.png" alt="" />
      </div>

      </motion.div>
      {/* 3 */}
      <motion.div
      style={{
        scale
      }}

      //  style={{ scale }}
      
      className="w-full h-auto sm:mt-5 py-2 px-2 flex justify-center gap-8 sm:gap-32 ">
       <div className="w-[45px] h-[45px] sm:w-[70px] sm:h-[70px] bg-slate-200 px-2 py-2 rounded-md">
      <img src="/n.png" alt="" />
      </div>
      <div className="w-[45px] h-[45px] sm:w-[70px] sm:h-[70px] bg-slate-200 px-2 py-2 rounded-md">
      <img src="/express.png" alt="" />
      </div>

      <div className="w-[45px] h-[45px] sm:w-[70px] sm:h-[70px] bg-slate-200 px-2 py-2 rounded-md">
      <img src="/mongodb.png" alt="" />
      </div>

      </motion.div>
    </div>
  )
}

export default Skills
